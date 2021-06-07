package qwirkle.common.messages;

public class FillInventory extends QwirkleServerMessage {

	/**
	 * Creates a {@link FillInventory} instance.
	 */
	public static FillInventory fillInventory() {
		return new FillInventory();
	}

	/**
	 * Creates a {@link FillInventory} instance.
	 *
	 * @see #fillInventory()
	 */
	protected FillInventory() {
		super();
	}

	private final java.util.List<Stein> _steine = new java.util.ArrayList<>();

	public final java.util.List<Stein> getSteine() {
		return _steine;
	}

	/**
	 * @see #getSteine()
	 */
	public final FillInventory setSteine(java.util.List<Stein> value) {
		_steine.clear();
		_steine.addAll(value);
		return this;
	}

	/**
	 * Adds a value to the {@link #getSteine()} list.
	 */
	public final FillInventory addSteine(Stein value) {
		_steine.add(value);
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static FillInventory readFillInventory(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		FillInventory result = new FillInventory();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "FillInventory";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "steine": return getSteine();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "steine": setSteine((java.util.List<Stein>) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("steine");
		out.beginArray();
		for (Stein x : getSteine()) {
			x.writeTo(out);
		}
		out.endArray();
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "steine": {
				in.beginArray();
				while (in.hasNext()) {
					addSteine(Stein.readStein(in));
				}
				in.endArray();
			}
			break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(QwirkleServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}