/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.common.ai;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;

import qwirkle.common.ai.SteinAuswahl.Durchgang;
import qwirkle.common.messages.Farbe;
import qwirkle.common.messages.Form;
import qwirkle.common.messages.Placement;
import qwirkle.common.messages.Stein;
import qwirkle.common.model.Position;
import qwirkle.common.model.Spielfeld;

/**
 * Ein Qwirkle Computer-Spieler.
 */
public class QwirkleBot {
	
	private List<Stein> _vorrat = new ArrayList<>();
	
	private Spielfeld _spielfeld = new Spielfeld();
	

	/** 
	 * Creates a {@link QwirkleBot}.
	 */
	public QwirkleBot() {
		super();
	}
		
	/**
	 * Gibt dem Spieler einen {@link Stein} für seinen Vorrat.
	 */
	public void add(Stein stein) {
		_vorrat.add(stein);
	}

	/**
	 * Setzt auf das {@link Spielfeld} des Spielers einen Stein an eine gewisse Position. 
	 * 
	 * <p>
	 * Hierüber wird die Ausgangssituation für {@link #berechneZug()} hergestellt.
	 * </p>
	 */
	public void set(int x, int y, Stein stein) {
		_spielfeld.set(x, y, stein);
	}
	
	/**
	 * Berechnet einen Zug, der auf auf gegebenen {@link Spielfeld} und
	 * Stein-Vorrat ausgeführt werden kann.
	 * 
	 * <p>
	 * Die aktuelle Logik versucht lediglich so viele Steine wie möglich
	 * anzulegen, ohne dafür erzielte Punkte zu berücksichtigen.
	 * </p>
	 * 
	 * @see #add(Stein)
	 * @see #set(int, int, Stein)
	 */
	public List<Placement> berechneZug() {
		ZugBewertung zug = new ZugBewertung(_spielfeld);
		produziereZüge(zug);
		
		List<Placement> result = zug.besterZug();
		for (Placement placement : result) {
			_vorrat.remove(placement.getStein());
		}
		return result;
	}

	private void produziereZüge(ZugBewertung zug) {
		SteinAuswahl auswahl = new SteinAuswahl(_vorrat);
		Durchgang durchgang = auswahl.steine();
		
		if (!_spielfeld.istBesetzt(0, 0)) {
			// Der erste Zug ist besonders, weil an Position (0, 0) gesetzt werden darf, obwohl diese an keinen Stein angrenzt.
			Position position = new Position(0, 0);
			while (durchgang.hatStein()) {
				Stein stein = durchgang.nimmStein();
				
				zug.add(placement(stein, position));
				wähleZweitenStein(zug, auswahl, position);
				zug.pop();
				
				durchgang.gibSteinFrei();
			}
		} else {
			while (durchgang.hatStein()) {
				Stein stein = durchgang.nimmStein();
				
				for (Position position : zugmöglichkeiten(stein)) {
					zug.add(placement(stein, position));
					wähleZweitenStein(zug, auswahl, position);
					zug.pop();
				}
				
				durchgang.gibSteinFrei();
			}
		}
	}

	private Iterable<Position> zugmöglichkeiten(Stein stein) {
		ArrayList<Position> result = new ArrayList<>();
		
		for (int x = _spielfeld.getXMin() - 1, xMax = x + _spielfeld.getWidth() + 2; x <= xMax; x++) {
			for (int y = _spielfeld.getYMin() - 1, yMax = y + _spielfeld.getWidth() + 2; y <= yMax; y++) {
				if (_spielfeld.zugErlaubt(x, y, stein)) {
					result.add(new Position(x, y));
				}
			}
		}
		
		return result;
	}
	
	private void wähleZweitenStein(ZugBewertung zug, SteinAuswahl auswahl, Position position) {
		// Der zweite Stein kann jetzt nur noch in dieselbe Reihe oder Spalte
		// wie der erste Stein gelegt werden. Es gibt nur noch höchstens vier
		// Möglichkeiten eine freie Position auf dem Spielfeld zu finden, die
		// mit dem Initialstein durchgängig mit liegenden Steinen verbunden ist.
		List<Position> freieNachbarn = _spielfeld.freieNachbarn(position);

		Durchgang durchgang = auswahl.steine();
		while (durchgang.hatStein()) {
			Stein zweiterStein = durchgang.nimmStein();
			
			if (zug.passt(zweiterStein)) {
				for (Position freierNachbar : freieNachbarn) {
					if (_spielfeld.zugErlaubt(freierNachbar.x(), freierNachbar.y(), zweiterStein)) {
						zug.add(placement(zweiterStein, freierNachbar));
						wähleFolgeSteine(zug, auswahl, position, freierNachbar);
						zug.pop();
					}
				}
			}
			
			durchgang.gibSteinFrei();
		}
	}

	private void wähleFolgeSteine(ZugBewertung zug, SteinAuswahl auswahl, Position erste, Position zweite) {
		List<Position> freieNachbarn = _spielfeld.freieNachbarn(erste, zweite);
		
		Durchgang durchgang = auswahl.steine();
		while (durchgang.hatStein()) {
			Stein stein = durchgang.nimmStein();
			
			if (zug.passt(stein)) {
				for (Position freierNachbar : freieNachbarn) {
					if (_spielfeld.zugErlaubt(freierNachbar.x(), freierNachbar.y(), stein)) {
						zug.add(placement(stein, freierNachbar));
						wähleFolgeSteine(zug, auswahl, erste, zweite);
						zug.pop();
					}
				}
			}
			
			durchgang.gibSteinFrei();
		}
	}


	private Placement placement(Stein initialStein, Position position) {
		return Placement.create().setStein(initialStein).setX(position.x()).setY(position.y());
	}

	/**
	 * Die möglichen {@link Farbe}n und {@link Form}en, welche an einer {@link Position} noch gesetzt werden können.
	 */
	class Zugmöglichkeit {
		
		private final Position _position;
		private final EnumSet<Farbe> _möglicheFarben;
		private final EnumSet<Form> _möglicheFormen;

		/** 
		 * Creates a {@link Zugmöglichkeit}.
		 */
		public Zugmöglichkeit(Position position, EnumSet<Farbe> möglicheFarben, EnumSet<Form> möglicheFormen) {
			_position = position;
			_möglicheFarben = möglicheFarben;
			_möglicheFormen = möglicheFormen;
		}

		/** 
		 * Berechnet, ob der gegebene Stein zu den Zugmöglichkeiten an dieser Position passt.
		 */
		public boolean passt(Stein stein) {
			return _möglicheFarben.contains(stein.getFarbe()) && _möglicheFormen.contains(stein.getForm());
		}

		public Position position() {
			return _position;
		}

		public EnumSet<Farbe> möglicheFarben() {
			return _möglicheFarben;
		}

		public EnumSet<Form> möglicheFormen() {
			return _möglicheFormen;
		}
	}

	/** 
	 * Ob sich noch {@link Stein} im Vorrat dieses Spielers befinden.
	 */
	public boolean hatNochSteine() {
		return !_vorrat.isEmpty();
	}


	/** 
	 * Anzal von Steinen im Vorrate dieses Spielers.
	 */
	public int steineImVorrat() {
		return _vorrat.size();
	}

}
