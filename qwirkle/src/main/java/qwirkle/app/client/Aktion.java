/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client;

/**
 * Aktion, die bei der {@link Verschiebung} einer {@link SteinDarstellung}
 * passieren soll.
 */
public interface Aktion {

	/**
	 * Wird gerufen, wenn die Verschiebung durch Loslassen des Mausknopfes
	 * endet.
	 *
	 * @param clientX
	 *        Die Mausposition in Browser-Koordinaten
	 * @param clinetY
	 *        Die Mausposition in Browser-Koordinaten
	 * @param steinDarstellung
	 *        Die gerade verschobene {@link SteinDarstellung}.
	 */
	void beiKnopfLosLassen(double clientX, double clinetY,
			SteinDarstellung steinDarstellung);

}
