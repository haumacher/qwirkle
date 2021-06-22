/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.List;
import java.util.function.Consumer;

import org.dominokit.domino.ui.layout.Layout;
import org.dominokit.domino.ui.notifications.Notification;

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

	/** 
	 * Creates a {@link MultiplayerGameScreen}.
	 */
	public MultiplayerGameScreen(Communication communication, UserInfo userInfo, GameInfo game, Layout layout) {
		super(layout);
		
		_communication = communication;
		_game = game;
		_userInfo = userInfo;

		_communication.addGameListener(game.getGameId(), this);
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
		String nextUserId = self.getNextUserId();
		starteZug(nextUserId);
		return null;
	}

	protected void starteZug(String nextUserId) {
		if (nextUserId.equals(_userInfo.getUserId())) {
			starteZug();
		} else {
			UserInfo nextUser = _game.getPlayers().stream().filter(p -> p.getUserId().equals(nextUserId)).findFirst().get();
			Notification.createInfo("Jetzt ist " + nextUser.getName() + " am am Zug!").show();
		}
	}

	@Override
	public Void visit(FillInventory self, Void arg) {
		fülleAuf(self.getSteine());
		return null;
	}

}
