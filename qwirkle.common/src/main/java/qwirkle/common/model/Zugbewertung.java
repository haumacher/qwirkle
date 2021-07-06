package qwirkle.common.model;

import java.util.List;

public class Zugbewertung {
	public static int zugbewertung (Spielfeld spielfeld, List<Position> zug) {
		// Der X-Wert der Spalte die bereits gezählt wurde.
		int xBewertet = Integer.MIN_VALUE;
		
		// Der Y-Wert der Zeile die bereits gezählt wurde.
		int yBewertet = Integer.MIN_VALUE;
		
		int wert=0;
		for(int index = 0; index< zug.size(); index++) {
			Position pos=zug.get(index);
			
			int wertx=0;
			int werty=0;
			int posX = pos.x();
			int posY = pos.y();
			
			if (posY != yBewertet) {
				for (int x=posX; spielfeld.get(x,posY)!=null; x++) {
					{wertx++;};
				}
				for (int x=posX-1; spielfeld.get(x,posY)!=null; x--) {
					{wertx++;};
				}
				if (wertx > 1) {
					yBewertet = posY;
				}
			}
			
			if (posX != xBewertet) {
				for (int y=posY; spielfeld.get(posX,y)!=null; y++) {
					{werty++;};
				}
				for (int y=posY-1; spielfeld.get(posX,y)!=null; y--) {
					{werty++;};
				}
				if (werty > 1) {
					xBewertet = posX;
				}
			}
			
			if (wertx>1) {
				if (wertx == 6) {
					// Qwirkle
					wert += 12;
				} else {
					wert += wertx;
				}
			}
			if (werty>1) {
				if (werty == 6) {
					// Qwirkle
					wert += 12;
				} else {
					wert += werty;
				}
			}
		}
		
		if (wert == 0 && zug.size() == 1) {
			wert = 1;
		}
			
		return wert;
	}
}
