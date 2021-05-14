package qwirkle.client;

import elemental2.dom.DomGlobal;
import elemental2.dom.EventListener;
import elemental2.dom.MouseEvent;
import elemental2.svg.SVGGElement;
import elemental2.svg.SVGSVGElement;
import qwirkle.shared.Qwirkle.Stein;

/**
 * Darstellung eines {@link Stein}s.
 */
class SteinDarstellung {

	/**
	 * Die Beite eine dargestellten Steins in SVG-Koordinaten.
	 */
	public static final int WIDTH = 100;

	/**
	 * Die Beite eine dargestellten Steins in SVG-Koordinaten.
	 */
	public static final int HEIGHT = 100;

	/**
	 * Das SVG-Element, in dem die Darstellung angezeigt werden soll.
	 */
	private final SVGSVGElement _svg;

	/**
	 * Der dargestellte {@link Stein}.
	 */
	private final Stein _stein;

	/**
	 * Das SVG-G-Element, das die Darstellung des {@link #_stein Steins} enthält.
	 */
	SVGGElement _bild;

	/**
	 * {@link EventListener}, der auf den Beginn einer Mausverschiebung hört.
	 * 
	 * @see #macheVerschiebbar(Aktion)
	 */
	private EventListener _beiKnopfdruck;

	private double _x;

	private double _y;

	/**
	 * Erzeugt die Darstellung eines {@link Stein}s.
	 * 
	 * <p>
	 * Die erzeugtes Darstellung kann mit {@link #zeigeAn()} sichtbar gemacht werden
	 * und mit {@link #verstecke()} wieder unsichtbar gemacht werden. Direkt nach
	 * der Erzeugung ist die Darstellung noch unsichtbar.
	 * </p>
	 * 
	 * @param svg   Das SVG-Bild, in dem die Darstellung erzeugt wird.
	 * @param stein Der darzustellende {@link Stein}.
	 */
	public SteinDarstellung(SVGSVGElement svg, Stein stein) {
		_svg = svg;
		_stein = stein;
		_bild = erzeugeBild();
	}
	
	/**
	 * Der dargestellte Stein.
	 */
	public Stein getStein() {
		return _stein;
	}

	/**
	 * Zeig die Darstellung in ihrem aktuellen SVG an.
	 * 
	 * @see #verstecke()
	 */
	public void zeigeAn() {
		_svg.appendChild(_bild);
	}

	/**
	 * Macht die Darstellung wieder unsichtbar.
	 */
	public void verstecke() {
		_svg.removeChild(_bild);
	}

	/**
	 * Bewirkt, dass die Darstellung duch "Anfassen" mit der Maus verschoben werden
	 * kann.
	 * 
	 * @param aktion Die Aktion, welche nach Loslassen der Maus ausgelöst werden soll.
	 */
	public void macheVerschiebbar(Aktion aktion) {
		_bild.addEventListener("mousedown", _beiKnopfdruck = (evt) -> {
			new Verschiebung(this, aktion).start((MouseEvent) evt);
		});
	}

	/**
	 * Fixiert die Darstellung, so dass sie nicht mehr mit der Maus verschoben
	 * werden kann.
	 */
	public void fixiere() {
		if (_beiKnopfdruck != null) {
			_bild.removeEventListener("mousedown", _beiKnopfdruck);
		}
	}

	/**
	 * Positioniert die {@link SteinDarstellung} an einer gegebenen Position
	 * innerhalb ihres SVG-Elements.
	 * 
	 * @param x Die X-Koordinate, an der die Darstellung angezeigt werden soll.
	 * @param y Die Y-Koordinate, an der die Darstellung angezeigt werden soll.
	 */
	public void positioniere(double x, double y) {
		_x = x;
		_y = y;
		SVGUtil.positioniereBild(_svg, _bild, x, y);
	}
	
	/** 
	 * Markiert diese {@link SteinDarstellung} als Vorschau für den aktuell angefangenen Zug.
	 */
	public void setzeVorschau(boolean vorschau) {
		if (vorschau) {
			_bild.classList.add("vorschau");
		} else {
			_bild.classList.remove("vorschau");
		}
	}

	/**
	 * Die aktuelle X-Position.
	 * 
	 * @see #positioniere(double, double)
	 */
	public double getX() {
		return _x;
	}
	
	/**
	 * Die aktuelle Y-Position.
	 * 
	 * @see #positioniere(double, double)
	 */
	public double getY() {
		return _y;
	}

	SVGGElement erzeugeBild() {
		SVGGElement g = (SVGGElement) DomGlobal.document.createElementNS("http://www.w3.org/2000/svg", "g");

		switch (_stein.form) {
		case circle:
			g.innerHTML = "<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n"
					+ "<circle class=\"circle icon\" cx=\"50\" cy=\"50\" r=\"33\" />\n";
			break;
		case cross:
			g.innerHTML = "<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n"
					+ "<path class=\"cross icon\" d=\"M 21.963695,78.155899 C 39.526153,95.724298 49.979405,58.1379 49.979405,58.1379 c 0,0 9.948885,38.090944 28.01571,20.017999 C 96.061942,60.082953 57.983894,50.1307 57.983894,50.1307 c 0,0 38.500723,-9.315711 20.011221,-28.02519 -18.489501,-18.7094883 -28.01571,20.017999 -28.01571,20.017999 0,0 -9.631968,-38.4079622 -28.01571,-20.017999 -18.3837416,18.389962 20.011222,28.02519 20.011222,28.02519 0,0 -37.57368,10.456799 -20.011222,28.025199 z\"/>\n";
			break;
		case diamond:
			g.innerHTML = "<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n"
					+ "<path class=\"diamond icon\" d=\"m 49.989114,11.998163 c -0.996267,0 -37.19392,37.579363 -37.19392,37.579363 l 37.19392,37.579362 37.193919,-37.579362 z\" />\n";
			break;
		case pounce:
			g.innerHTML = "<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n"
					+ "<path class=\"spike icon\" d=\"M 113.43171,-13.559393 100.75936,5.8642659 113.55939,25.928944 94.135735,13.256602 74.071056,26.056632 86.743399,6.6329732 73.943368,-13.431705 93.367027,-0.75936255 Z\" transform=\"matrix(1.8230645,0,0,1.8176604,-120.91481,38.639104)\" />\n";
			break;
		case square:
			g.innerHTML = "<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n"
					+ "<rect class=\"square icon\" width=\"56\" height=\"56\" x=\"22\" y=\"22\" />\n";
			break;
		case star:
			g.innerHTML = "<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n"
					+ "<path class=\"star icon\" d=\"m 47.489846,237.05051 -7.335371,10.98093 11.545767,6.40966 -13.158765,1.11147 2.187395,13.0232 -9.073341,-9.59494 -8.81813,9.83001 1.844494,-13.07618 -13.183424,-0.76538 11.373387,-6.71078 -7.621329,-10.78442 12.337887,4.70797 3.679781,-12.68257 4.011708,12.58152 z\" transform=\"matrix(1.6758019,0,0,1.5098984,-2.8532488,-327.23319)\" />\n";
			break;
		}

		g.className.baseVal = _stein.farbe.name();
		return g;
	}

}