package qwirkle.common.messages;

/**
 * The encoding of a player's move consists of a number of {@link Placement}s.
 *
 * @see NotifyTurn#getPlacements()
 */
public class Placement extends de.haumacher.msgbuf.data.AbstractDataObject implements de.haumacher.msgbuf.binary.BinaryDataObject {

	/**
	 * Creates a {@link Placement} instance.
	 */
	public static Placement create() {
		return new Placement();
	}

	/**
	 * Creates a {@link Placement} instance.
	 *
	 * @see #create()
	 */
	protected Placement() {
		super();
	}

	private Stein _stein = null;

	private int _x = 0;

	private int _y = 0;

	/**
	 * Apperance of the tile that has been placed.
	 */
	public final Stein getStein() {
		return _stein;
	}

	/**
	 * @see #getStein()
	 */
	public final Placement setStein(Stein value) {
		_stein = value;
		return this;
	}

	/**
	 * Checks, whether {@link #getStein()} has a value.
	 */
	public final boolean hasStein() {
		return _stein != null;
	}

	/**
	 * The X coordinate where the tile has been placed on the board.
	 *
	 * <p>
	 * The first move must always be contain the position (0,0).
	 * </p>
	 */
	public final int getX() {
		return _x;
	}

	/**
	 * @see #getX()
	 */
	public final Placement setX(int value) {
		_x = value;
		return this;
	}

	/**
	 * The Y coordinate where the tile has been placed on the board.
	 *
	 * @see #getX()
	 */
	public final int getY() {
		return _y;
	}

	/**
	 * @see #getY()
	 */
	public final Placement setY(int value) {
		_y = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static Placement readPlacement(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		Placement result = new Placement();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	public final void writeTo(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		writeContent(out);
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "stein": return getStein();
			case "x": return getX();
			case "y": return getY();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "stein": setStein((Stein) value); break;
			case "x": setX((int) value); break;
			case "y": setY((int) value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		if (hasStein()) {
			out.name("stein");
			getStein().writeTo(out);
		}
		out.name("x");
		out.value(getX());
		out.name("y");
		out.value(getY());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "stein": setStein(Stein.readStein(in)); break;
			case "x": setX(in.nextInt()); break;
			case "y": setY(in.nextInt()); break;
			default: super.readField(in, field);
		}
	}

	@Override
	public final void writeTo(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		out.beginObject();
		writeFields(out);
		out.endObject();
	}

	/** Serializes all fields of this instance to the given binary output. */
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		if (hasStein()) {
			out.name(1);
			getStein().writeTo(out);
		}
		out.name(2);
		out.value(getX());
		out.name(3);
		out.value(getY());
	}

	/** Consumes the value for the field with the given ID and assigns its value. */
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 1: setStein(Stein.readStein(in)); break;
			case 2: setX(in.nextInt()); break;
			case 3: setY(in.nextInt()); break;
			default: in.skipValue(); 
		}
	}

	/** Reads a new instance from the given reader. */
	public static Placement readPlacement(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		Placement result = new Placement();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

}
