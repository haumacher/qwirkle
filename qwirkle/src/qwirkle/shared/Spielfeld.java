package qwirkle.shared;

import java.util.EnumSet;

import qwirkle.shared.Qwirkle.Farbe;
import qwirkle.shared.Qwirkle.Form;
import qwirkle.shared.Qwirkle.Stein;

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
	
	/**
	 * Prüft, ob der gegebene Stein an Position (x,y) angelegt werden kann.
	 */
	public boolean zugErlaubt(int x, int y, Stein stein) {
		if (istBesetzt(x, y)) {
			return false;
		}
		
		if (!hatNachbarn(x, y)) {
			// Ohne Nachbarn darf nur auf die Startposition gelegt werden.
			return x == 0 && y == 0;
		}
		
		if (!passtInReihe(x, y, stein)) {
			return false;
		}
		
		if (!passtInSpalte(x, y, stein)) {
			return false;
		}
		
		return true;
	}

	private boolean passtInReihe(int x, int y, Stein stein) {
		return 
			passtAnNachbarn(x, y, stein, 1, 0) && 
			passtAnNachbarn(x, y, stein, -1, 0) &&
			keineDoppeltenSteine(x, y, 1, 0);
	}
	
	private boolean passtInSpalte(int x, int y, Stein stein) {
		return 
			passtAnNachbarn(x, y, stein, 0, 1) && 
			passtAnNachbarn(x, y, stein, 0, -1) && 
			keineDoppeltenSteine(x, y, 0, 1);
	}

	private boolean passtAnNachbarn(int x, int y, Stein stein, int dx, int dy) {
		int xPos = x;
		int yPos = y;
		while (true) {
			xPos += dx;
			yPos += dy;
			Stein feld = get(xPos, yPos);
			if (feld == null) {
				// Kein weiterer Nachbar mehr, anlegen ist OK.
				return true;
			}
			boolean gleicheFarbe = feld.farbe == stein.farbe;
			boolean gleicheForm = feld.form == stein.form;
			if (gleicheFarbe == gleicheForm) {
				// Ein Stein muss entweder in Farbe oder Form übereinstimmen, aber nicht in beidem.
				return false;
			}
		}
	}
	
	private boolean keineDoppeltenSteine(int x, int y, int dx, int dy) {
		EnumSet<Farbe> farben = EnumSet.noneOf(Farbe.class);
		EnumSet<Form> formen= EnumSet.noneOf(Form.class);
		
		int anzahl = 
			prüfeSteine(farben, formen, x, y, dx, dy) + 
			prüfeSteine(farben, formen, x, y, -dx, -dy);
		
		if (anzahl == 0) {
			return true;
		}
		
		if (farben.size() == anzahl && formen.size() == 1) {
			return true;
		}

		if (farben.size() == 1 && formen.size() == anzahl) {
			return true;
		}
		
		return false;
	}

	private int prüfeSteine(EnumSet<Farbe> farben, EnumSet<Form> formen, int x, int y, int dx, int dy) {
		int steine = 0;
		int xPos = x;
		int yPos = y;
		while (true) {
			xPos += dx;
			yPos += dy;
			Stein feld = get(xPos, yPos);
			if (feld == null) {
				return steine;
			}
			
			steine++;
			farben.add(feld.farbe);
			formen.add(feld.form);
		}
	}

	private boolean istBesetzt(int x, int y) {
		return get(x, y) != null;
	}

	private boolean hatNachbarn(int x, int y) {
		return istBesetzt(x - 1, y) || istBesetzt(x + 1, y) || istBesetzt(x, y - 1) || istBesetzt(x, y + 1);
	}
}
