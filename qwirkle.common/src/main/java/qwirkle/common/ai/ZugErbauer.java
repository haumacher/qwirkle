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
import qwirkle.common.model.Spielfeld;

/**
 * TODO
 */
public class ZugErbauer {

	private List<Placement> _besterZug = new ArrayList<>();
	
	private List<Placement> _aktuellerZug = new ArrayList<>();
	
	private EnumSet<Farbe> _farben = EnumSet.noneOf(Farbe.class);
	
	private EnumSet<Form> _formen = EnumSet.noneOf(Form.class);

	private Spielfeld _spielfeld;

	/** 
	 * Creates a {@link ZugErbauer}.
	 *
	 * @param spielfeld
	 */
	public ZugErbauer(Spielfeld spielfeld) {
		_spielfeld = spielfeld;
	}

	/** 
	 * Fügt die gegebene Plazierung zu dem Zug hinzu.
	 */
	public void add(Placement placement) {
		_aktuellerZug.add(placement);
		
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
		if (_aktuellerZug.size() > _besterZug.size()) {
			_besterZug.clear();
			_besterZug.addAll(_aktuellerZug);
		}
		
		Placement placement = _aktuellerZug.remove(_aktuellerZug.size() - 1);
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

	public List<Placement> besterZug() {
		return _besterZug;
	}
	
}
