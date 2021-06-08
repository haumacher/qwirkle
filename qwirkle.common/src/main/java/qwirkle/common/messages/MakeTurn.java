package qwirkle.common.messages;

public class MakeTurn extends QwirkleUserMessage {

	/**
	 * Creates a {@link MakeTurn} instance.
	 */
	public static MakeTurn create() {
		return new MakeTurn();
	}

	/**
	 * Creates a {@link MakeTurn} instance.
	 *
	 * @see #create()
	 */
	protected MakeTurn() {
		super();
	}

	private final java.util.List<Placement> _placements = new java.util.ArrayList<>();

	/**
	 * Encoding of the player's move.
	 */
	public final java.util.List<Placement> getPlacements() {
		return _placements;
	}

	/**
	 * @see #getPlacements()
	 */
	public final MakeTurn setPlacements(java.util.List<Placement> value) {
		_placements.clear();
		_placements.addAll(value);
		return this;
	}

	/**
	 * Adds a value to the {@link #getPlacements()} list.
	 */
	public final MakeTurn addPlacement(Placement value) {
		_placements.add(value);
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static MakeTurn readMakeTurn(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		MakeTurn result = new MakeTurn();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "MakeTurn";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "placements": return getPlacements();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "placements": setPlacements((java.util.List<Placement>) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("placements");
		out.beginArray();
		for (Placement x : getPlacements()) {
			x.writeTo(out);
		}
		out.endArray();
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "placements": {
				in.beginArray();
				while (in.hasNext()) {
					addPlacement(Placement.readPlacement(in));
				}
				in.endArray();
			}
			break;
			default: super.readField(in, field);
		}
	}

	@Override
	protected int typeId() {
		return 1;
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name(2);
		{
			java.util.List<Placement> values = getPlacements();
			out.beginArray(de.haumacher.msgbuf.binary.DataType.OBJECT, values.size());
			for (Placement x : values) {
				x.writeTo(out);
			}
			out.endArray();
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 2: {
				in.beginArray();
				while (in.hasNext()) {
					addPlacement(Placement.readPlacement(in));
				}
				in.endArray();
			}
			break;
			default: super.readField(in, field);
		}
	}

	/** Reads a new instance from the given reader. */
	public static MakeTurn readMakeTurn(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		MakeTurn result = new MakeTurn();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	@Override
	public <R,A> R visit(QwirkleUserMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
