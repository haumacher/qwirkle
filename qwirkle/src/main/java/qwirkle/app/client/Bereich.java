/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import qwirkle.app.shared.Spielfeld;

/**
 * Ein Menge von {@link Position}en auf einem {@link Spielfeld}.
 * 
 * <p>
 * Ein {@link Bereich} ist eine Datenstruktur für die die Prüfung der Legalität
 * eines Zuges. Ein legaler Zug darf nur {@link Position}en in
 * {@link #istReihe() einer Reihe} umfassen. Gleichzeitig muss ein legaler Zug
 * {@link #nachbarBesetztIn(Spielfeld) Nachbarn} auf dem Spielfeld haben, die
 * mit Steinen besetzt sind.
 * </p>
 */
public class Bereich implements Iterable<Position> {

	private int _x1;

	private int _y1;

	private int _x2;

	private int _y2;

	private Set<Position> _positionen = new HashSet<>();

	/**
	 * Erzeugt einen {@link Bereich}, der nur aus der angegebenen Position besteht.
	 */
	public Bereich(int x, int y) {
		_x1 = x;
		_y1 = y;

		_x2 = x;
		_y2 = y;

		_positionen.add(new Position(x, y));
	}

	/**
	 * Fügt die {@link Position} der gegebenen X/Y-Koordinate hinzu.
	 */
	public void add(int x, int y) {
		add(new Position(x, y));
	}

	/**
	 * Fügt die {@link Position} der gegebenen X/Y-Koordinate hinzu.
	 */
	public void add(Position position) {
		int x = position.x();
		int y = position.y();
		
		_x1 = Math.min(_x1, x);
		_y1 = Math.min(_y1, y);

		_x2 = Math.max(_x2, x);
		_y2 = Math.max(_y2, y);

		_positionen.add(position);
	}
	
	/**
	 * Alle {@link Position}en, welche diesen {@link Bereich} aufspannen.
	 */
	public Set<Position> gibPositionen() {
		return _positionen;
	}

	/**
	 * Prüft, ob alle {@link Position}en dieses {@link Bereich}s sich in einer
	 * Reihe (horizontal oder vertikal) befinden.
	 */
	public boolean istReihe() {
		return istSpalte() || istZeile();
	}

	/**
	 * Prüft, ob alle {@link Position}en dieses {@link Bereich}s sich in einer
	 * Zeile befinden.
	 */
	public boolean istZeile() {
		return _y1 == _y2;
	}

	/** 
	 * Prüft, ob alle {@link Position}en dieses {@link Bereich}s sich in einer
	 * Spalte befinden.
	 */
	public boolean istSpalte() {
		return _x1 == _x2;
	}

	/**
	 * Die kleinste X-Koordinate von allen {@link Position}en dieses {@link Bereich}s.
	 */
	public int x1() {
		return _x1;
	}

	/**
	 * Die kleinste Y-Koordinate von allen {@link Position}en dieses {@link Bereich}s.
	 */
	public int y1() {
		return _y1;
	}

	/**
	 * Die größte X-Koordinate von allen {@link Position}en dieses {@link Bereich}s.
	 */
	public int x2() {
		return _x2;
	}

	/**
	 * Die größte Y-Koordinate von allen {@link Position}en dieses {@link Bereich}s.
	 */
	public int y2() {
		return _y2;
	}

	@Override
	public Iterator<Position> iterator() {
		return _positionen.iterator();
	}

	/**
	 * Prüft, ob die gegebene Position Teil der {@link Position}en ist, die
	 * dieses {@link Bereich} aufspannen.
	 */
	public boolean enthält(Position position) {
		return _positionen.contains(position);
	}

	/**
	 * Prüft, ob ein Nachbar einer {@link Position} in diesem {@link Bereich}
	 * auf dem {@link Spielfeld} besetzt ist.
	 */
	public boolean nachbarBesetztIn(Spielfeld spielfeld) {
		for (Position inBereich : this) {
			for (Position nachbar : inBereich.nachbarn()) {
				if (enthält(nachbar)) {
					continue;
				}

				if (spielfeld.istBesetzt(nachbar.x(), nachbar.y())) {
					return true;
				}
			}
		}

		return false;
	}

}
