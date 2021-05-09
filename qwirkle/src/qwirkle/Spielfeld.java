package qwirkle;

import qwirkle.Qwirkle.Stein;

/**
 * Das Qwirkle-Spielfeld speichert, an welcher Position sich {@link Stein}e
 * befinden.
 * 
 * @see #get(int, int)
 */
public class Spielfeld {

	private int _xMin = 0;
	private int _yMin = 0;
	private int _width = 1;
	private int _height = 1;

	private Stein[] _data = new Stein[1];

	/**
	 * Liefert den Stein an der gegebenen Position.
	 * 
	 * <p>
	 * Der erste Stein wird normalerweise an Position (0,0) gelegt. Weitere Steine
	 * müssen an diesen links, rechts, oben oder unten angelegt werden. Die Position
	 * (-2,1) ist zwei Felder links und ein Feld oberhalb des ersten Steins.
	 * </p>
	 * 
	 * @param x Die x-Koordinate auf dem {@link Spielfeld}.
	 * @param y Die y-Koordinate auf dem {@link Spielfeld}.
	 * @return Der Stein an der Position (x, y), oder <code>null</code>, wenn sich
	 *         dort kein Stein befindet.
	 */
	public Stein get(int x, int y) {
		int xOffset = x - _xMin;
		int yOffset = y - _yMin;
		if (xOffset < 0 || yOffset < 0) {
			return null;
		}
		if (xOffset >= _width || yOffset >= _height) {
			return null;
		}

		return _data[yOffset * _width + xOffset];
	}

	/**
	 * Setzt einen neuen Stein auf das Spielfeld.
	 * 
	 * @param x     Die x-Koordinate auf dem {@link Spielfeld}.
	 * @param y     Die y-Koordinate auf dem {@link Spielfeld}.
	 * @param stein Der Stein, der an die Position (x,y) gesetzt werden soll.
	 */
	public void set(int x, int y, Stein stein) {
		int xOffset = x - _xMin;
		int yOffset = y - _yMin;

		boolean resize = false;
		int xMinNew;
		if (xOffset < 0) {
			xMinNew = x;
			xOffset = 0;
			resize = true;
		} else {
			xMinNew = _xMin;
		}
		int yMinNew;
		if (yOffset < 0) {
			yMinNew = y;
			yOffset = 0;
			resize = true;
		} else {
			yMinNew = _yMin;
		}
		int widthNew;
		if (xOffset >= _width) {
			widthNew = x - xMinNew + 1;
			resize = true;
		} else {
			widthNew = _xMin + _width - xMinNew;
		}
		int heightNew;
		if (yOffset >= _height) {
			heightNew = y - yMinNew + 1;
			resize = true;
		} else {
			heightNew = _yMin + _height - yMinNew;
		}

		if (resize) {
			Stein[] dataNew = new Stein[widthNew * heightNew];
			for (int yCopy = 0; yCopy < _height; yCopy++) {
				System.arraycopy(_data, yCopy * _width, dataNew, _xMin - xMinNew + (_yMin - yMinNew + yCopy) * widthNew,
						_width);
			}
			_data = dataNew;
			_xMin = xMinNew;
			_yMin = yMinNew;
			_width = widthNew;
			_height = heightNew;
		}

		_data[yOffset * _width + xOffset] = stein;
	}
}
