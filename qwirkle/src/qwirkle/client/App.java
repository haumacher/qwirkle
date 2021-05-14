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
		
		Vorrat vorrat = new Vorrat(vorratsAnzeige, stapel);
		vorrat.fülleAuf();
		vorrat.starteZug(spielfeldDarstellung);
	}
	
}
