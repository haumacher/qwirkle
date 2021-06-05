package qwirkle.app.client;

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

	private SVGSVGElement _svg;

	private Spielfeld _spielfeld;

	private int _xOffset;

	private int _yOffset;

	private SVGMatrix _tx;

	/**
	 * Erzeugt eine {@link SpielfeldDarstellung}.
	 *
	 * @param svg Das SVG-Element, in dem das {@link Spielfeld} angezeigt werden soll.
	 * @param spielfeld Das anzuzeigende Spielfeld.
	 */
	public SpielfeldDarstellung(SVGSVGElement svg, Spielfeld spielfeld) {
		_svg = svg;
		_spielfeld = spielfeld;

		_xOffset = _svg.clientWidth / 2 - SteinDarstellung.WIDTH / 2;
		_yOffset = _svg.clientHeight / 2 - SteinDarstellung.HEIGHT / 2;
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
		SteinDarstellung darstellung = new SteinDarstellung(_svg, stein);
		darstellung.positioniere(_xOffset + x * SteinDarstellung.WIDTH,
				_yOffset + y * SteinDarstellung.HEIGHT);
		darstellung.zeigeAn();
		return darstellung;
	}

	/**
	 * Berechnet die {@link Spielfeld} Position zu der gegebenen Maus-Koordinate.
	 */
	public Position berechneSpielfeldPosition(int clientX, int clientY) {
		SVGPoint p = point(clientX, clientY).matrixTransform(tx());

		int x = roundToRaster(((int) p.x), SteinDarstellung.WIDTH);
		int y = roundToRaster(((int) p.y), SteinDarstellung.HEIGHT);

		return new Position(x, y);
	}

	/**
	 * Findet die Raster-Koordinate x, an der eine Strecke der Länge
	 * <code>rasterWidth</code> auf ein Raster derselben Breite gelegt werden
	 * muss, um sie von ihrem ursprünglichen Anfangspunkt <code>value</code>
	 * möglichst wenig verschieben zu müssen.
	 */
	private static int roundToRaster(int value, int rasterWidth) {
		if (value >= 0) {
			return (value + (rasterWidth / 2)) / rasterWidth;
		} else {
			return (value - (rasterWidth / 2)) / rasterWidth;
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
		return zeigeStein(x, y, stein);
	}

	private SVGMatrix tx() {
		if (_tx == null) {
			_tx = _svg.getScreenCTM().inverse().translate(-_xOffset, -_yOffset);
		}
		return _tx;
	}

}
