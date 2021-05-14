/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.client;

import java.util.ArrayList;
import java.util.List;

import elemental2.svg.SVGSVGElement;
import qwirkle.shared.Nachzugstapel;
import qwirkle.shared.Qwirkle.Stein;

/**
 * Der {@link Stein}-Vorrat eines Spielers.
 * 
 * <p>
 * Der {@link Vorrat} umfasst am Anfang eines Zuges normalerweise 6
 * {@link Stein}e, solange der {@link Nachzugstapel} noch ausreichend gefüllt
 * ist.
 * </p>
 */
public class Vorrat {
	
	private List<SteinDarstellung> _steine = new ArrayList<>();
	
	private SVGSVGElement _svg;
	
	private Nachzugstapel _stapel;

	/** 
	 * Creates a {@link Vorrat}.
	 */
	public Vorrat(SVGSVGElement svg, Nachzugstapel stapel) {
		_svg = svg;
		_stapel = stapel;
	}
	
	/** 
	 * Die Anzahl {@link Stein}e im {@link Vorrat}.
	 */
	public int anzahlSteine() {
		return _steine.size();
	}
	
	/**
	 * Die {@link SteinDarstellung} an Position n.
	 */
	public SteinDarstellung gibStein(int n) {
		return _steine.get(n);
	}

	/**
	 * Füllt den {@link Vorrat} mit neuen Steinen aus dem {@link Nachzugstapel} auf. 
	 */
	public void fülleAuf() {
		// Bringe Steine-Liste in die Reihenfolge, in der die Steine gerade auf dem Bildschirm angezeigt werden.
		_steine.sort((s1, s2) -> Double.compare(s1.getX(), s2.getX()));
		
		// Rücke Steine so weit auf, dass Lücken verschwinden.
		double x = 0.0;
		for (int n = 0, cnt = anzahlSteine(); n < cnt; n++) {
			_steine.get(n).positioniere(x, 0);
			
			x += SteinDarstellung.WIDTH;
		}
		
		while (anzahlSteine() < 6 && _stapel.hatNochSteine()) {
			SteinDarstellung darstellung = new SteinDarstellung(_svg, _stapel.nimmStein());
			_steine.add(darstellung);
			
			darstellung.positioniere(x, 0);
			darstellung.zeigeAn();
			
			x += SteinDarstellung.WIDTH;
		}
	}

	/** 
	 * Startet einen Spielzug, indem die {@link Stein}e im {@link Vorrat} verschiebbar gemacht werden.
	 */
	public void starteZug(SpielfeldDarstellung spielfeld) {
		Zug zug = new Zug(spielfeld);
		
		for (SteinDarstellung stein : _steine) {
			stein.macheVerschiebbar(zug);
		}
	}
	
	void entferneStein(SteinDarstellung stein) {
		_steine.remove(stein);
	}

	class Zug implements Aktion {

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
				
				entferneStein(steinDarstellung);
				
				int anzahSteineVorher = anzahlSteine();
				fülleAuf();
				int anzahSteineNachher = anzahlSteine();
				if (anzahSteineNachher > anzahSteineVorher) {
					for (int n = anzahSteineVorher; n < anzahSteineNachher; n++) {
						gibStein(n).macheVerschiebbar(this);
					}
				}
			} else {
				steinDarstellung.zeigeAn();
			}
		}
		
	}

}
