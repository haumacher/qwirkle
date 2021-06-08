package qwirkle.common.messages;

/**
 * Base class for {@link ClientMessage}s that are directly answered by the server with a {@link Response}.
 *
 * @see #getMsgId()
 */
public abstract class Request extends ClientMessage {

	/** Visitor interface for the {@link Request} hierarchy.*/
	public interface Visitor<R,A> {

		/** Visit case for {@link CreateGame}.*/
		R visit(CreateGame self, A arg);

		/** Visit case for {@link Login}.*/
		R visit(Login self, A arg);

		/** Visit case for {@link FindOpenGames}.*/
		R visit(FindOpenGames self, A arg);

		/** Visit case for {@link JoinGame}.*/
		R visit(JoinGame self, A arg);

	}

	/**
	 * Creates a {@link Request} instance.
	 */
	protected Request() {
		super();
	}

	private String _msgId = "";

	/**
	 * Identifier for this request/response communication.
	 *
	 * <p>
	 * The identifier is produced by the client. The server flags its {@link Response} with the same value in {@link Response#getMsgId()}.
	 * </p>
	 */
	public final String getMsgId() {
		return _msgId;
	}

	/**
	 * @see #getMsgId()
	 */
	public final Request setMsgId(String value) {
		_msgId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static Request readRequest(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		Request result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			case "CreateGame": result = CreateGame.readCreateGame(in); break;
			case "Login": result = Login.readLogin(in); break;
			case "FindOpenGames": result = FindOpenGames.readFindOpenGames(in); break;
			case "JoinGame": result = JoinGame.readJoinGame(in); break;
			default: in.skipValue(); result = null; break;
		}
		in.endArray();
		return result;
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

	@Override
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name(1);
		out.value(getMsgId());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 1: setMsgId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	/** Reads a new instance from the given reader. */
	public static Request readRequest(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		Request result;
		int typeField = in.nextName();
		assert typeField == 0;
		int type = in.nextInt();
		switch (type) {
			case 1: result = CreateGame.create(); break;
			case 2: result = Login.create(); break;
			case 3: result = FindOpenGames.create(); break;
			case 4: result = JoinGame.create(); break;
			default: while (in.hasNext()) {in.skipValue(); } in.endObject(); return null;
		}
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	/** Accepts the given visitor. */
	public abstract <R,A> R visit(Visitor<R,A> v, A arg);


	@Override
	public final <R,A> R visit(ClientMessage.Visitor<R,A> v, A arg) {
		return visit((Visitor<R,A>) v, arg);
	}

}
