/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import qwirkle.common.messages.FillInventory;
import qwirkle.common.messages.GameClosed;
import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.GameStarted;
import qwirkle.common.messages.GameUpdate;
import qwirkle.common.messages.GameUpdated;
import qwirkle.common.messages.MakeTurn;
import qwirkle.common.messages.NotifyTurn;
import qwirkle.common.messages.QwirkleServerMessage;
import qwirkle.common.messages.QwirkleUserMessage;
import qwirkle.common.messages.StartTurn;
import qwirkle.common.util.Util;
import qwirkle.server.model.Nachzugstapel;

/**
 * Endpoint for all communication that is specific to a certain game instance.
 */
public class GameEndpoint implements QwirkleUserMessage.Visitor<Void, Void> {

	private static final Logger LOG = Logger.getLogger(GameEndpoint.class.getName());

	private GameInfo _info;
	
	private final Map<String, UserEndpoint> _users = new LinkedHashMap<>();

	private boolean _started;

	private Nachzugstapel _nachzugStapel;
	
	private List<UserEndpoint> _players;
	
	private int _playerId = 0;

	/** 
	 * Creates a {@link GameEndpoint}.
	 * @param name 
	 *
	 */
	public GameEndpoint(String name) {
		_info = GameInfo.create().setGameId(IDSource.createId()).setName(name);
	}
	
	public boolean isStarted() {
		return _started;
	}
	
	/** 
	 * Fügt den gegebenen Spieler zu diesem Spiel hinzu.
	 * 
	 * @return Ob der Spieler hinzugefügt werden konnte. Wenn nicht, dann hat das Spiel bereits begonnen.
	 */
	public boolean addUser(UserEndpoint user) {
		String userId = user.getUserId();
		
		List<UserEndpoint> usersBefore;
		synchronized (_users) {
			if (_started) {
				return false;
			}
			usersBefore = copyUsers();
			_users.put(userId, user);
			
			_info.addPlayer(user.getUserInfo());
		}
		
		String gameId = getGameId();
		LOG.info("User '" + userId + "' joined game '" + gameId + "'.");

		sendGameUpdate(usersBefore);
		return true;
	}

	private List<UserEndpoint> copyUsers() {
		ArrayList<UserEndpoint> usersBefore;
		usersBefore = new ArrayList<>(_users.values());
		return usersBefore;
	}

	/** 
	 * TODO
	 */
	public GameInfo getInfo() {
		return _info;
	}

	/** 
	 * Entfernt den Mitspieler mit der gegebenen ID aus diesem Spiel. 
	 */
	public void removeUser(String userId) {
		String gameId = getGameId();
		
		List<UserEndpoint> remainingUsers;
		synchronized (_users) {
			UserEndpoint removed = _users.remove(userId);
			remainingUsers = copyUsers();
			if (removed == null) {
				return;
			}
			
			LOG.info("User '" + userId + "' left game '" + gameId + "'.");
			
			_info.setPlayers(
					_info.getPlayers()
					.stream()
					.filter(info -> !info.getUserId().equals(userId))
					.collect(Collectors.toList()));
		}
		
		if (remainingUsers.isEmpty()) {
			GameManager.internalGameClosed(this);
			if (!isStarted()) {
				UserManager.broadCastToIdleUsers(GameClosed.create().setGameId(gameId));
			}
		} else {
			sendGameUpdate(remainingUsers); 
		}
	}
	
	private void sendGameUpdate(List<UserEndpoint> receivers) {
		GameUpdated message = GameUpdated.create().setGame(_info);
		UserEndpoint.broadCast(receivers, message);
		
		if (!isStarted()) {
			UserManager.broadCastToIdleUsers(message);
		}
	}

	public String getGameId() {
		return getInfo().getGameId();
	}

	/** 
	 * TODO
	 */
	public Object getUserIds() {
		synchronized (_users) {
			return new HashSet<>(_users.keySet());
		}
	}

	/** 
	 * TODO
	 */
	public void start() {
		synchronized (_users) {
			if (_started) {
				return;
			}
			
			_started = true;
		}
		
		_players = new ArrayList<UserEndpoint>(_users.values());
		_playerId = (int) (_players.size() * Math.random());
		
		UserEndpoint.broadCast(_players, GameStarted.create().setGame(_info));
		
		_nachzugStapel = new Nachzugstapel();
		for (UserEndpoint user : _players) {
			sendUpdate(user, FillInventory.create().setSteine(_nachzugStapel.nimmSteine(6)));
			sendUpdate(user, StartTurn.create().setUserId(currentPlayer().getUserId()));
		}
	}

	private UserEndpoint currentPlayer() {
		return player(_playerId);
	}

	private UserEndpoint player(int id) {
		return _players.get(id);
	}

	private void sendUpdate(UserEndpoint user, QwirkleServerMessage message) {
		user.send(update(message));
	}

	private GameUpdate update(QwirkleServerMessage message) {
		return GameUpdate.create().setGameId(getGameId()).setDetail(message);
	}

	/** 
	 * TODO
	 */
	public void handle(QwirkleUserMessage message) {
		message.visit(this, null);
	}
	
	@Override
	public Void visit(MakeTurn self, Void arg) {
		int id = id(self.getUserId());
		if (id != _playerId) {
			return null;
		}
		
		int lastPlayer = _playerId;
		int nextPlayer = (_playerId + 1) % _players.size();
		_playerId = nextPlayer;
		
		UserEndpoint.broadCast(_players, update(
			NotifyTurn.create()
				.setLastUserId(userId(lastPlayer))
				.setNextUserId(userId(nextPlayer))
				.setPlacements(self.getPlacements())));

		player(lastPlayer).send(update(
			FillInventory.create()
				.setSteine(_nachzugStapel.nimmSteine(self.getPlacements().size()))));

		return null;
	}

	private String userId(int lastPlayer) {
		return _players.get(lastPlayer).getUserId();
	}

	private int id(String userId) {
		return Util.indexOf(_players, p -> p.getUserId().equals(userId));
	}

}
