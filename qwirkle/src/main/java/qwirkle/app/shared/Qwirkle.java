package qwirkle.app.shared;

import qwirkle.common.messages.Farbe;
import qwirkle.common.messages.Form;
import qwirkle.common.messages.Stein;

public class Qwirkle {

	public static Stein stein(Farbe farbe, Form form) {
		return Stein.stein().setFarbe(farbe).setForm(form);
	}

}
