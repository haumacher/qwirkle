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
import qwirkle.common.model.Nachzugstapel;

/**
 * Testfall für {@link QwirkleBot}.
 */
@SuppressWarnings("javadoc")
public class TestQwirkleBot extends TestCase {
	
	public void testZugauswahl() {
		QwirkleBot bot = new QwirkleBot();
		
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
		bots.add(new QwirkleBot());
		bots.add(new QwirkleBot());
		
		for (int n = 0; n < 6; n++) {
			for (QwirkleBot bot : bots) {
				bot.add(stapel.nimmStein());
			}
		}
		
		long start = System.nanoTime();
		
		int current = 0;
		while (true) {
			QwirkleBot currentBot = bots.get(current);
			
			List<Placement> zug = currentBot.berechneZug();
			System.out.println("Spieler " + current + ": " + zug);
			
			for (QwirkleBot bot : bots) {
				for (Placement placement : zug) {
					bot.set(placement.getX(), placement.getY(), placement.getStein());
				}
			}
			
			while (stapel.hatNochSteine() && currentBot.steineImVorrat() < 6) {
				currentBot.add(stapel.nimmStein());
			}
			
			if (!currentBot.hatNochSteine()) {
				break;
			}
			
			current = (current + 1) % bots.size();
		}
		
		long elapsed = System.nanoTime() - start;
		
		System.out.println("Game took " + elapsed / 1000000L + "ms.");
		
	}

}
