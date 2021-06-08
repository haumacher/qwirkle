package qwirkle.common.messages;

/**
 * {@link ServerMessage} that is sent in direct response to a {@link Request} message.
 *
 * @see #getMsgId()
 */
public abstract class Response extends ServerMessage {

	/** Visitor interface for the {@link Response} hierarchy.*/
	public interface Visitor<R,A> extends CreateGameResponse.Visitor<R,A>, LoginResponse.Visitor<R,A>, JoinGameResponse.Visitor<R,A> {

		/** Visit case for {@link ServerError}.*/
		R visit(ServerError self, A arg);

		/** Visit case for {@link OpenGames}.*/
		R visit(OpenGames self, A arg);

	}

	/**
	 * Creates a {@link Response} instance.
	 */
	protected Response() {
		super();
	}

	private String _msgId = "";

	/**
	 * Value from {@link Request#getMsgId()} as provided by the client. This value can be used by the client to associate this response to the original {@link Request}.
	 */
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
			case "ServerError": result = ServerError.readServerError(in); break;
			case "OpenGames": result = OpenGames.readOpenGames(in); break;
			case "GameCreated": result = GameCreated.readGameCreated(in); break;
			case "CreateGameFailed": result = CreateGameFailed.readCreateGameFailed(in); break;
			case "LoginSuccess": result = LoginSuccess.readLoginSuccess(in); break;
			case "LoginFailed": result = LoginFailed.readLoginFailed(in); break;
			case "GameJoined": result = GameJoined.readGameJoined(in); break;
			case "JoinFailed": result = JoinFailed.readJoinFailed(in); break;
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
	public static Response readResponse(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		Response result;
		int typeField = in.nextName();
		assert typeField == 0;
		int type = in.nextInt();
		switch (type) {
			case 3: result = ServerError.create(); break;
			case 6: result = OpenGames.create(); break;
			case 1: result = GameCreated.create(); break;
			case 2: result = CreateGameFailed.create(); break;
			case 4: result = LoginSuccess.create(); break;
			case 5: result = LoginFailed.create(); break;
			case 7: result = GameJoined.create(); break;
			case 8: result = JoinFailed.create(); break;
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
	public final <R,A> R visit(ServerMessage.Visitor<R,A> v, A arg) {
		return visit((Visitor<R,A>) v, arg);
	}

}
