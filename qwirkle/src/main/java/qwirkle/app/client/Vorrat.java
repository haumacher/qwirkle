/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import elemental2.dom.HTMLElement;
import elemental2.svg.SVGGElement;
import elemental2.svg.SVGMatrix;
import elemental2.svg.SVGSVGElement;
import qwirkle.app.client.values.Observer;
import qwirkle.app.client.values.Value;
import qwirkle.common.messages.Placement;
import qwirkle.common.messages.Stein;
import qwirkle.common.model.Position;
import qwirkle.common.model.Spielfeld;

/**
 * Der {@link Stein}-Vorrat eines Spielers.
 * 
 * <p>
 * Der {@link Vorrat} umfasst am Anfang eines Zuges normalerweise 6
 * {@link Stein}e, solange der Nachzugstapel noch ausreichend gefüllt
 * ist.
 * </p>
 */
public class Vorrat implements Observer<Double> {
	
	private static final int PADDING = 10;

	private List<SteinDarstellung> _steine = new ArrayList<>();
	
	private SVGSVGElement _svg;
	
	private SVGGElement _hintergrund;

	private SpielfeldDarstellung _spielfeldDarstellung;

	private Zug _zug;

	private Value<Double> _steinGröße;

	private Value<Double> _maxSteinGröße;

	private SVGMatrix _tx;
	
	/** 
	 * Creates a {@link Vorrat}.
	 * 
	 * @param container Das Umschließende HTML-Element, in dem der {@link Vorrat} dargestellt wird.
	 * @param spielfeldDarstellung Darstellung des Spielfeldes, in das bei einem Zug Steine abgelegt werden können. 
	 */
	public Vorrat(HTMLElement container, SpielfeldDarstellung spielfeldDarstellung, Value<Double> steinGröße, Value<Double> maxSteinGröße) {
		_spielfeldDarstellung = spielfeldDarstellung;
		_steinGröße = steinGröße;
		_maxSteinGröße = maxSteinGröße;
		
		_svg = SVGUtil.createSVG();
		
		_hintergrund = SVGUtil.createG();
		_svg.appendChild(_hintergrund);
		
		container.appendChild(_svg);
		
		_steinGröße.addObserver(this);
	}

	private void updateDimensions() {
		double clientWidth = clientWidth();
		double clientHeight = clientHeight();
		
		double paddedWidth = clientWidth - 2 * PADDING;
		double paddedHeight = clientHeight - 2 * PADDING;
		
		updateSteinGröße(paddedWidth, paddedHeight);
		
		double steinGröße = _steinGröße.get();
		
		double scaleFactor = steinGröße / SteinDarstellung.SIZE;
		double xUrsprung = PADDING + paddedWidth / 2 - 3 * steinGröße;
		double yUrsprung = PADDING + paddedHeight / 2 - steinGröße / 2;
		SVGMatrix tx = _svg.createSVGMatrix().translate(xUrsprung, yUrsprung).scale(scaleFactor);
		_hintergrund.transform.baseVal.initialize(_svg.createSVGTransformFromMatrix(tx));
		
		// _tx = _svg.getScreenCTM().inverse().scale(SteinDarstellung.SIZE / steinGröße).translate(-xUrsprung, -yUrsprung);
	}

	private void updateSteinGröße(double paddedWidth, double paddedHeight) {
		double steinGröße = Math.min(Math.min(SteinDarstellung.SIZE, paddedWidth / 6.0), paddedHeight);
		
		boolean registered = _steinGröße.removeObserver(this);
		try {
			_maxSteinGröße.set(steinGröße);
		} finally {
			if (registered) {
				_steinGröße.addObserver(this);
			}
		}
	}
	
	@Override
	public void valueChanged(Value<Double> sender, Double oldValue, Double newValue) {
		updateDimensions();
	}
	
	private int clientHeight() {
		return _svg.clientHeight;
	}

	private int clientWidth() {
		return _svg.clientWidth;
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
	 * Füllt den {@link Vorrat} mit den neuen Steinen auf. 
	 */
	public void fülleAuf(List<Stein> steine) {
		updateDimensions();
		
		// Bringe Steine-Liste in die Reihenfolge, in der die Steine gerade auf dem Bildschirm angezeigt werden.
		_steine.sort((s1, s2) -> Double.compare(s1.getX(), s2.getX()));
		
		// Rücke Steine so weit auf, dass Lücken verschwinden.
		double x = 0.0;
		for (int n = 0, cnt = anzahlSteine(); n < cnt; n++) {
			_steine.get(n).positioniere(x, 0);
			
			x += SteinDarstellung.SIZE;
		}
		
		for (Stein stein : steine) {
			SteinDarstellung darstellung = new SteinDarstellung(_svg, _hintergrund, stein);
			_steine.add(darstellung);
			
			darstellung.positioniere(x, 0);
			darstellung.zeigeAn();
			
			x += SteinDarstellung.SIZE;
		}
	}

	/** 
	 * Startet einen Spielzug, indem die {@link Stein}e im {@link Vorrat} verschiebbar gemacht werden.
	 */
	public void starteZug() {
		_zug = new Zug(_spielfeldDarstellung);
		
		for (SteinDarstellung stein : _steine) {
			stein.macheVerschiebbar(_zug);
		}
	}
	
	/**
	 * Beendet den aktiven {@link Zug} und liefert eine Zugbeschreibung zurück.
	 */
	public List<Placement> beendeZug() {
		_zug.beende();
		
		for (SteinDarstellung stein : _zug.benutzteSteine()) {
			entferneStein(stein);
		}
		
		for (SteinDarstellung stein : _steine) {
			stein.fixiere();
		}
		
		return _zug.getPlacements();
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
		
		/** 
		 * Schließt den Zug ab, indem die gesetzten Steine fixiert werden.
		 */
		public void beende() {
			for (AnlegeOperation operation : _teilZüge.values()) {
				operation.beende();
			}
		}
		
		/**
		 * Die {@link SteinDarstellung}en aus dem {@link Vorrat}, die von diesem {@link Zug} verwendet wurden.
		 */
		public List<SteinDarstellung> benutzteSteine() {
			return _teilZüge.values().stream().map(op -> op.vorratsStein()).collect(Collectors.toList());
		}

		/** 
		 * Liefert eine Zugbeschreibung, welche an andere Spieler übermittelt werden kann.
		 */
		public List<Placement> getPlacements() {
			List<Placement> result = new ArrayList<>();
			for (AnlegeOperation operation : _teilZüge.values()) {
				result.add(Placement.create()
					.setX(operation.x())
					.setY(operation.y())
					.setStein(operation.gesetzterStein().getStein()));
			}
			return result;
		}

		@Override
		public void beiKnopfLosLassen(double left, double top, SteinDarstellung vorratsStein) {
			Position position = _anzeige.berechneSpielfeldPosition((int)left, (int)top);
			int x = position.x();
			int y = position.y();
			
			AnlegeOperation teilZug = _teilZüge.remove(vorratsStein);
			if (teilZug != null) {
				vorratsStein = teilZug.macheRückgängig();
			}
			
			Stein stein = vorratsStein.getStein();
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
								SteinDarstellung benutzterVorratsStein = operation.macheRückgängig();
								SteinDarstellung gesetzterStein = operation.gesetzterStein();
								gesetzterStein.fixiere();
								gesetzterStein.verstecke();
								benutzterVorratsStein.zeigeAn();
								benutzterVorratsStein.macheVerschiebbar(this);
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
				
				vorratsStein.fixiere();
				
				_teilZüge.put(gesetzterStein, new AnlegeOperation(vorratsStein, x, y, gesetzterStein));
			} else {
				if (teilZug != null) {
					teilZug.wiederhole();
					_teilZüge.put(teilZug.gesetzterStein(), teilZug);
				} else {
					vorratsStein.zeigeAn();
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
			// aus dem aktuellen Zug stammt. Durch forgesetztes Verschieben
			// der Steine auf dem Spielfeld kann man sonst die ursprüngliche
			// Gültigkeitsregel für einen Zug umgehen. Diese Regel gilt nicht
			// für den ersten Zug, da vor diesem noch eine Steine auf dem
			// Spielfeld liegen, an die angelegt werden könnte.
			if (!zugBereich.nachbarBesetztIn(spielfeld) && !zugBereich.enthält(new Position(0, 0))) {
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
			
			/**
			 * Die {@link SteinDarstellung} aus dem {@link Vorrat}, welche
			 * gezogen und angelegt wurde.
			 * 
			 * <p>
			 * Durch diese Operation ist eine neue {@link SteinDarstellung}
			 * ({@link #gesetzterStein()}) entstanden, welche jetzt auf dem
			 * Spielfeld liegt. Der die ursprüngliche {@link SteinDarstellung}
			 * aus dem Vorrat ist unverändert und lediglich unsichtbar gemacht.
			 * </p>
			 */
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
				return vorratsStein();
			}
			
			/**
			 * Beendet die Operation, indem die {@link SteinDarstellung} des
			 * {@link #gesetzterStein() gesetzten Steins} fixiert wird.
			 */
			public void beende() {
				_gesetzterStein.fixiere();
				vorratsStein().fixiere();
			}

			public void wiederhole() {
				_anzeige.getSpielfeld().set(x(), y(), vorratsStein().getStein());
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

			/**
			 * Die in dieser Operation benutzte {@link SteinDarstellung} aus dem {@link Vorrat}. 
			 */
			public SteinDarstellung vorratsStein() {
				return _vorratsStein;
			}
		}
		
	}

}
