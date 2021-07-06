/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.common.ai;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;

import qwirkle.common.messages.Farbe;
import qwirkle.common.messages.Form;
import qwirkle.common.messages.Placement;
import qwirkle.common.messages.Stein;
import qwirkle.common.model.Position;
import qwirkle.common.model.Spielfeld;

/**
 * Analyse für alle möglichen Züge bei einem gegebenen {@link Spielfeld} und {@link Bewertungsfunktion}.
 */
public class ZugAuswahl {

	private int _besteBewertung = 0;
	
	private List<Placement> _besterZug = new ArrayList<>();
	
	private List<Placement> _aktuellerZug = new ArrayList<>();
	
	/**
	 * Die Koordinaten von {@link #_aktuellerZug}.
	 */
	private List<Position> _zugKoordinaten = new ArrayList<>();
	
	private EnumSet<Farbe> _farben = EnumSet.noneOf(Farbe.class);
	
	private EnumSet<Form> _formen = EnumSet.noneOf(Form.class);

	private Spielfeld _spielfeld;

	private Bewertungsfunktion _bewertung;

	/** 
	 * Creates a {@link ZugAuswahl}.
	 *
	 * @param spielfeld
	 */
	public ZugAuswahl(Spielfeld spielfeld, Bewertungsfunktion bewertung) {
		_spielfeld = spielfeld;
		_bewertung = bewertung;
	}

	/**
	 * Fügt die gegebene Plazierung zu dem Zug hinzu.
	 * 
	 * <p>
	 * Alle bisherigen Plazierungen müssen zusammen mit der neuen Plazierung
	 * einen legalen Zug ergeben.
	 * </p>
	 */
	public void add(Placement placement) {
		_aktuellerZug.add(placement);
		_zugKoordinaten.add(new Position(placement.getX(), placement.getY()));
		
		Stein stein = placement.getStein();
		_farben.add(stein.getFarbe());
		_formen.add(stein.getForm());
		
		_spielfeld.set(placement.getX(), placement.getY(), stein);
	}

	/**
	 * Berechnet, ob der gegebene Stein noch zu dem aktuellen Zug passt.
	 * 
	 * <p>
	 * Dafür muss der stein mit allen anderen Steinen in entweder {@link Farbe}
	 * oder {@link Form} übereinstimmen, aber nicht in beidem.
	 * </p>
	 */
	public boolean passt(Stein stein) {
		return 
			(_farben.size() <= 1 && _farben.contains(stein.getFarbe()) && !_formen.contains(stein.getForm())) || 
			(_formen.size() <= 1 && _formen.contains(stein.getForm()) && !_farben.contains(stein.getFarbe())); 
	}

	/** 
	 * Entfernt die letzte Plazierung wieder aus dem Zug.
	 */
	public void pop() {
		int bewertung = _bewertung.bewerte(_spielfeld, _zugKoordinaten);
		if (bewertung > _besteBewertung) {
			_besterZug.clear();
			_besterZug.addAll(_aktuellerZug);
			_besteBewertung = bewertung;
		}
		
		int letztePosition = _aktuellerZug.size() - 1;
		_zugKoordinaten.remove(letztePosition);
		Placement placement = _aktuellerZug.remove(letztePosition);
		Stein stein = placement.getStein();
		if (_farben.size() > 1) {
			_farben.remove(stein.getFarbe());
		} else if (_formen.size() > 1) {
			_formen.remove(stein.getForm());
		} else {
			// Der letzte Stein wurde entfernt.
			_farben.clear();
			_formen.clear();
		}
		
		_spielfeld.set(placement.getX(), placement.getY(), null);
	}

	/**
	 * Liefert den besten Zug, aller gesehenen möglichen Züge die über die
	 * Aufrufe {@link #add(Placement)} und {@link #pop()} generiert wurden.
	 */
	public List<Placement> besterZug() {
		return _besterZug;
	}
	
}
