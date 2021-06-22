package qwirkle;

import static qwirkle.common.messages.Farbe.*;
import static qwirkle.common.messages.Form.*;

import junit.framework.TestCase;
import qwirkle.common.messages.Farbe;
import qwirkle.common.messages.Form;
import qwirkle.common.messages.Stein;
import qwirkle.common.model.Spielfeld;

/**
 * Test-Klasse, welche die Implementierung von {@link Spielfeld} überprüft.
 */
public class TestSpielfeld extends TestCase {
	
	public void testGetSet() {
		Spielfeld spielfeld = new Spielfeld();
		
		Stein s1 = Stein.create().setFarbe(red).setForm(circle);
		Stein s2 = Stein.create().setFarbe(green).setForm(circle);
		Stein s3 = Stein.create().setFarbe(blue).setForm(circle);
		Stein s4 = Stein.create().setFarbe(magenta).setForm(circle);
		Stein s5 = Stein.create().setFarbe(yellow).setForm(circle);
		
		spielfeld.set(0, 0, s1);
		assertEquals(s1, spielfeld.get(0, 0));
		assertEquals(null, spielfeld.get(1, 0));
		assertEquals(null, spielfeld.get(0, 1));
		assertEquals(null, spielfeld.get(-1, 0));
		assertEquals(null, spielfeld.get(0, -1));
		
		spielfeld.set(1, 0, s2);
		assertEquals(s1, spielfeld.get(0, 0));
		assertEquals(s2, spielfeld.get(1, 0));
		
		spielfeld.set(-1, 0, s3);
		assertEquals(s1, spielfeld.get(0, 0));
		assertEquals(s2, spielfeld.get(1, 0));
		assertEquals(s3, spielfeld.get(-1, 0));
		
		spielfeld.set(-1, 1, s4);
		assertEquals(s1, spielfeld.get(0, 0));
		assertEquals(s2, spielfeld.get(1, 0));
		assertEquals(s3, spielfeld.get(-1, 0));
		assertEquals(s4, spielfeld.get(-1, 1));
		
		spielfeld.set(1, -1, s5);
		assertEquals(s1, spielfeld.get(0, 0));
		assertEquals(s2, spielfeld.get(1, 0));
		assertEquals(s3, spielfeld.get(-1, 0));
		assertEquals(s4, spielfeld.get(-1, 1));
		assertEquals(s5, spielfeld.get(1, -1));
	}
	
	public void testZugErlaubtReihe() {
		Spielfeld spielfeld = spielfeld(new Stein[][] {
			{stein(red, circle), stein(blue, circle)}
		});
		
		assertTrue(spielfeld.zugErlaubt(2, 0, stein(green, circle)));
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(red, circle)));
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(green, square)));
		assertFalse(spielfeld.zugErlaubt(0, 1, stein(green, square)));
		assertTrue(spielfeld.zugErlaubt(0, 1, stein(red, square)));
		assertTrue(spielfeld.zugErlaubt(0, 1, stein(blue, circle)));
	}

	public void testZugVerbindenVerboten() {
		Spielfeld spielfeld = spielfeld(new Stein[][] {
			{stein(red, circle), stein(blue, circle), null, stein(yellow, circle), stein(red, circle)}
		});
		
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(green, circle)));
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(red, circle)));
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(green, square)));
	}
	
	public void testZugVerbindenErlaubt() {
		Spielfeld spielfeld = spielfeld(new Stein[][] {
			{stein(red, circle), stein(blue, circle), null, stein(yellow, circle), stein(magenta, circle)}
		});
		
		assertTrue(spielfeld.zugErlaubt(2, 0, stein(green, circle)));
		assertTrue(spielfeld.zugErlaubt(2, 0, stein(orange, circle)));
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(red, circle)));
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(magenta, circle)));
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(green, square)));
	}
	
	public void testZugEckErlaubt() {
		Spielfeld spielfeld = spielfeld(new Stein[][] {
			{stein(red, circle), stein(blue, circle),  null},
			{null,               null,                 stein(yellow, square)},
			{null,               null,                 stein(yellow, star)}
		});
		
		assertTrue(spielfeld.zugErlaubt(2, 0, stein(yellow, circle)));
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(orange, circle)));
	}
	
	public void testStartZugErlaubt() {
		Spielfeld spielfeld = spielfeld(new Stein[][] {});
		
		assertTrue(spielfeld.zugErlaubt(0, 0, stein(yellow, circle)));
		assertFalse(spielfeld.zugErlaubt(2, 0, stein(yellow, circle)));
		assertFalse(spielfeld.zugErlaubt(0, -1, stein(yellow, circle)));
	}
	
	public void testFeldBesetzt() {
		Spielfeld spielfeld = spielfeld(new Stein[][] {{stein(yellow, circle)}});
		
		assertFalse(spielfeld.zugErlaubt(0, 0, stein(yellow, circle)));
		assertFalse(spielfeld.zugErlaubt(0, 0, stein(yellow, square)));
	}
	
	private Spielfeld spielfeld(Stein[][] steine) {
		Spielfeld spielfeld = new Spielfeld();
		for (int y = 0, height = steine.length; y < height; y++) {
			Stein[] reihe = steine[y];
			for (int x = 0, width = reihe.length; x < width; x++) {
				Stein stein = reihe[x];
				if (stein != null) {
					spielfeld.set(x, y, stein);
				}
			}
		}
		return spielfeld;
	}

	public static Stein stein(Farbe farbe, Form form) {
		return Stein.create().setFarbe(farbe).setForm(form);
	}

}
