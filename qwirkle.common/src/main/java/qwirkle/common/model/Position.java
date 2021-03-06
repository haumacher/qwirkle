/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.common.model;

import java.util.Arrays;

/**
 * X/Y Position.
 */
public final class Position {

	private final int _x;
	private final int _y;

	/** 
	 * Creates a {@link Position}.
	 */
	public Position(int x, int y) {
		_x = x;
		_y = y;
	}
	
	/**
	 * Die X-Koordinate.
	 */
	public int x() {
		return _x;
	}
	
	/**
	 * Die Y-Koordinate.
	 */
	public int y() {
		return _y;
	}
	
	@Override
	public String toString() {
		return "(" + _x + ", " + _y + ")";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + _x;
		result = prime * result + _y;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Position other = (Position) obj;
		if (_x != other._x)
			return false;
		if (_y != other._y)
			return false;
		return true;
	}

	/** 
	 * Alle Nachbarn (oben, unten, links, und rechts) von dieser {@link Position}.
	 */
	public Iterable<Position> nachbarn() {
		return Arrays.asList(oben(), unten(), links(), rechts());
	}

	/** 
	 * Die {@link Position} rechts von dieser {@link Position}.
	 */
	public Position rechts() {
		return new Position(_x + 1, _y);
	}

	/** 
	 * Die {@link Position} links von dieser {@link Position}.
	 */
	public Position links() {
		return new Position(_x - 1, _y);
	}

	/** 
	 * Die {@link Position} unterhalb von dieser {@link Position}.
	 */
	public Position unten() {
		return new Position(_x, _y + 1);
	}

	/** 
	 * Die {@link Position} oberhalb von dieser {@link Position}.
	 */
	public Position oben() {
		return new Position(_x, _y - 1);
	}

	/**
	 * Die Position, welche den gegebenen Abstand von dieser Position in
	 * Richtung des gegebenen Nachbarn entfernt ist.
	 */
	public Position inRichtung(Position nachbar, int abstand) {
		if (abstand == 1) {
			return nachbar;
		}
		int x = x();
		int y = y();
		return new Position(
			x + abstand * (nachbar.x() - x), 
			y + abstand * (nachbar.y() - y));
	}

}
