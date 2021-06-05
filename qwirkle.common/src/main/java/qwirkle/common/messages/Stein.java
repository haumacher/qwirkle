package qwirkle.common.messages;

public class Stein extends de.haumacher.msgbuf.data.AbstractDataObject {

	/**
	 * Creates a {@link Stein} instance.
	 */
	public static Stein stein() {
		return new Stein();
	}

	/**
	 * Creates a {@link Stein} instance.
	 *
	 * @see #stein()
	 */
	protected Stein() {
		super();
	}

	private Farbe _farbe = Farbe.yellow;

	private Form _form = Form.circle;

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

}
