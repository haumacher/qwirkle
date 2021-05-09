package qwirkle;

import junit.framework.TestCase;
import qwirkle.Qwirkle.Farbe;
import qwirkle.Qwirkle.Form;
import qwirkle.Qwirkle.Stein;

public class TestSpielfeld extends TestCase {
	
	public void testGetSet() {
		Spielfeld spielfeld = new Spielfeld();
		
		Stein s1 = new Stein(Farbe.red, Form.circle);
		Stein s2 = new Stein(Farbe.green, Form.circle);
		Stein s3 = new Stein(Farbe.blue, Form.circle);
		Stein s4 = new Stein(Farbe.magenta, Form.circle);
		Stein s5 = new Stein(Farbe.yellow, Form.circle);
		
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

}
