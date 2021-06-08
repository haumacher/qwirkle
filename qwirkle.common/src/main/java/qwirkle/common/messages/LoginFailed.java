package qwirkle.common.messages;

/**
 * Rejects creating a new user in {@link Response} to {@link Login}.
 */
public class LoginFailed extends LoginResponse {

	/**
	 * Creates a {@link LoginFailed} instance.
	 */
	public static LoginFailed create() {
		return new LoginFailed();
	}

	/**
	 * Creates a {@link LoginFailed} instance.
	 *
	 * @see #create()
	 */
	protected LoginFailed() {
		super();
	}

	private String _message = "";

	/**
	 * Reason why no new user could be created.
	 */
	public final String getMessage() {
		return _message;
	}

	/**
	 * @see #getMessage()
	 */
	public final LoginFailed setMessage(String value) {
		_message = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static LoginFailed readLoginFailed(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		LoginFailed result = new LoginFailed();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "LoginFailed";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "message": return getMessage();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "message": setMessage((String) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("message");
		out.value(getMessage());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "message": setMessage(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	@Override
	protected int typeId() {
		return 5;
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name(2);
		out.value(getMessage());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 2: setMessage(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	/** Reads a new instance from the given reader. */
	public static LoginFailed readLoginFailed(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		LoginFailed result = new LoginFailed();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	@Override
	public <R,A> R visit(LoginResponse.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
