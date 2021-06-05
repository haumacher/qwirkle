package qwirkle.app.client;

import org.dominokit.domino.ui.cards.Card;
import org.dominokit.domino.ui.grid.Column;
import org.dominokit.domino.ui.grid.Row;
import org.dominokit.domino.ui.icons.Icons;
import org.dominokit.domino.ui.layout.Layout;
import org.dominokit.domino.ui.tree.ToggleTarget;
import org.dominokit.domino.ui.tree.Tree;
import org.dominokit.domino.ui.tree.TreeItem;
import org.dominokit.domino.ui.utils.DominoElement;

import com.google.gwt.core.client.EntryPoint;

import elemental2.dom.DomGlobal;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.svg.SVGLength;
import elemental2.svg.SVGSVGElement;
import qwirkle.app.client.views.JoinGameForm;
import qwirkle.app.client.views.LoginForm;
import qwirkle.app.client.views.StartGameForm;
import qwirkle.app.client.views.WaitForGameStartForm;
import qwirkle.app.shared.Nachzugstapel;
import qwirkle.app.shared.Qwirkle.Farbe;
import qwirkle.app.shared.Qwirkle.Form;
import qwirkle.app.shared.Qwirkle.Stein;
import qwirkle.app.shared.Spielfeld;
import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.UserInfo;

/**
 * Einstiegspunkt in die GWT-Applikation.
 * 
 * @see #onModuleLoad()
 */
public class App implements EntryPoint {
	
	private Layout _layout;
	private Communication _communication;
	private UserInfo _userInfo;
	private GameInfo _game;

	@Override
	public void onModuleLoad() {
		_layout = Layout.create("Qwirkle");
		_layout.getLeftPanel().appendChild(	
			Tree.create("GAME")
				.setToggleTarget(ToggleTarget.ICON)
				.appendChild(
		            TreeItem.create("Startseite", Icons.ALL.home())
		                .addClickListener(this::homeClicked)));
        
		showHomeScreen();
		_layout.show();
		
		_communication = Communication.create().start();
	}
	
	private void homeClicked(Event evt) {
		showHomeScreen();
		_layout.hideLeftPanel();
	}

	private void showGameScreen() {
		DominoElement<HTMLDivElement> contentPanel = clearContent();

		Nachzugstapel stapel = new Nachzugstapel();
		SVGSVGElement spielfeldAnzeige = createSVG(1000, 800);
		contentPanel.appendChild(spielfeldAnzeige);

		SVGSVGElement vorratsAnzeige = createSVG(1000, 100);
		contentPanel.appendChild(vorratsAnzeige);
		
		Spielfeld spielfeld = new Spielfeld();
		spielfeld.set(0, 0, new Stein(Farbe.red, Form.circle));
		spielfeld.set(0, 1, new Stein(Farbe.red, Form.square));
		spielfeld.set(1, 0, new Stein(Farbe.green, Form.circle));
		
		SpielfeldDarstellung spielfeldDarstellung = new SpielfeldDarstellung(spielfeldAnzeige, spielfeld);
		spielfeldDarstellung.zeigeAn();
		
		Vorrat vorrat = new Vorrat(vorratsAnzeige, stapel);
		vorrat.fülleAuf();
		vorrat.starteZug(spielfeldDarstellung);
	}

	private void showHomeScreen() {
		DominoElement<HTMLDivElement> contentPanel = clearContent();
		
		contentPanel.appendChild(
			Row.create().addColumn(
				Column.span4().appendChild(
					Card.create("Starte Spiel", "Starte ein neues Spiel und lade andere Leute im Netzwerk dazu ein.")
						.withWaves().addClickListener(this::startGameClicked)))
			.addColumn(
				Column.span4().appendChild(
					Card.create("Mitspielen", "Suche ein Spiel, das ein anderer gestartet hat und spiele dort mit.")
						.withWaves().addClickListener(this::joinGameClicked)))
			.addColumn(
				Column.span4().appendChild(
					Card.create("Lokal spielen", "Spiele für dich gegen einen Computer-Gegner nur auf deinem Rechner.")
						.withWaves().addClickListener(this::playLocallyClicked))));
	}

	private DominoElement<HTMLDivElement> clearContent() {
		DominoElement<HTMLDivElement> contentPanel = _layout.getContentPanel();
		contentPanel.clearElement();
		return contentPanel;
	}
	
	private void startGameClicked(Event evt) {
		ensureLogin(this::createGame);
	}
	
	private void createGame() {
		clearContent().appendChild(
			StartGameForm.create(_communication, _userInfo, this::gameStarted));
	}
	
	/**
	 * Zeigt eine Make für ein neues Spiel an. Hier kann das Spiel gestartet
	 * werden, wenn genügend Mitspieler eingetroffen sind.
	 */
	private void showStartScreen() {
		//  TODO: Automatically created
		
	}
	
	private void joinGameClicked(Event evt) {
		ensureLogin(this::joinGame);
	}
	
	private void joinGame() {
		clearContent().appendChild(
			JoinGameForm.create(_communication, this::waitForGameStart));
	}
	
	private void waitForGameStart(GameInfo game) {
		clearContent().appendChild(
			new WaitForGameStartForm(_communication, game, this::gameStarted));
	}
	
	private void gameStarted(GameInfo game) {
		_game = game;
		showGameScreen();
	}
	
	/**
	 * Wenn der Nutzer noch nicht angemeldet ist, wird eine Anmeldemaske gezeigt
	 * und die Anmeldung durchgeführt. Anschließend wird die gegebene Aktion
	 * ausgeführt.
	 * 
	 * @param okClicked
	 *        Aktion, die ausgeführt werden soll, wenn die Anmeldung erfolgreich war.
	 */
	private void ensureLogin(Runnable okClicked) {
		if (_userInfo == null) {
			clearContent().appendChild(LoginForm.create(_communication).setContinuation(userInfo -> {
				_userInfo = userInfo;
				okClicked.run();
			}));
		} else {
			okClicked.run();
		}
	}

	private void playLocallyClicked(Event evt) {
		showGameScreen();
	}
	
	private SVGSVGElement createSVG(int width, int height) {
		SVGSVGElement result = (SVGSVGElement) DomGlobal.document.createElementNS("http://www.w3.org/2000/svg", "svg");
		result.width.baseVal.newValueSpecifiedUnits((int) SVGLength.SVG_LENGTHTYPE_PX, width);
		result.height.baseVal.newValueSpecifiedUnits((int) SVGLength.SVG_LENGTHTYPE_PX, height);
		return result;
	}

}
