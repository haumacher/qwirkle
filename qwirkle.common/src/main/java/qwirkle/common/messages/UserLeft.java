package qwirkle.common.messages;

public class UserLeft extends ServerMessage {

	/**
	 * Creates a {@link UserLeft} instance.
	 */
	public static UserLeft userLeft() {
		return new UserLeft();
	}

	/**
	 * Creates a {@link UserLeft} instance.
	 *
	 * @see #userLeft()
	 */
	protected UserLeft() {
		super();
	}

	private String _gameId = "";

	private String _userId = "";

	public final String getGameId() {
		return _gameId;
	}

	/**
	 * @see #getGameId()
	 */
	public final UserLeft setGameId(String value) {
		_gameId = value;
		return this;
	}

	public final String getUserId() {
		return _userId;
	}

	/**
	 * @see #getUserId()
	 */
	public final UserLeft setUserId(String value) {
		_userId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static UserLeft readUserLeft(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		UserLeft result = new UserLeft();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "UserLeft";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "gameId": return getGameId();
			case "userId": return getUserId();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "gameId": setGameId((String) value); break;
			case "userId": setUserId((String) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("gameId");
		out.value(getGameId());
		out.name("userId");
		out.value(getUserId());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "gameId": setGameId(in.nextString()); break;
			case "userId": setUserId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(ServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
