/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.List;
import java.util.function.Consumer;

import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.layout.Layout;
import org.dominokit.domino.ui.notifications.Notification;
import org.dominokit.domino.ui.utils.DominoElement;

import elemental2.dom.DomGlobal;
import elemental2.dom.Event;
import elemental2.dom.EventListener;
import elemental2.dom.HTMLDivElement;
import qwirkle.app.client.Communication;
import qwirkle.app.client.SpielfeldDarstellung;
import qwirkle.app.client.Vorrat;
import qwirkle.common.messages.Farbe;
import qwirkle.common.messages.FillInventory;
import qwirkle.common.messages.Form;
import qwirkle.common.messages.GameAction;
import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.MakeTurn;
import qwirkle.common.messages.NotifyTurn;
import qwirkle.common.messages.Placement;
import qwirkle.common.messages.QwirkleServerMessage;
import qwirkle.common.messages.StartTurn;
import qwirkle.common.messages.UserInfo;
import qwirkle.common.model.Qwirkle;
import qwirkle.common.model.Spielfeld;

/**
 * TODO
 */
public class GameScreen implements Consumer<QwirkleServerMessage>, QwirkleServerMessage.Visitor<Void, Void> {

	private Communication _communication;
	private UserInfo _userInfo;
	private GameInfo _game;
	
	private Spielfeld _spielfeld;
	private SpielfeldDarstellung _spielfeldDarstellung;
	private Vorrat _vorrat;
	private Layout _layout;
	
	private EventListener _onResize;

	/** 
	 * Creates a {@link GameScreen}.
	 */
	public GameScreen(Communication communication, UserInfo userInfo, GameInfo game, Layout layout) {
		_communication = communication;
		_userInfo = userInfo;
		_game = game;
		_layout = layout;

		_communication.addGameListener(game.getGameId(), this);
	}
	
	/** 
	 * TODO
	 */
	public void show() {
		DominoElement<HTMLDivElement> contentPanel = _layout.getContentPanel();
		
		DomGlobal.document.addEventListener("resize", _onResize = this::fenstergrößeVerändert);
		
		_spielfeld = new Spielfeld();
		_spielfeld.set(0, 0, Qwirkle.stein(Farbe.red, Form.circle));
		
		HTMLDivElement root = DominoElement.div()
			.styler(s -> s.setPosition("absolute")
				.setTop("70px")
				.setLeft("0px")
				.setRight("0px")
				.setBottom("0px")
				.setOverFlow("hidden"))
			.element();
		
		HTMLDivElement top = DominoElement.div().styler(s -> s.setPosition("absolute").setTop("0px").setLeft("0px").setRight("0px").setBottom("120px")).element();
		{
			_spielfeldDarstellung = new SpielfeldDarstellung(top, _spielfeld);
		}
		root.appendChild(top);
		
		HTMLDivElement bottomLeft = DominoElement.div().styler(s -> s.setPosition("absolute").setBottom("0px").setLeft("0px").setWidth("calc(50% - 60px)").setHeight("120px")).element();
		{
			_vorrat = new Vorrat(bottomLeft, _spielfeldDarstellung);
		}
		root.appendChild(bottomLeft);

		HTMLDivElement bottomMiddle = DominoElement.div()
			.styler(s -> s.setPosition("absolute")
				.setBottom("0px")
				.setLeft("calc(50% - 60px)")
				.setWidth("120px")
				.setHeight("120px")
				.setPadding("10px"))
			.element();
		bottomMiddle.appendChild(Button.createPrimary("Fertig").addClickListener(this::beendeZug).element());
		root.appendChild(bottomMiddle);
		
		contentPanel.appendChild(root);
		
		_spielfeldDarstellung.zeigeAn();
	}
	
	private void fenstergrößeVerändert(@SuppressWarnings("unused") Event evt) {
		
	}

	private void starteZug(String nextUserId) {
		if (nextUserId.equals(_userInfo.getUserId())) {
			_vorrat.starteZug();
			Notification.createInfo("Du bist am Zug!").show();
		} else {
			UserInfo nextUser = _game.getPlayers().stream().filter(p -> p.getUserId().equals(nextUserId)).findFirst().get();
			Notification.createInfo("Jetzt ist " + nextUser.getName() + " am am Zug!").show();
		}
	}

	private void beendeZug(@SuppressWarnings("unused") Event evt) {
		List<Placement> beschreibung = _vorrat.beendeZug();
		
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
		for (Placement placement : self.getPlacements())  {
			_spielfeldDarstellung.fügeEin(placement.getX(), placement.getY(), placement.getStein());
		}
		String nextUserId = self.getNextUserId();
		starteZug(nextUserId);
		return null;
	}

	@Override
	public Void visit(FillInventory self, Void arg) {
		_vorrat.fülleAuf(self.getSteine());
		return null;
	}

}
