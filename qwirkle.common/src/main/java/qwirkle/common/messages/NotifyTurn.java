package qwirkle.common.messages;

/**
 * Notification that a certain player has made it's turn.
 *
 * <p>
 * The message is sent to all players. This enables to update the UI according to the move a player has made.
 * </p>
 */
public class NotifyTurn extends QwirkleServerMessage {

	/**
	 * Creates a {@link NotifyTurn} instance.
	 */
	public static NotifyTurn create() {
		return new NotifyTurn();
	}

	/**
	 * Creates a {@link NotifyTurn} instance.
	 *
	 * @see #create()
	 */
	protected NotifyTurn() {
		super();
	}

	private String _lastUserId = "";

	private final java.util.List<Placement> _placements = new java.util.ArrayList<>();

	private int _score = 0;

	private String _nextUserId = "";

	/**
	 * The ID of the player who did his move.
	 */
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

	/**
	 * Encoding of the move
	 */
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

	/**
	 * The number of points received by {@link #getLastUserId()} for this {@link #getPlacements()}.
	 */
	public final int getScore() {
		return _score;
	}

	/**
	 * @see #getScore()
	 */
	public final NotifyTurn setScore(int value) {
		_score = value;
		return this;
	}

	/**
	 * The ID of the player who has to play the next turn.
	 */
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
			case "score": return getScore();
			case "nextUserId": return getNextUserId();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "lastUserId": setLastUserId((String) value); break;
			case "placements": setPlacements((java.util.List<Placement>) value); break;
			case "score": setScore((int) value); break;
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
		out.name("score");
		out.value(getScore());
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
			case "score": setScore(in.nextInt()); break;
			case "nextUserId": setNextUserId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	@Override
	protected int typeId() {
		return 3;
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name(1);
		out.value(getLastUserId());
		out.name(2);
		{
			java.util.List<Placement> values = getPlacements();
			out.beginArray(de.haumacher.msgbuf.binary.DataType.OBJECT, values.size());
			for (Placement x : values) {
				x.writeTo(out);
			}
			out.endArray();
		}
		out.name(3);
		out.value(getScore());
		out.name(4);
		out.value(getNextUserId());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 1: setLastUserId(in.nextString()); break;
			case 2: {
				in.beginArray();
				while (in.hasNext()) {
					addPlacement(Placement.readPlacement(in));
				}
				in.endArray();
			}
			break;
			case 3: setScore(in.nextInt()); break;
			case 4: setNextUserId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	/** Reads a new instance from the given reader. */
	public static NotifyTurn readNotifyTurn(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		NotifyTurn result = new NotifyTurn();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	@Override
	public <R,A> R visit(QwirkleServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
