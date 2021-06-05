/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.shared;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import qwirkle.common.messages.Farbe;
import qwirkle.common.messages.Form;
import qwirkle.common.messages.Stein;

/**
 * Ein gemischter Stapel mit allen {@link Stein}en.
 * 
 * @see #nimmStein()
 */
public class Nachzugstapel {
	
	private final List<Stein> _steine = new ArrayList<>();
	
	/** 
	 * Erzeugt einen gefüllten {@link Nachzugstapel} mit allen Spielsteinen in zufälliger Reihenfolge.
	 */
	public Nachzugstapel() {
		for (int n = 0; n < 3; n++) {
			for (int farbNummer = 0, farben = Farbe.values().length; farbNummer < farben; farbNummer++) {
				for (int formNummer = 0, formen = Form.values().length; formNummer < formen; formNummer++) {
					_steine.add(Qwirkle.stein(Farbe.values()[farbNummer], Form.values()[formNummer]));
				}
			}
		}
		
		Collections.shuffle(_steine);
	}
	
	/**
	 * Prüft, ob noch {@link Stein}e auf dem Stapel sind.
	 */
	public boolean hatNochSteine() {
		return !_steine.isEmpty();
	}
	
	/**
	 * Die Anzahl der noch auf dem {@link Nachzugstapel} verfügbaren {@link Stein}e.
	 */
	public int anzahlSteine() {
		return _steine.size();
	}
	
	/**
	 * Nimmt und entfernt einen {@link Stein} vom {@link Nachzugstapel}.
	 */
	public Stein nimmStein() {
		return _steine.remove(_steine.size() - 1);
	}

}
