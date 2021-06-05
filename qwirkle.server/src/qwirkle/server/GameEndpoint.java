/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import qwirkle.common.messages.GameClosed;
import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.GameStarted;
import qwirkle.common.messages.GameUpdated;

/**
 * Endpoint for all communication that is specific to a certain game instance.
 */
public class GameEndpoint {

	private static final Logger LOG = Logger.getLogger(GameEndpoint.class.getName());

	private GameInfo _info;
	
	private final Map<String, UserEndpoint> _users = new HashMap<>();

	private boolean _started;

	/** 
	 * Creates a {@link GameEndpoint}.
	 * @param name 
	 *
	 */
	public GameEndpoint(String name) {
		_info = GameInfo.gameInfo().setGameId(IDSource.createId()).setName(name);
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
			
			_info.addUser(user.getUserInfo());
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
			
			_info.setUsers(
					_info.getUsers()
					.stream()
					.filter(info -> !info.getUserId().equals(userId))
					.collect(Collectors.toList()));
		}
		
		if (remainingUsers.isEmpty()) {
			GameManager.internalGameClosed(this);
			if (!isStarted()) {
				UserManager.broadCastToIdleUsers(GameClosed.gameClosed().setGameId(gameId));
			}
		} else {
			sendGameUpdate(remainingUsers); 
		}
	}
	
	private void sendGameUpdate(List<UserEndpoint> receivers) {
		GameUpdated message = GameUpdated.gameUpdated().setGame(_info);
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
		
		UserEndpoint.broadCast(_users.values(), GameStarted.gameStarted().setGame(_info));
	}

}
