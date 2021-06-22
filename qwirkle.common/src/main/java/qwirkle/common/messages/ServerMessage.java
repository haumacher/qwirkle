package qwirkle.common.messages;

/**
 * Base class for messages issued by the server and sent to the client.
 */
public abstract class ServerMessage extends de.haumacher.msgbuf.data.AbstractDataObject implements de.haumacher.msgbuf.binary.BinaryDataObject {

	/** Visitor interface for the {@link ServerMessage} hierarchy.*/
	public interface Visitor<R,A> extends Response.Visitor<R,A> {

		/** Visit case for {@link GameOpened}.*/
		R visit(GameOpened self, A arg);

		/** Visit case for {@link GameClosed}.*/
		R visit(GameClosed self, A arg);

		/** Visit case for {@link GameUpdated}.*/
		R visit(GameUpdated self, A arg);

		/** Visit case for {@link GameStarted}.*/
		R visit(GameStarted self, A arg);

		/** Visit case for {@link GameUpdate}.*/
		R visit(GameUpdate self, A arg);

	}

	/**
	 * Creates a {@link ServerMessage} instance.
	 */
	protected ServerMessage() {
		super();
	}

	/** Reads a new instance from the given reader. */
	public static ServerMessage readServerMessage(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		ServerMessage result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			case "GameOpened": result = GameOpened.readGameOpened(in); break;
			case "GameClosed": result = GameClosed.readGameClosed(in); break;
			case "GameUpdated": result = GameUpdated.readGameUpdated(in); break;
			case "GameStarted": result = GameStarted.readGameStarted(in); break;
			case "GameUpdate": result = GameUpdate.readGameUpdate(in); break;
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
	public final void writeTo(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		out.beginArray();
		out.value(jsonType());
		writeContent(out);
		out.endArray();
	}

	/** The type identifier for this concrete subtype. */
	protected abstract String jsonType();

	@Override
	public final void writeTo(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		out.beginObject();
		out.name(0);
		out.value(typeId());
		writeFields(out);
		out.endObject();
	}

	/** The binary identifier for this concrete type in the polymorphic {@link ServerMessage} hierarchy. */
	protected abstract int typeId();

	/**
	 * Serializes all fields of this instance to the given binary output.
	 *
	 * @param out
	 *        The binary output to write to.
	 * @throws java.io.IOException If writing fails.
	 */
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		// No fields to write, hook for subclasses.
	}

	/** Consumes the value for the field with the given ID and assigns its value. */
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			default: in.skipValue(); 
		}
	}

	/** Reads a new instance from the given reader. */
	public static ServerMessage readServerMessage(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		ServerMessage result;
		int typeField = in.nextName();
		assert typeField == 0;
		int type = in.nextInt();
		switch (type) {
			case 9: result = GameOpened.create(); break;
			case 10: result = GameClosed.create(); break;
			case 11: result = GameUpdated.create(); break;
			case 12: result = GameStarted.create(); break;
			case 13: result = GameUpdate.create(); break;
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


}
