package qwirkle.common.messages;

/**
 * Base class for messages sent from the client to the server.
 */
public abstract class ClientMessage extends de.haumacher.msgbuf.data.AbstractDataObject {

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

	/** Accepts the given visitor. */
	public abstract <R,A> R visit(Visitor<R,A> v, A arg);


}
