package qwirkle.common.messages;

public class UserJoined extends ServerMessage {

	/**
	 * Creates a {@link UserJoined} instance.
	 */
	public static UserJoined userJoined() {
		return new UserJoined();
	}

	/**
	 * Creates a {@link UserJoined} instance.
	 *
	 * @see #userJoined()
	 */
	protected UserJoined() {
		super();
	}

	private String _gameId = "";

	private UserInfo _user = null;

	public final String getGameId() {
		return _gameId;
	}

	/**
	 * @see #getGameId()
	 */
	public final UserJoined setGameId(String value) {
		_gameId = value;
		return this;
	}

	public final UserInfo getUser() {
		return _user;
	}

	/**
	 * @see #getUser()
	 */
	public final UserJoined setUser(UserInfo value) {
		_user = value;
		return this;
	}

	/**
	 * Checks, whether {@link #getUser()} has a value.
	 */
	public final boolean hasUser() {
		return _user != null;
	}

	/** Reads a new instance from the given reader. */
	public static UserJoined readUserJoined(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		UserJoined result = new UserJoined();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "UserJoined";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "gameId": return getGameId();
			case "user": return getUser();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "gameId": setGameId((String) value); break;
			case "user": setUser((UserInfo) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("gameId");
		out.value(getGameId());
		if (hasUser()) {
			out.name("user");
			getUser().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "gameId": setGameId(in.nextString()); break;
			case "user": setUser(UserInfo.readUserInfo(in)); break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(ServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
