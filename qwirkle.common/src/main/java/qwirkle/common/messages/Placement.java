package qwirkle.common.messages;

public class Placement extends de.haumacher.msgbuf.data.AbstractDataObject {

	/**
	 * Creates a {@link Placement} instance.
	 */
	public static Placement placement() {
		return new Placement();
	}

	/**
	 * Creates a {@link Placement} instance.
	 *
	 * @see #placement()
	 */
	protected Placement() {
		super();
	}

	private Stein _stein = null;

	private int _x = 0;

	private int _y = 0;

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

}
