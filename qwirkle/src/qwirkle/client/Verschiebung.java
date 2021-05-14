package qwirkle.client;

import elemental2.dom.DOMRect;
import elemental2.dom.DomGlobal;
import elemental2.dom.Event;
import elemental2.dom.EventListener;
import elemental2.dom.HTMLElement;
import elemental2.dom.MouseEvent;
import elemental2.svg.SVGGElement;
import elemental2.svg.SVGSVGElement;

class Verschiebung {

	/**
	 * Die Darstellung des gerade mit der Maus verschobenen Steins.
	 */
	private SteinDarstellung _darstellung;

	/**
	 * Ein Stückchen HTML, das eine Kopie des Bildes enthält, das gerade verschoben
	 * wird. Diese Abbildung "hängt an der Maus", solange der Mausknopf gedrückt
	 * bleibt.
	 */
	private HTMLElement _beweglichesBild;

	/**
	 * Wert, der zum X-Wert der aktuellen Mausposition dazugezählt werden muss, um
	 * die Position des {@link #_beweglichesBild beweglichen Bildes} zu errechnen.
	 */
	private double _offsetX;

	/**
	 * Wie {@link #_offsetX} nur für die Y-Position.
	 */
	private double _offsetY;

	/**
	 * {@link EventListener}, der während der Verschiebung Mausevents vom HTML-Dokument bezieht. 
	 */
	private EventListener _beiMausverschiebung;

	/**
	 * Wie {@link #_beiMausverschiebung}.
	 */
	private EventListener _beiKnopfLoslassen;

	private Aktion _aktion;

	public Verschiebung(SteinDarstellung darstellung, Aktion aktion) {
		_darstellung = darstellung;
		_aktion = aktion;
	}

	public void start(MouseEvent evt) {
		DomGlobal.document.addEventListener("mousemove", _beiMausverschiebung = this::beiMausverschiebung);
		DomGlobal.document.addEventListener("mouseup", _beiKnopfLoslassen = this::beiKnopfLoslassen);

		_offsetX = evt.clientX;
		_offsetY = evt.clientY;
	}

	private void beiMausverschiebung(Event evt) {
		MouseEvent mouseEvt = (MouseEvent) evt;

		if (_beweglichesBild == null) {
			erzeugeBeweglichesBild(mouseEvt);
			_darstellung.verstecke();
		} else {
			setzePosition(mouseEvt);
		}
	}

	private void erzeugeBeweglichesBild(MouseEvent mouseEvt) {
		DOMRect boundingBox = _darstellung._bild.getBoundingClientRect();

		SVGSVGElement svg = (SVGSVGElement) DomGlobal.document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttributeNS(null, "viewbox", "0 0 " + boundingBox.width + " " + boundingBox.height);
		svg.setAttributeNS(null, "width", boundingBox.width + "px");
		svg.setAttributeNS(null, "height", boundingBox.height + "px");

		SVGGElement bild = _darstellung.erzeugeBild();
		SVGUtil.positioniereBild(svg, bild, 0, 0);
		svg.appendChild(bild);

		double x = boundingBox.x;
		double y = boundingBox.y;
		_offsetX = x - mouseEvt.clientX;
		_offsetY = y - mouseEvt.clientY;

		_beweglichesBild = (HTMLElement) DomGlobal.document.createElement("div");
		_beweglichesBild.appendChild(svg);
		_beweglichesBild.style.position = "absolute";

		setzePosition(mouseEvt);
		DomGlobal.document.body.appendChild(_beweglichesBild);
	}

	private void setzePosition(MouseEvent mouseEvt) {
		setzePosition(_beweglichesBild, left(mouseEvt), top(mouseEvt));
	}

	private double top(MouseEvent mouseEvt) {
		return mouseEvt.clientY + _offsetY;
	}

	private double left(MouseEvent mouseEvt) {
		return mouseEvt.clientX + _offsetX;
	}

	private void setzePosition(HTMLElement container, double x, double y) {
		container.style.left = x + "px";
		container.style.top = y + "px";
	}

	private void beiKnopfLoslassen(Event evt) {
		MouseEvent mouseEvt = (MouseEvent) evt;
		_aktion.beiKnopfLosLassen(left(mouseEvt), top(mouseEvt), _darstellung);
		abbrechen();
	}

	private void abbrechen() {
		if (_beiMausverschiebung != null) {
			DomGlobal.document.removeEventListener("mousemove", _beiMausverschiebung);
		}
		if (_beiKnopfLoslassen != null) {
			DomGlobal.document.removeEventListener("mouseup", _beiKnopfLoslassen);
		}
		if (_beweglichesBild != null) {
			_beweglichesBild.parentNode.removeChild(_beweglichesBild);
			_beweglichesBild = null;
		}
	}

}