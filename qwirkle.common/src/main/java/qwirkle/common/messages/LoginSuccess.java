package qwirkle.common.messages;

/**
 * Notifies about a successful user creation in response to {@link Login}.
 */
public class LoginSuccess extends LoginResponse {

	/**
	 * Creates a {@link LoginSuccess} instance.
	 */
	public static LoginSuccess loginSuccess() {
		return new LoginSuccess();
	}

	/**
	 * Creates a {@link LoginSuccess} instance.
	 *
	 * @see #loginSuccess()
	 */
	protected LoginSuccess() {
		super();
	}

	private UserInfo _user = null;

	/**
	 * User information of the newly created user.
	 */
	public final UserInfo getUser() {
		return _user;
	}

	/**
	 * @see #getUser()
	 */
	public final LoginSuccess setUser(UserInfo value) {
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
	public static LoginSuccess readLoginSuccess(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		LoginSuccess result = new LoginSuccess();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "LoginSuccess";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "user": return getUser();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "user": setUser((UserInfo) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		if (hasUser()) {
			out.name("user");
			getUser().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "user": setUser(UserInfo.readUserInfo(in)); break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(LoginResponse.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
