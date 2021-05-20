package qwirkle.app.client;

import elemental2.svg.SVGSVGElement;
import elemental2.svg.SVGTransform;
import elemental2.svg.SVGTransformable;

/**
 * Hilsfunktionen für SVG-Manipulation.
 */
public class SVGUtil {

	/**
	 * Positioniert ein SVG-Element an einer (x,y)-Position.
	 * 
	 * @param svg  Das umschließende SVG-Element.
	 * @param bild Die zu positionierende Darstellung.
	 * @param x    Der X-Wert der Position.
	 * @param y    Der y-Wert der Position.
	 */
	public static void positioniereBild(SVGSVGElement svg, SVGTransformable bild, double x, double y) {
		SVGTransform tx = svg.createSVGTransform();
		tx.setTranslate(x, y);
		bild.getTransform().baseVal.initialize(tx);
	}

}
