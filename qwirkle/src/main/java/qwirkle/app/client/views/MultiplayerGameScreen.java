/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.dominokit.domino.ui.layout.Layout;

import qwirkle.app.client.Communication;
import qwirkle.common.messages.FillInventory;
import qwirkle.common.messages.GameAction;
import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.MakeTurn;
import qwirkle.common.messages.NotifyTurn;
import qwirkle.common.messages.Placement;
import qwirkle.common.messages.QwirkleServerMessage;
import qwirkle.common.messages.StartTurn;
import qwirkle.common.messages.UserInfo;

/**
 * {@link GameScreen} in einem verteilten Multi-Player-Spiel.
 */
public class MultiplayerGameScreen extends GameScreen implements Consumer<QwirkleServerMessage>, QwirkleServerMessage.Visitor<Void, Void> {

	private final Communication _communication;

	private final GameInfo _game;

	private final UserInfo _userInfo;
	
	private String _activeUserId;
	
	private final Map<String, PlayerStat> _stats;

	/** 
	 * Creates a {@link MultiplayerGameScreen}.
	 */
	public MultiplayerGameScreen(Communication communication, UserInfo userInfo, GameInfo game, Layout layout) {
		super(layout);
		
		_communication = communication;
		_game = game;
		_userInfo = userInfo;
		
		_stats = new LinkedHashMap<>();
		for (UserInfo player: game.getPlayers()) {
			_stats.put(player.getUserId(), new PlayerStat(player.getName()));
		}

		_communication.addGameListener(game.getGameId(), this);
	}
	
	@Override
	protected Iterable<PlayerStat> getPlayerStats() {
		return _stats.values();
	}
	
	@Override
	protected void meinZug(List<Placement> beschreibung) {
		_communication.send(GameAction.create()
				.setGameId(_game.getGameId())
				.setDetail(MakeTurn.create()
					.setPlacements(beschreibung)
					.setUserId(_userInfo.getUserId())));
	}

	@Override
	public void accept(QwirkleServerMessage message) {
		message.visit(this, null);
	}

	@Override
	public Void visit(StartTurn self, Void arg) {
		starteZug(self.getUserId());
		return null;
	}

	@Override
	public Void visit(NotifyTurn self, Void arg) {
		zeigeZug(self.getPlacements());
		_stats.get(_activeUserId).addScore(self.getScore());
		
		String nextUserId = self.getNextUserId();
		starteZug(nextUserId);
		return null;
	}

	protected void starteZug(String nextUserId) {
		setActive(_activeUserId, false);
		setActive(nextUserId, true);
		if (nextUserId.equals(_userInfo.getUserId())) {
			starteZug();
		}
		updatePlayerStats();
	}

	private void setActive(String userId, boolean value) {
		PlayerStat current = _stats.get(userId);
		if (current != null) {
			current.setActive(value);
		}
		if (value) {
			_activeUserId = userId;
		}
	}

	@Override
	public Void visit(FillInventory self, Void arg) {
		fülleAuf(self.getSteine());
		return null;
	}

}
