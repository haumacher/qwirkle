package qwirkle.client;

import com.google.gwt.core.client.EntryPoint;

import elemental2.dom.DomGlobal;
import elemental2.svg.SVGSVGElement;
import qwirkle.shared.Nachzugstapel;
import qwirkle.shared.Qwirkle.Farbe;
import qwirkle.shared.Qwirkle.Form;
import qwirkle.shared.Qwirkle.Stein;
import qwirkle.shared.Spielfeld;

/**
 * Einstiegspunkt in die GWT-Applikation.
 * 
 * @see #onModuleLoad()
 */
public class App implements EntryPoint {
	
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
		
		Zug zug = new Zug(spielfeldDarstellung);
		
		for (int n = 0; n < 6; n++) {
			Stein stein = stapel.nimmStein();
			SteinDarstellung darstellung = new SteinDarstellung(vorratsAnzeige, stein);
			darstellung.positioniere(50 + n*100, 0);
			darstellung.zeigeAn();
			
			darstellung.macheVerschiebbar(zug);
		}
	}
	
	static class Zug implements Aktion {

		private SpielfeldDarstellung _spielfeldDarstellung;

		/** 
		 * Creates a {@link Zug}.
		 */
		public Zug(SpielfeldDarstellung spielfeldDarstellung) {
			_spielfeldDarstellung = spielfeldDarstellung;
		}
		
		@Override
		public void beiKnopfLosLassen(double left, double top, SteinDarstellung steinDarstellung) {
			Position position = _spielfeldDarstellung.berechneSpielfeldPosition((int)left, (int)top);
			Stein stein = steinDarstellung.getStein();
			int x = position.getX();
			int y = position.getY();
			if (_spielfeldDarstellung.getSpielfeld().zugErlaubt(x, y, stein)) {
				_spielfeldDarstellung.fügeEin(x, y, stein);
				steinDarstellung.fixiere();
			} else {
				steinDarstellung.zeigeAn();
			}
		}
		
	}
	
}
