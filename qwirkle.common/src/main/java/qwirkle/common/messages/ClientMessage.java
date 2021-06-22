package qwirkle.common.messages;

/**
 * Base class for messages sent from the client to the server.
 */
public abstract class ClientMessage extends de.haumacher.msgbuf.data.AbstractDataObject implements de.haumacher.msgbuf.binary.BinaryDataObject {

	/** Visitor interface for the {@link ClientMessage} hierarchy.*/
	public interface Visitor<R,A> extends Request.Visitor<R,A> {

		/** Visit case for {@link Logout}.*/
		R visit(Logout self, A arg);

		/** Visit case for {@link StartGame}.*/
		R visit(StartGame self, A arg);

		/** Visit case for {@link GameAction}.*/
		R visit(GameAction self, A arg);

	}

	/**
	 * Creates a {@link ClientMessage} instance.
	 */
	protected ClientMessage() {
		super();
	}

	/** Reads a new instance from the given reader. */
	public static ClientMessage readClientMessage(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		ClientMessage result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			case "Logout": result = Logout.readLogout(in); break;
			case "StartGame": result = StartGame.readStartGame(in); break;
			case "GameAction": result = GameAction.readGameAction(in); break;
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

	/** The binary identifier for this concrete type in the polymorphic {@link ClientMessage} hierarchy. */
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
	public static ClientMessage readClientMessage(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		ClientMessage result;
		int typeField = in.nextName();
		assert typeField == 0;
		int type = in.nextInt();
		switch (type) {
			case 5: result = Logout.create(); break;
			case 6: result = StartGame.create(); break;
			case 7: result = GameAction.create(); break;
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


}
