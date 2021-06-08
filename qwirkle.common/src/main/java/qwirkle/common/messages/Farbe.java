package qwirkle.common.messages;

public enum Farbe {

	red,

	green,

	blue,

	yellow,

	orange,

	magenta,

	;

	/** Writes this instance to the given output. */
	public final void writeTo(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		out.value(name());
	}

	/** Reads a new instance from the given reader. */
	public static Farbe readFarbe(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		return valueOf(in.nextString());
	}

	/** Writes this instance to the given binary output. */
	public final void writeTo(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		switch (this) {
			case red: out.value(1); break;
			case green: out.value(2); break;
			case blue: out.value(3); break;
			case yellow: out.value(4); break;
			case orange: out.value(5); break;
			case magenta: out.value(6); break;
			default: out.value(0);
		}
	}

	/** Reads a new instance from the given binary reader. */
	public static Farbe readFarbe(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		switch (in.nextInt()) {
			case 1: return red;
			case 2: return green;
			case 3: return blue;
			case 4: return yellow;
			case 5: return orange;
			case 6: return magenta;
			default: return red;
		}
	}
}
