package qwirkle.app.client;

import elemental2.dom.DomGlobal;
import elemental2.svg.SVGGElement;
import elemental2.svg.SVGLength;
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

	public static SVGGElement createG() {
		return (SVGGElement) DomGlobal.document.createElementNS("http://www.w3.org/2000/svg", "g");
	}

	public static SVGSVGElement createSVG() {
		SVGSVGElement result = (SVGSVGElement) DomGlobal.document.createElementNS("http://www.w3.org/2000/svg", "svg");
		result.width.baseVal.newValueSpecifiedUnits((int) SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100);
		result.height.baseVal.newValueSpecifiedUnits((int) SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 100);
		return result;
	}

}
