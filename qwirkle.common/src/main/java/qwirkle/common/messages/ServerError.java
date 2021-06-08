package qwirkle.common.messages;

public class ServerError extends Response {

	/**
	 * Creates a {@link ServerError} instance.
	 */
	public static ServerError create() {
		return new ServerError();
	}

	/**
	 * Creates a {@link ServerError} instance.
	 *
	 * @see #create()
	 */
	protected ServerError() {
		super();
	}

	private String _message = "";

	public final String getMessage() {
		return _message;
	}

	/**
	 * @see #getMessage()
	 */
	public final ServerError setMessage(String value) {
		_message = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static ServerError readServerError(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		ServerError result = new ServerError();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "ServerError";
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
		return 3;
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
	public static ServerError readServerError(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		ServerError result = new ServerError();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	@Override
	public <R,A> R visit(Response.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
