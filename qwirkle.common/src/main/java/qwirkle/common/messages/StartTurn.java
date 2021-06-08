package qwirkle.common.messages;

/**
 * Notification that it's the turn of a certain player.
 *
 * <p>
 * The message is sent to all players. This enables the UI of all players to show who's turn it is.
 * </p>
 */
public class StartTurn extends QwirkleServerMessage {

	/**
	 * Creates a {@link StartTurn} instance.
	 */
	public static StartTurn create() {
		return new StartTurn();
	}

	/**
	 * Creates a {@link StartTurn} instance.
	 *
	 * @see #create()
	 */
	protected StartTurn() {
		super();
	}

	private String _userId = "";

	/**
	 * The ID of the player who has the next turn.
	 */
	public final String getUserId() {
		return _userId;
	}

	/**
	 * @see #getUserId()
	 */
	public final StartTurn setUserId(String value) {
		_userId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static StartTurn readStartTurn(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		StartTurn result = new StartTurn();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "StartTurn";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "userId": return getUserId();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "userId": setUserId((String) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("userId");
		out.value(getUserId());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "userId": setUserId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	@Override
	protected int typeId() {
		return 2;
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name(1);
		out.value(getUserId());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 1: setUserId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	/** Reads a new instance from the given reader. */
	public static StartTurn readStartTurn(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		StartTurn result = new StartTurn();
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
