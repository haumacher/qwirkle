package qwirkle.common.messages;

/**
 * Description of a user playing a game.
 *
 * @see GameInfo#getPlayers()
 */
public class UserInfo extends de.haumacher.msgbuf.data.AbstractDataObject {

	/**
	 * Creates a {@link UserInfo} instance.
	 */
	public static UserInfo userInfo() {
		return new UserInfo();
	}

	/**
	 * Creates a {@link UserInfo} instance.
	 *
	 * @see #userInfo()
	 */
	protected UserInfo() {
		super();
	}

	private String _userId = "";

	private String _name = "";

	/**
	 * Technical ID of the user. It is assigned by the server when logging in. 
	 *
	 * @see LoginSuccess
	 */
	public final String getUserId() {
		return _userId;
	}

	/**
	 * @see #getUserId()
	 */
	public final UserInfo setUserId(String value) {
		_userId = value;
		return this;
	}

	/**
	 * The name of the user as given by the client when logging in.
	 *
	 * @see Login#getName()
	 */
	public final String getName() {
		return _name;
	}

	/**
	 * @see #getName()
	 */
	public final UserInfo setName(String value) {
		_name = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static UserInfo readUserInfo(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		UserInfo result = new UserInfo();
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
			case "userId": return getUserId();
			case "name": return getName();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "userId": setUserId((String) value); break;
			case "name": setName((String) value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("userId");
		out.value(getUserId());
		out.name("name");
		out.value(getName());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "userId": setUserId(in.nextString()); break;
			case "name": setName(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

}
