package qwirkle.app.client;

import elemental2.dom.HTMLElement;
import elemental2.svg.SVGGElement;
import elemental2.svg.SVGMatrix;
import elemental2.svg.SVGPoint;
import elemental2.svg.SVGSVGElement;
import qwirkle.common.messages.Stein;
import qwirkle.common.model.Position;
import qwirkle.common.model.Spielfeld;

/**
 * Die Darstellung eines {@link Spielfeld}s in einem SVG Bild.
 */
public class SpielfeldDarstellung {

	private static final int PADDING = 10;

	private SVGSVGElement _svg;

	private Spielfeld _spielfeld;

	private SVGMatrix _tx;

	private SVGGElement _hintergrund;

	/**
	 * Erzeugt eine {@link SpielfeldDarstellung}.
	 *
	 * @param container Das umschließende HTML-Element, in dem das {@link Spielfeld} angezeigt werden soll.
	 * @param spielfeld Das anzuzeigende Spielfeld.
	 */
	public SpielfeldDarstellung(HTMLElement container, Spielfeld spielfeld) {
		_svg = SVGUtil.createSVG();
		_spielfeld = spielfeld;
		
		_hintergrund = SVGUtil.createG();
		_svg.appendChild(_hintergrund);
		
		container.appendChild(_svg);
	}

	private void updateDimensions() {
		double clientWidth = clientWidth();
		double clientHeight = clientHeight();
		
		double paddedWidth = clientWidth - 2 * PADDING;
		double paddedHeight = clientHeight - 2 * PADDING;
		
		 // Größe der Darstellung eines Steins in Pixeln, so dass alle Steine des
		 // Spielfeldes inklusive von mindestens einem freien Feld am Rand des
		 // Spielfeldes dargestellt werden können.
		 // 
		 // Die maximale Steingröße beträgt {@link SteinDarstellung#SIZE}.
		double steinGröße;
		{
			double steinBreite = Math.min(SteinDarstellung.SIZE, paddedWidth / (_spielfeld.getWidth() + 2));
			double steinHöhe = Math.min(SteinDarstellung.SIZE, paddedHeight / (_spielfeld.getHeight() + 2));
			steinGröße = Math.min(steinBreite, steinHöhe);
		}
		
		// An welcher Stelle muss der Ursprung des Spielfeldes (Stein 0,0)
		// dargestellt werden, damit alle Steine des Spielfeldes angezeigt
		// werden können? Wenn möglich soll der erste Stein (Stein 0,0) in der
		// Mitte des Bildschrimes angezeigt werden. Erst wenn das nicht mehr
		// möglich ist, weil zu weit in eine Richtung gebaut wurde, sollen alle
		// Steine entsprechend verschoben werden.
		
		// Position des Koordinatenursprungs, wenn der erste Stein (Stein 0,0)
		// in der Bildschirmmitte dargestellt wird.
		double xUrsprung = clientWidth / 2 - steinGröße / 2;
		double yUrsprung = clientHeight / 2 - steinGröße / 2;
		
		double verfügbarLinksVomUrsprung = xUrsprung;
		double verfügbarRechtsVomUrsprung = paddedWidth - xUrsprung;
		double verfügbarOberhalbVomUrsprung = yUrsprung;
		double verfügbarUnterhalbVomUrsprung = paddedHeight - yUrsprung;
		
		// Benötigter Platz, wenn der Ursprung des Spielfeldes in der Mitte des
		// Bildschrims angezeigt wird und rings um das Spielfeld Platz für
		// mindestens einen weiteren Stein sein soll.
		double benötigtLinksVomUrsprung = (-_spielfeld.getXMin() + 1) * steinGröße;
		double benötigtRechtsVomUrsprung = (_spielfeld.getXMin() + _spielfeld.getWidth() + 1) * steinGröße;
		double benötigtOberhalbVomUrsprung = (-_spielfeld.getYMin() + 1) * steinGröße;
		double benötigtUnterhalbVomUrsprung = (_spielfeld.getYMin() + _spielfeld.getHeight() + 1) * steinGröße;
		
		// Wir sind schon sicher, dass das Spielfeld in dem verfügbaren platz
		// dargestellt werden kann. Es muss nur noch möglicherweise um eine
		// gewisse Anzahl von Steinen verschoben werden.
		if (benötigtLinksVomUrsprung > verfügbarLinksVomUrsprung) {
			xUrsprung += benötigtLinksVomUrsprung - verfügbarLinksVomUrsprung;
		} else if (benötigtRechtsVomUrsprung > verfügbarRechtsVomUrsprung) {
			xUrsprung -= benötigtRechtsVomUrsprung - verfügbarRechtsVomUrsprung;
		}
		if (benötigtOberhalbVomUrsprung > verfügbarOberhalbVomUrsprung) {
			yUrsprung += benötigtOberhalbVomUrsprung - verfügbarOberhalbVomUrsprung;
		} else if (benötigtUnterhalbVomUrsprung > verfügbarUnterhalbVomUrsprung) {
			yUrsprung -= benötigtUnterhalbVomUrsprung - verfügbarUnterhalbVomUrsprung;
		}
		
		double scaleFactor = steinGröße / SteinDarstellung.SIZE;
		SVGMatrix tx = _svg.createSVGMatrix().translate(xUrsprung, yUrsprung).scale(scaleFactor);
		_hintergrund.transform.baseVal.initialize(_svg.createSVGTransformFromMatrix(tx));
		
		_tx = _svg.getScreenCTM().inverse().scale(SteinDarstellung.SIZE / steinGröße).translate(-xUrsprung, -yUrsprung);
	}

	private int clientHeight() {
		return _svg.clientHeight;
	}

	private int clientWidth() {
		return _svg.clientWidth;
	}

	/**
	 * Das dargestellte {@link Spielfeld}.
	 */
	public Spielfeld getSpielfeld() {
		return _spielfeld;
	}

	/**
	 * Stellt die {@link Stein}e auf dem {@link Spielfeld} dar.
	 */
	public void zeigeAn() {
		updateDimensions();
		
		int xMin = _spielfeld.getXMin();
		int yMin = _spielfeld.getYMin();
		int width = _spielfeld.getWidth();
		int height = _spielfeld.getHeight();
		for (int x = 0; x < width; x++) {
			for (int y = 0; y < height; y++) {
				Stein stein = _spielfeld.get(xMin + x, yMin + y);
				if (stein == null) {
					continue;
				}
				zeigeStein(x, y, stein);
			}
		}
	}

	private SteinDarstellung zeigeStein(int x, int y, Stein stein) {
		SteinDarstellung darstellung = new SteinDarstellung(_svg, _hintergrund, stein);
		darstellung.positioniere(x * SteinDarstellung.SIZE, y * SteinDarstellung.SIZE);
		darstellung.zeigeAn();
		return darstellung;
	}

	/**
	 * Berechnet die {@link Spielfeld} Position zu der gegebenen Maus-Koordinate.
	 */
	public Position berechneSpielfeldPosition(int clientX, int clientY) {
		SVGPoint p = point(clientX, clientY).matrixTransform(tx());

		int x = roundToRaster(p.x, SteinDarstellung.SIZE);
		int y = roundToRaster(p.y, SteinDarstellung.SIZE);

		return new Position(x, y);
	}

	/**
	 * Findet die Raster-Koordinate x, an der eine Strecke der Länge
	 * <code>rasterWidth</code> auf ein Raster derselben Breite gelegt werden
	 * muss, um sie von ihrem ursprünglichen Anfangspunkt <code>value</code>
	 * möglichst wenig verschieben zu müssen.
	 */
	private static int roundToRaster(double value, double rasterWidth) {
		if (value >= 0) {
			return (int) ((value + (rasterWidth / 2)) / rasterWidth);
		} else {
			return (int) ((value - (rasterWidth / 2)) / rasterWidth);
		}
	}

	private SVGPoint point(int x, int y) {
		SVGPoint point = _svg.createSVGPoint();
		point.x = x;
		point.y = y;
		return point;
	}

	/**
	 * Setzte den Stein auf das {@link Spielfeld} an der gegebenen Position und
	 * stellt ihn dar.
	 * 
	 * @return Die Darstellung des neu eingefügten {@link Stein}s.
	 */
	public SteinDarstellung fügeEin(int x, int y, Stein stein) {
		_spielfeld.set(x, y, stein);
		SteinDarstellung neueDarstellung = zeigeStein(x, y, stein);
		
		updateDimensions();
		return neueDarstellung;
	}

	private SVGMatrix tx() {
		return _tx;
	}

}
