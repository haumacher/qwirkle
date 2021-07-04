/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

/**
 * TODO
 */
public class PlayerStat {
	
	private String _name;
	private int _score;
	private boolean _active;

	/** 
	 * Creates a {@link PlayerStat}.
	 *
	 * @param name
	 */
	public PlayerStat(String name) {
		_name = name;
	}

	public String getName() {
		return _name;
	}
	
	public int getScore() {
		return _score;
	}
	
	public boolean isActive() {
		return _active;
	}

	/** 
	 * TODO
	 */
	public void setActive(boolean value) {
		_active = value;
	}

	/** 
	 * TODO
	 */
	public void addScore(int value) {
		_score += value;
	}

}
