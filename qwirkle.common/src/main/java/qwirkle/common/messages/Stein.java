package qwirkle.common.messages;

/**
 * Description of a tile placed in a move.
 *
 * @see Placement#getStein()
 * @see NotifyTurn#getPlacements()
 */
public class Stein extends de.haumacher.msgbuf.data.AbstractDataObject implements de.haumacher.msgbuf.binary.BinaryDataObject {

	/**
	 * Creates a {@link Stein} instance.
	 */
	public static Stein create() {
		return new Stein();
	}

	/**
	 * Creates a {@link Stein} instance.
	 *
	 * @see #create()
	 */
	protected Stein() {
		super();
	}

	private Farbe _farbe = Farbe.red;

	private Form _form = Form.circle;

	/**
	 * The color of this tile.
	 */
	public final Farbe getFarbe() {
		return _farbe;
	}

	/**
	 * @see #getFarbe()
	 */
	public final Stein setFarbe(Farbe value) {
		_farbe = value;
		return this;
	}

	/**
	 * Checks, whether {@link #getFarbe()} has a value.
	 */
	public final boolean hasFarbe() {
		return _farbe != null;
	}

	/**
	 * The shape of this tile.
	 */
	public final Form getForm() {
		return _form;
	}

	/**
	 * @see #getForm()
	 */
	public final Stein setForm(Form value) {
		_form = value;
		return this;
	}

	/**
	 * Checks, whether {@link #getForm()} has a value.
	 */
	public final boolean hasForm() {
		return _form != null;
	}

	/** Reads a new instance from the given reader. */
	public static Stein readStein(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		Stein result = new Stein();
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
			case "farbe": return getFarbe();
			case "form": return getForm();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "farbe": setFarbe((Farbe) value); break;
			case "form": setForm((Form) value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		if (hasFarbe()) {
			out.name("farbe");
			getFarbe().writeTo(out);
		}
		if (hasForm()) {
			out.name("form");
			getForm().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "farbe": setFarbe(Farbe.readFarbe(in)); break;
			case "form": setForm(Form.readForm(in)); break;
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
		if (hasFarbe()) {
			out.name(1);
			getFarbe().writeTo(out);
		}
		if (hasForm()) {
			out.name(2);
			getForm().writeTo(out);
		}
	}

	/** Consumes the value for the field with the given ID and assigns its value. */
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 1: setFarbe(Farbe.readFarbe(in)); break;
			case 2: setForm(Form.readForm(in)); break;
			default: in.skipValue(); 
		}
	}

	/** Reads a new instance from the given reader. */
	public static Stein readStein(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		Stein result = new Stein();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

}
