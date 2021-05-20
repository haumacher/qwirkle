/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import elemental2.svg.SVGSVGElement;
import qwirkle.app.shared.Nachzugstapel;
import qwirkle.app.shared.Spielfeld;
import qwirkle.app.shared.Qwirkle.Stein;

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

	/**
	 * Erbauer für einen Spielzug.
	 * 
	 * <p>
	 * Nach einer {@link Verschiebung} einer {@link SteinDarstellung} aus dem
	 * {@link Vorrat} wird der entsprechende Stein und seine Zielposition in den
	 * {@link Zug} eingefügt. Es können mehrere {@link Verschiebung}en getätigt
	 * werden, um einen {@link Zug} aufzubauen.
	 * </p>
	 */
	class Zug implements Aktion {
		
		final SpielfeldDarstellung _anzeige;
		
		private Map<SteinDarstellung, AnlegeOperation> _teilZüge = new HashMap<>();

		/** 
		 * Creates a {@link Zug}.
		 */
		public Zug(SpielfeldDarstellung anzeige) {
			_anzeige = anzeige;
		}
		
		@Override
		public void beiKnopfLosLassen(double left, double top, SteinDarstellung steinDarstellung) {
			Position position = _anzeige.berechneSpielfeldPosition((int)left, (int)top);
			int x = position.x();
			int y = position.y();
			
			AnlegeOperation teilZug = _teilZüge.remove(steinDarstellung);
			if (teilZug != null) {
				steinDarstellung = teilZug.macheRückgängig();
			}
			
			Stein stein = steinDarstellung.getStein();
			Spielfeld spielfeld = _anzeige.getSpielfeld();
			boolean zugErlaubt = spielfeld.zugErlaubt(x, y, stein);

			if (zugErlaubt) {
				Bereich zugBereich = zugBereich(x, y);
				
				zugErlaubt = prüfeGesamtzug(spielfeld, zugBereich, x, y);
				
				if (!zugErlaubt) {
					// Prüfe, ob duch Zurücknehmen von bereits getätigten Zügen, der Zug legalisiert werden kann.
					
					// Bilde eine Bereich, der nur aus einer Reihe besteht.
					Bereich linie = new Bereich(x, y);
					for (AnlegeOperation operation : _teilZüge.values()) {
						int opX = operation.x();
						int opY = operation.y();
						
						if (linie.istZeile() && opY == linie.y1() || linie.istSpalte() && opX == linie.x1()) {
							linie.add(operation.position());
						}
					}
					
					// Behalte nur solche Teilzüge, die zusammen mit der
					// aktuellen Position in einer Reihe liegen (ohne Lücken).
					Bereich reihe = new Bereich(x, y);
					boolean istZeile = linie.istZeile();
					baueReihe:
					for (Position zugPosition : linie) {
						if (istZeile) {
							int dx = zugPosition.x() > x ? -1 : 1;
							for (int testX = zugPosition.x(); testX != x; testX += dx) {
								Position testPosition = new Position(testX, y);
								if (!linie.enthält(testPosition) && !spielfeld.istBesetzt(testPosition)) {
									continue baueReihe;
								}
							}
						} else {
							int dy = zugPosition.y() > y ? -1 : 1;
							for (int testY = zugPosition.y(); testY != y; testY += dy) {
								Position testPosition = new Position(x, testY);
								if (!linie.enthält(testPosition) && !spielfeld.istBesetzt(testPosition)) {
									continue baueReihe;
								}
							}
						}
						reihe.add(zugPosition);
					}

					// Prüfe, ob die verbleibenden Züge noch Kontakt zu einem bestehenden Stein auf dem Spielfeld haben.
					for (Position zugPosition : reihe) {
						for (Position nachbar : zugPosition.nachbarn()) {
							if (zugBereich.enthält(nachbar)) {
								// Zählt nicht, nicht auf dem ursprünglichen Spielfeld.
								continue;
							}
							
							if (spielfeld.istBesetzt(nachbar)) {
								zugErlaubt = true;
								break;
							}
						}
					}
					
					if (zugErlaubt) {
						// Zug wurde zu einem legalen Zug verkleinert.
						for (java.util.Iterator<AnlegeOperation> operationen = _teilZüge.values().iterator();  operationen.hasNext(); ) {
							AnlegeOperation operation = operationen.next();
							if (!reihe.enthält(operation.position())) {
								SteinDarstellung vorratsStein = operation.macheRückgängig();
								SteinDarstellung gesetzterStein = operation.gesetzterStein();
								gesetzterStein.fixiere();
								gesetzterStein.verstecke();
								vorratsStein.zeigeAn();
								vorratsStein.macheVerschiebbar(this);
								operationen.remove();
							}
						}
					}
				}
			}
			
			if (zugErlaubt) {
				SteinDarstellung gesetzterStein = _anzeige.fügeEin(x, y, stein);
				gesetzterStein.setzeVorschau(true);
				gesetzterStein.macheVerschiebbar(this);
				
				steinDarstellung.fixiere();
				entferneStein(steinDarstellung);
				
				_teilZüge.put(gesetzterStein, new AnlegeOperation(steinDarstellung, x, y, gesetzterStein));
			} else {
				if (teilZug != null) {
					teilZug.wiederhole();
					_teilZüge.put(teilZug.gesetzterStein(), teilZug);
				} else {
					steinDarstellung.zeigeAn();
				}
			}
		}

		/**
		 * Prüfe, ob der Gesamtzug noch legal ist.
		 */
		private boolean prüfeGesamtzug(Spielfeld spielfeld, Bereich zugBereich,
				int x, int y) {
			// Prüfe, ob alle bisherigen Teilzüge in dieselbe Reihe anlegen.
			if (!zugBereich.istReihe()) {
				return false;
			}
			
			// Prüfe, ob die Reihe keine Lücken enthält.
			for (int testX = zugBereich.x1(); testX <= zugBereich.x2(); testX++) {
				for (int testY = zugBereich.y1(); testY <= zugBereich.y2(); testY++) {
					if (spielfeld.get(testX, testY) == null) {
						if (testX != x || testY != y) {
							return false;
						}
					}
				}
			}
			
			// Prüfe, ob die Reihe (noch) an einen Stein anstößt, der nicht
			// aus dem aktuellen Zug stammt. Durch forgesetztes verschieben
			// der Steine auf dem Spielfeld kann man sonst die ursprüngliche
			// Gültigkeitsregel für einen Zug umgehen.
			if (!zugBereich.nachbarBesetztIn(spielfeld)) {
				return false;
			}
			
			return true;
		}

		private Bereich zugBereich(int x, int y) {
			Bereich bereich = new Bereich(x, y);
			for (AnlegeOperation operation : _teilZüge.values()) {
				bereich.add(operation.position());
			}
			return bereich;
		}
		
		/**
		 * Ein Teilzug, der eine {@link SteinDarstellung} aus dem {@link Vorrat}
		 * auf das {@link Spielfeld} legt.
		 * 
		 * <p>
		 * Der Teilzug merkt sich alle Informationen, um ihn eventuell
		 * nocheinmal rückgängig machen zu können, siehe {@link #macheRückgängig()}.
		 * </p>
		 */
		class AnlegeOperation {
			private final SteinDarstellung _vorratsStein;
			private final Position _position;
			private final SteinDarstellung _gesetzterStein;

			public AnlegeOperation(SteinDarstellung vorratsStein, int x, int y, SteinDarstellung gesetzterStein) {
				_vorratsStein = vorratsStein;
				_position = new Position(x, y);
				_gesetzterStein = gesetzterStein;
			}

			/** 
			 * Die {@link Position} dieser {@link AnlegeOperation}.
			 */
			public Position position() {
				return _position;
			}

			public SteinDarstellung macheRückgängig() {
				_anzeige.getSpielfeld().set(x(), y(), null);
				return _vorratsStein;
			}

			public void wiederhole() {
				_anzeige.getSpielfeld().set(x(), y(), _vorratsStein.getStein());
				gesetzterStein().zeigeAn();
			}

			public SteinDarstellung gesetzterStein() {
				return _gesetzterStein;
			}

			/**
			 * Die X-Position an die der {@link Stein} auf das {@link Spielfeld} gelegt wurde.
			 */
			public int x() {
				return _position.x();
			}

			/**
			 * Die Y-Position an die der {@link Stein} auf das {@link Spielfeld} gelegt wurde.
			 */
			public int y() {
				return _position.y();
			}
		}
		
	}

}
