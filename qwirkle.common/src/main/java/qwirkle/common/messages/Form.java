package qwirkle.common.messages;

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
}
