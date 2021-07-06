/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.common.ai;

import static qwirkle.TestSpielfeld.*;
import static qwirkle.common.messages.Farbe.*;
import static qwirkle.common.messages.Form.*;

import java.util.ArrayList;
import java.util.List;

import junit.framework.TestCase;
import qwirkle.common.messages.Placement;
import qwirkle.common.messages.Stein;
import qwirkle.common.model.Nachzugstapel;
import qwirkle.common.model.Position;
import qwirkle.common.model.Spielfeld;
import qwirkle.common.model.Zugbewertung;

/**
 * Testfall für {@link QwirkleBot}.
 */
@SuppressWarnings("javadoc")
public class TestQwirkleBot extends TestCase {
	
	public void testZugauswahl() {
		QwirkleBot bot = new QwirkleBot(Zugbewertung::zugbewertung);
		
		bot.set(0, 0, stein(red, circle));
		bot.set(1, 0, stein(green, circle));
		bot.set(2, 0, stein(blue, circle));
		
		bot.add(stein(yellow, circle));
		bot.add(stein(blue, circle));
		bot.add(stein(red, circle));
		bot.add(stein(red, square));
		bot.add(stein(green, square));
		bot.add(stein(blue, square));
		bot.add(stein(yellow, square));
		
		List<Placement> move = bot.berechneZug();
		assertEquals(4, move.size());
		
		System.out.println(move);
	}
	
	/**
	 * Lässt zwei Computer-Spieler gegeneinander spielen.
	 */
	public void testGame() {
		Nachzugstapel stapel = new Nachzugstapel();
		
		List<QwirkleBot> bots = new ArrayList<>();
		bots.add(new QwirkleBot(Zugbewertung::zugbewertung));
		bots.add(new QwirkleBot(Zugbewertung::zugbewertung));
		
		for (int n = 0; n < 6; n++) {
			for (QwirkleBot bot : bots) {
				bot.add(stapel.nimmStein());
			}
		}
		
		Spielfeld spielfeld = new Spielfeld();
		
		long start = System.nanoTime();
		
		int[] spielstand = new int[bots.size()];
		
		int current = 0;
		while (true) {
			QwirkleBot currentBot = bots.get(current);
			
			List<Placement> zug = currentBot.berechneZug();
			System.out.println("Spieler " + current + ": " + zug);
			
			for (Placement placement : zug) {
				int x = placement.getX();
				int y = placement.getY();
				Stein stein = placement.getStein();
				
				spielfeld.set(x, y, stein);
				for (QwirkleBot bot : bots) {
					bot.set(x, y, stein);
				}
			}
			
			int bewertung = Zugbewertung.zugbewertung(spielfeld, positions(zug));
			spielstand[current] += bewertung;
			
			while (stapel.hatNochSteine() && currentBot.steineImVorrat() < 6) {
				currentBot.add(stapel.nimmStein());
			}
			
			if (!currentBot.hatNochSteine()) {
				break;
			}
			
			current = (current + 1) % bots.size();
		}
		
		long elapsed = System.nanoTime() - start;
		
		for (int n = 0, cnt = bots.size(); n < cnt; n++) {
			System.out.println("Punkte Spieler " + n + ": " + spielstand[n]);
		}
		System.out.println("Game took " + elapsed / 1000000L + "ms.");
		
	}

	private static List<Position> positions(List<Placement> zug) {
		ArrayList<Position> result = new ArrayList<>(zug.size());
		for (Placement placement : zug) {
			result.add(new Position(placement.getX(), placement.getY()));
		}
		return result;
	}

}
