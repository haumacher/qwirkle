package qwirkle.common.messages;

public class StartTurn extends QwirkleServerMessage {

	/**
	 * Creates a {@link StartTurn} instance.
	 */
	public static StartTurn startTurn() {
		return new StartTurn();
	}

	/**
	 * Creates a {@link StartTurn} instance.
	 *
	 * @see #startTurn()
	 */
	protected StartTurn() {
		super();
	}

	private String _userId = "";

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
	public <R,A> R visit(QwirkleServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
