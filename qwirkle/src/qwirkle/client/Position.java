/*
 * Copyright (c) 2021 Business Operation Systems GmbH. All Rights Reserved.
 */
package qwirkle.client;

/**
 * X/Y Position.
 *
 * @author <a href="mailto:bhu@top-logic.com">Bernhard Haumacher</a>
 */
public class Position {

	private int _x;
	private int _y;

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
	public int getX() {
		return _x;
	}
	
	/**
	 * Die Y-Koordinate.
	 */
	public int getY() {
		return _y;
	}
	
	@Override
	public String toString() {
		return "(" + _x + ", " + _y + ")";
	}

}
