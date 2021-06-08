package qwirkle.common.messages;

/**
 * Base class of messages sent in {@link Response} to a {@link JoinGame} message.
 */
public abstract class JoinGameResponse extends Response {

	/** Visitor interface for the {@link JoinGameResponse} hierarchy.*/
	public interface Visitor<R,A> {

		/** Visit case for {@link GameJoined}.*/
		R visit(GameJoined self, A arg);

		/** Visit case for {@link JoinFailed}.*/
		R visit(JoinFailed self, A arg);

	}

	/**
	 * Creates a {@link JoinGameResponse} instance.
	 */
	protected JoinGameResponse() {
		super();
	}

	/** Reads a new instance from the given reader. */
	public static JoinGameResponse readJoinGameResponse(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		JoinGameResponse result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			case "GameJoined": result = GameJoined.readGameJoined(in); break;
			case "JoinFailed": result = JoinFailed.readJoinFailed(in); break;
			default: in.skipValue(); result = null; break;
		}
		in.endArray();
		return result;
	}

	/** Reads a new instance from the given reader. */
	public static JoinGameResponse readJoinGameResponse(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		JoinGameResponse result;
		int typeField = in.nextName();
		assert typeField == 0;
		int type = in.nextInt();
		switch (type) {
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
	public final <R,A> R visit(Response.Visitor<R,A> v, A arg) {
		return visit((Visitor<R,A>) v, arg);
	}

}
