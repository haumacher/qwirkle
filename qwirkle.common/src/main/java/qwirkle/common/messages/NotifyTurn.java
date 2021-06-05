package qwirkle.common.messages;

public class NotifyTurn extends QwirkleServerMessage {

	/**
	 * Creates a {@link NotifyTurn} instance.
	 */
	public static NotifyTurn notifyTurn() {
		return new NotifyTurn();
	}

	/**
	 * Creates a {@link NotifyTurn} instance.
	 *
	 * @see #notifyTurn()
	 */
	protected NotifyTurn() {
		super();
	}

	private String _lastUserId = "";

	private final java.util.List<Placement> _placements = new java.util.ArrayList<>();

	private String _nextUserId = "";

	public final String getLastUserId() {
		return _lastUserId;
	}

	/**
	 * @see #getLastUserId()
	 */
	public final NotifyTurn setLastUserId(String value) {
		_lastUserId = value;
		return this;
	}

	public final java.util.List<Placement> getPlacements() {
		return _placements;
	}

	/**
	 * @see #getPlacements()
	 */
	public final NotifyTurn setPlacements(java.util.List<Placement> value) {
		_placements.clear();
		_placements.addAll(value);
		return this;
	}

	/**
	 * Adds a value to the {@link #getPlacements()} list.
	 */
	public final NotifyTurn addPlacement(Placement value) {
		_placements.add(value);
		return this;
	}

	public final String getNextUserId() {
		return _nextUserId;
	}

	/**
	 * @see #getNextUserId()
	 */
	public final NotifyTurn setNextUserId(String value) {
		_nextUserId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static NotifyTurn readNotifyTurn(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		NotifyTurn result = new NotifyTurn();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "NotifyTurn";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "lastUserId": return getLastUserId();
			case "placements": return getPlacements();
			case "nextUserId": return getNextUserId();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "lastUserId": setLastUserId((String) value); break;
			case "placements": setPlacements((java.util.List<Placement>) value); break;
			case "nextUserId": setNextUserId((String) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("lastUserId");
		out.value(getLastUserId());
		out.name("placements");
		out.beginArray();
		for (Placement x : getPlacements()) {
			x.writeTo(out);
		}
		out.endArray();
		out.name("nextUserId");
		out.value(getNextUserId());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "lastUserId": setLastUserId(in.nextString()); break;
			case "placements": {
				in.beginArray();
				while (in.hasNext()) {
					addPlacement(Placement.readPlacement(in));
				}
				in.endArray();
			}
			break;
			case "nextUserId": setNextUserId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(QwirkleServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
