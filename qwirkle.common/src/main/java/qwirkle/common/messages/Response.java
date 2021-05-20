package qwirkle.common.messages;

public abstract class Response extends ServerMessage {

	/** Visitor interface for the {@link Response} hierarchy.*/
	public interface Visitor<R,A> {

		/** Visit case for {@link CreateGameResult}.*/
		R visit(CreateGameResult self, A arg);

		/** Visit case for {@link ServerError}.*/
		R visit(ServerError self, A arg);

	}

	/**
	 * Creates a {@link Response} instance.
	 */
	protected Response() {
		super();
	}

	private String _msgId = "";

	public final String getMsgId() {
		return _msgId;
	}

	/**
	 * @see #getMsgId()
	 */
	public final Response setMsgId(String value) {
		_msgId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static Response readResponse(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		Response result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			case "CreateGameResult": result = CreateGameResult.readCreateGameResult(in); break;
			case "ServerError": result = ServerError.readServerError(in); break;
			default: in.skipValue(); result = null; break;
		}
		in.endArray();
		return result;
	}

	@Override
	protected String jsonType() {
		return "Response";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "msgId": return getMsgId();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "msgId": setMsgId((String) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("msgId");
		out.value(getMsgId());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "msgId": setMsgId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	/** Accepts the given visitor. */
	public abstract <R,A> R visit(Visitor<R,A> v, A arg);


	@Override
	public final <R,A> R visit(ServerMessage.Visitor<R,A> v, A arg) {
		return visit((Visitor<R,A>) v, arg);
	}

}