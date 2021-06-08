package qwirkle.common.model;

import qwirkle.common.messages.Farbe;
import qwirkle.common.messages.Form;
import qwirkle.common.messages.Stein;

public class Qwirkle {

	public static Stein stein(Farbe farbe, Form form) {
		return Stein.create().setFarbe(farbe).setForm(form);
	}

}
