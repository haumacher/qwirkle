package qwirkle.common.model;

import java.util.List;

import qwirkle.common.messages.Placement;

public class Zugbewertung {
	public static int zugbewertung (Spielfeld spielfeld, List<Position> zug) {
		int wert=0;
		int wertx=0;
		int werty=0;
		for(int index = 0; index< zug.size(); index++) {
			Position pos=zug.get(index);
			for (int x=pos.x(); spielfeld.get(x,pos.y())!=null; x++) {
				{wertx++;};
			}
			for (int x=pos.x()-1; spielfeld.get(x,pos.y())!=null; x--) {
				{wertx++;};
			}
			for (int y=pos.y(); spielfeld.get(pos.x(),y)!=null; y++) {
				{werty++;};
			}
			for (int y=pos.y()-1; spielfeld.get(pos.x(),y)!=null; y--) {
				{werty++;};
			}
		}
		if(wertx>1) {wert=wert+wertx;}
		if(werty>1) {wert=wert+werty;}
		if(wertx==1 && werty==1) {wert=1;}
		return wert;
	}
}
