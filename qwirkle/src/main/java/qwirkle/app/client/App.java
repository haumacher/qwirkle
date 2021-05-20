package qwirkle.app.client;

import java.io.IOException;

import com.google.gwt.core.client.EntryPoint;

import de.haumacher.msgbuf.io.StringR;
import de.haumacher.msgbuf.io.StringW;
import de.haumacher.msgbuf.json.JsonReader;
import de.haumacher.msgbuf.json.JsonWriter;
import elemental2.dom.DomGlobal;
import elemental2.dom.WebSocket;
import elemental2.svg.SVGSVGElement;
import qwirkle.app.shared.Nachzugstapel;
import qwirkle.app.shared.Qwirkle.Farbe;
import qwirkle.app.shared.Qwirkle.Form;
import qwirkle.app.shared.Qwirkle.Stein;
import qwirkle.app.shared.Spielfeld;
import qwirkle.common.messages.ClientMessage;
import qwirkle.common.messages.CreateGameResult;
import qwirkle.common.messages.GameClosed;
import qwirkle.common.messages.GameOpened;
import qwirkle.common.messages.Login;
import qwirkle.common.messages.OpenGames;
import qwirkle.common.messages.ServerError;
import qwirkle.common.messages.ServerMessage;
import qwirkle.common.messages.UserJoined;
import qwirkle.common.messages.UserLeft;

/**
 * Einstiegspunkt in die GWT-Applikation.
 * 
 * @see #onModuleLoad()
 */
public class App implements EntryPoint, ServerMessage.Visitor<Void, Void> {
	
	private WebSocket _socket;

	@Override
	public void onModuleLoad() {
		Nachzugstapel stapel = new Nachzugstapel();
		
		SVGSVGElement spielfeldAnzeige = (SVGSVGElement) DomGlobal.document.getElementById("spielfeld");
		
		Spielfeld spielfeld = new Spielfeld();
		spielfeld.set(0, 0, new Stein(Farbe.red, Form.circle));
		spielfeld.set(0, 1, new Stein(Farbe.red, Form.square));
		spielfeld.set(1, 0, new Stein(Farbe.green, Form.circle));
		
		SpielfeldDarstellung spielfeldDarstellung = new SpielfeldDarstellung(spielfeldAnzeige, spielfeld);
		spielfeldDarstellung.zeigeAn();
		
		SVGSVGElement vorratsAnzeige = (SVGSVGElement) DomGlobal.document.getElementById("vorrat");
		
		Vorrat vorrat = new Vorrat(vorratsAnzeige, stapel);
		vorrat.fülleAuf();
		vorrat.starteZug(spielfeldDarstellung);

		_socket = new WebSocket("ws://localhost:8080/qwirkle/talk");
		_socket.onopen = evt -> {
			login();
		};
		
		_socket.onmessage = evt -> {
			try {
				String data = evt.data.asString();
				ServerMessage message = ServerMessage.readServerMessage(new JsonReader(new StringR(data)));
				message.visit(this, null);
			} catch (IOException ex) {
				DomGlobal.console.info("Parsing message failed.", ex);
			}
		};
	}

	private void login() {
		send(Login.login().setName("Hi5"));
	}

	private void send(ClientMessage message) {
		try {
			StringW out = new StringW();
			message.writeTo(new JsonWriter(out));
			_socket.send(out.toString());
		} catch (IOException ex) {
			DomGlobal.console.info("Sending message failed.", ex);
		}
	}

	@Override
	public Void visit(CreateGameResult self, Void arg) {
		DomGlobal.console.info("Received: ", self);
		return null;
	}

	@Override
	public Void visit(ServerError self, Void arg) {
		DomGlobal.console.info("Received: ", self);
		return null;
	}

	@Override
	public Void visit(OpenGames self, Void arg) {
		DomGlobal.console.info("Received: ", self);
		return null;
	}

	@Override
	public Void visit(GameOpened self, Void arg) {
		DomGlobal.console.info("Received: ", self);
		return null;
	}

	@Override
	public Void visit(GameClosed self, Void arg) {
		DomGlobal.console.info("Received: ", self);
		return null;
	}

	@Override
	public Void visit(UserJoined self, Void arg) {
		DomGlobal.console.info("Received: ", self);
		return null;
	}

	@Override
	public Void visit(UserLeft self, Void arg) {
		DomGlobal.console.info("Received: ", self);
		return null;
	}
	
}
