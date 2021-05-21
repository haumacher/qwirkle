package qwirkle.common.messages;

/**
 * Base class for messages issued by the server and sent to the client.
 */
public abstract class ServerMessage extends de.haumacher.msgbuf.data.AbstractDataObject {

	/** Visitor interface for the {@link ServerMessage} hierarchy.*/
	public interface Visitor<R,A> extends Response.Visitor<R,A> {

		/** Visit case for {@link OpenGames}.*/
		R visit(OpenGames self, A arg);

		/** Visit case for {@link GameOpened}.*/
		R visit(GameOpened self, A arg);

		/** Visit case for {@link GameClosed}.*/
		R visit(GameClosed self, A arg);

		/** Visit case for {@link UserJoined}.*/
		R visit(UserJoined self, A arg);

		/** Visit case for {@link UserLeft}.*/
		R visit(UserLeft self, A arg);

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
			case "OpenGames": result = OpenGames.readOpenGames(in); break;
			case "GameOpened": result = GameOpened.readGameOpened(in); break;
			case "GameClosed": result = GameClosed.readGameClosed(in); break;
			case "UserJoined": result = UserJoined.readUserJoined(in); break;
			case "UserLeft": result = UserLeft.readUserLeft(in); break;
			case "CreateGameResult": result = CreateGameResult.readCreateGameResult(in); break;
			case "ServerError": result = ServerError.readServerError(in); break;
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
