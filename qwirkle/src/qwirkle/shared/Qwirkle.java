package qwirkle.shared;

public class Qwirkle {

	public enum Farbe {
		yellow, orange, red, blue, green, magenta
	}

	public enum Form {
		circle, square, star, pounce, cross, diamond
	}

	public static class Stein {
		public final Farbe farbe;
		public final Form form;

		public Stein(Farbe farbe, Form form) {
			this.farbe = farbe;
			this.form = form;
		}
	}

	public static void main(String[] args) {
		System.out.println("Quirkle trial!!!");
		Stein[] steine = new Stein[4 * 6 * 6];
		for (int i = 0; i <= 3; i++) {
			for (int j = 0; j <= 5; j++) {
				for (int k = 0; k <= 5; k++) {
					steine[j + 6 * k + 36 * i] = new Stein(Farbe.values()[j], Form.values()[k]);
				}
			}
		}
	}
}
