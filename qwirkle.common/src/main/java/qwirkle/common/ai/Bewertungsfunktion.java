/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.common.ai;

import java.util.List;

import qwirkle.common.model.Position;
import qwirkle.common.model.Spielfeld;

/**
 * Funktion, die einen Wert für einen möglichen Zug berechnet. 
 * 
 * @see QwirkleBot#QwirkleBot(Bewertungsfunktion)
 */
public interface Bewertungsfunktion {

	/** 
	 * Bewertet den Zug bestehend aus den gesetzten Positionen.
	 */
	int bewerte(Spielfeld spielfeld, List<Position> zugKoordinaten);

}
