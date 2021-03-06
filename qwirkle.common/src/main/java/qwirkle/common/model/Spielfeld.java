package qwirkle.common.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.EnumSet;
import java.util.List;

import qwirkle.common.messages.Farbe;
import qwirkle.common.messages.Form;
import qwirkle.common.messages.Stein;

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
	 * Die kleinste X-Koordinate, an der ein {@link Stein} auf dem Spielfeld liegt. 0 für ein leeres Spielfeld.
	 * 
	 * @see #get(int, int)
	 */
	public int getXMin() {
		return _xMin;
	}
	
	/**
	 * Die kleinste Y-Koordinate, an der ein {@link Stein} auf dem Spielfeld liegt. 0 für ein leeres Spielfeld.
	 * 
	 * @see #get(int, int)
	 */
	public int getYMin() {
		return _yMin;
	}
	
	/**
	 * Die Breite des bisher belegten Spielfeldes. 
	 */
	public int getWidth() {
		return _width;
	}
	
	/**
	 * Die Höhe des bisher belegten Spielfeldes. 
	 */
	public int getHeight() {
		return _height;
	}
	
	/**
	 * Dasselbe wie {@link #get(int, int)} nur mit einer {@link Position} als Argument.
	 */
	public Stein get(Position position) {
		return get(position.x(), position.y());
	}

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
			boolean gleicheFarbe = feld.getFarbe() == stein.getFarbe();
			boolean gleicheForm = feld.getForm() == stein.getForm();
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
			farben.add(feld.getFarbe());
			formen.add(feld.getForm());
		}
	}

	/**
	 * Prüfe, ob sich an der Position (x, y) ein {@link Stein} befindet.  
	 */
	public boolean istBesetzt(int x, int y) {
		return get(x, y) != null;
	}

	/**
	 * Prüfe ob sich an der gegebenen {@link Position} ein {@link Stein} befindet.
	 */
	public boolean istBesetzt(Position position) {
		return istBesetzt(position.x(), position.y());
	}
	
	/**
	 * Prüfe ob sich an einer der gegebenen {@link Position}en ein {@link Stein} befindet.
	 */
	public boolean istEineBesetzt(Iterable<Position> positionen) {
		for (Position position : positionen) {
			if (istBesetzt(position)) {
				return true;
			}
		}
		return false;
	}
	
	private boolean hatNachbarn(int x, int y) {
		return istBesetzt(x - 1, y) || istBesetzt(x + 1, y) || istBesetzt(x, y - 1) || istBesetzt(x, y + 1);
	}

	/**
	 * Freie {@link Position}en, die in derselben Reihe oder Spalte wie die
	 * gegebene Position liegen und zwischen denen und der gegebenen
	 * {@link Position} nur besetzte Felder sind.
	 */
	public List<Position> freieNachbarn(Position position) {
		ArrayList<Position> result = new ArrayList<Position>(4);
		for (Position nachbar : position.nachbarn()) {
			result.add(freiesFeldInRichtung(position, nachbar));
		}
		return result;
	}

	/**
	 * Liefert die erste freie {@link Position} ausgehend von der gegebenen
	 * {@link Position} in Richtung des gegebenen Nachbarn der {@link Position}.
	 */
	public Position freiesFeldInRichtung(Position position, Position nachbar) {
		int abstand = 1;
		while (true) {
			Position kandidat = position.inRichtung(nachbar, abstand++);
			if (!istBesetzt(kandidat)) {
				return kandidat;
			}
		}
	}

	/** 
	 * Freie {@link Position}en, die in derselben Reihe bzw. Spalte wie die
	 * beiden gegebenen {@link Position}en liegen und zwischen denen und den gegebenen
	 * {@link Position} nur besetzte Felder sind.
	 */
	public List<Position> freieNachbarn(Position erste, Position zweite) {
		boolean horizontal = erste.y() == zweite.y();
		if (horizontal) {
			return Arrays.asList(
				freiesFeldInRichtung(erste, erste.links()),
				freiesFeldInRichtung(erste, erste.rechts()));
		} else {
			return Arrays.asList(
				freiesFeldInRichtung(erste, erste.oben()),
				freiesFeldInRichtung(erste, erste.unten()));
		}
	}
}
