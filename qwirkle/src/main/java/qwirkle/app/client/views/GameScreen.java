/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.List;
import java.util.function.Consumer;

import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.notifications.Notification;
import org.jboss.elemento.Elements;
import org.jboss.elemento.IsElement;

import elemental2.dom.DomGlobal;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.svg.SVGLength;
import elemental2.svg.SVGSVGElement;
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
public class GameScreen implements IsElement<HTMLDivElement>, Consumer<QwirkleServerMessage>, QwirkleServerMessage.Visitor<Void, Void> {

	private Communication _communication;
	private UserInfo _userInfo;
	private GameInfo _game;
	
	private HTMLDivElement _element;
	private Spielfeld _spielfeld;
	private SpielfeldDarstellung _spielfeldDarstellung;
	private Vorrat _vorrat;

	/** 
	 * Creates a {@link GameScreen}.
	 * @param userInfo 
	 */
	public GameScreen(Communication communication, UserInfo userInfo, GameInfo game) {
		_communication = communication;
		_userInfo = userInfo;
		_game = game;

		_element = Elements.div().element();
		
		SVGSVGElement spielfeldAnzeige = createSVG(1000, 800);
		_element.appendChild(spielfeldAnzeige);

		SVGSVGElement vorratsAnzeige = createSVG(1000, 100);
		_element.appendChild(vorratsAnzeige);
		
		_spielfeld = new Spielfeld();
		_spielfeld.set(0, 0, Qwirkle.stein(Farbe.red, Form.circle));
		_spielfeld.set(0, 1, Qwirkle.stein(Farbe.red, Form.square));
		_spielfeld.set(1, 0, Qwirkle.stein(Farbe.green, Form.circle));
		
		_spielfeldDarstellung = new SpielfeldDarstellung(spielfeldAnzeige, _spielfeld);
		_spielfeldDarstellung.zeigeAn();
		
		_vorrat = new Vorrat(_spielfeldDarstellung, vorratsAnzeige);
		
		_element.appendChild(Button.createDefault("Fertig").addClickListener(this::beendeZug).element());
		
		_communication.addGameListener(game.getGameId(), this);
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

	private void beendeZug(Event evt) {
		List<Placement> beschreibung = _vorrat.beendeZug();
		
		_communication.send(GameAction.gameAction()
			.setGameId(_game.getGameId())
			.setDetail(MakeTurn.makeTurn()
				.setPlacements(beschreibung)
				.setUserId(_userInfo.getUserId())));
	}

	private SVGSVGElement createSVG(int width, int height) {
		SVGSVGElement result = (SVGSVGElement) DomGlobal.document.createElementNS("http://www.w3.org/2000/svg", "svg");
		result.width.baseVal.newValueSpecifiedUnits((int) SVGLength.SVG_LENGTHTYPE_PX, width);
		result.height.baseVal.newValueSpecifiedUnits((int) SVGLength.SVG_LENGTHTYPE_PX, height);
		return result;
	}

	@Override
	public HTMLDivElement element() {
		return _element;
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
