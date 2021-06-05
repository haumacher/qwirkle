package qwirkle.common.messages;

/**
 * Rejects creating a game. Sent in response to {@link CreateGame}.
 */
public class CreateGameFailed extends CreateGameResponse {

	/**
	 * Creates a {@link CreateGameFailed} instance.
	 */
	public static CreateGameFailed createGameFailed() {
		return new CreateGameFailed();
	}

	/**
	 * Creates a {@link CreateGameFailed} instance.
	 *
	 * @see #createGameFailed()
	 */
	protected CreateGameFailed() {
		super();
	}

	private String _message = "";

	/**
	 * Reason why the game could not be created by the server.
	 */
	public final String getMessage() {
		return _message;
	}

	/**
	 * @see #getMessage()
	 */
	public final CreateGameFailed setMessage(String value) {
		_message = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static CreateGameFailed readCreateGameFailed(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		CreateGameFailed result = new CreateGameFailed();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "CreateGameFailed";
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
	public <R,A> R visit(CreateGameResponse.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
