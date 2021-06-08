package qwirkle.common.messages;

/**
 * The shape of a tile.
 */
public enum Form {

	circle,

	square,

	star,

	pounce,

	cross,

	diamond,

	;

	/** Writes this instance to the given output. */
	public final void writeTo(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		out.value(name());
	}

	/** Reads a new instance from the given reader. */
	public static Form readForm(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		return valueOf(in.nextString());
	}

	/** Writes this instance to the given binary output. */
	public final void writeTo(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		switch (this) {
			case circle: out.value(1); break;
			case square: out.value(2); break;
			case star: out.value(3); break;
			case pounce: out.value(4); break;
			case cross: out.value(5); break;
			case diamond: out.value(6); break;
			default: out.value(0);
		}
	}

	/** Reads a new instance from the given binary reader. */
	public static Form readForm(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		switch (in.nextInt()) {
			case 1: return circle;
			case 2: return square;
			case 3: return star;
			case 4: return pounce;
			case 5: return cross;
			case 6: return diamond;
			default: return circle;
		}
	}
}
