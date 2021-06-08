package qwirkle.common.messages;

/**
 * Base class for all messages sent in response to {@link CreateGame}.
 */
public abstract class CreateGameResponse extends Response {

	/** Visitor interface for the {@link CreateGameResponse} hierarchy.*/
	public interface Visitor<R,A> {

		/** Visit case for {@link GameCreated}.*/
		R visit(GameCreated self, A arg);

		/** Visit case for {@link CreateGameFailed}.*/
		R visit(CreateGameFailed self, A arg);

	}

	/**
	 * Creates a {@link CreateGameResponse} instance.
	 */
	protected CreateGameResponse() {
		super();
	}

	/** Reads a new instance from the given reader. */
	public static CreateGameResponse readCreateGameResponse(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		CreateGameResponse result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			case "GameCreated": result = GameCreated.readGameCreated(in); break;
			case "CreateGameFailed": result = CreateGameFailed.readCreateGameFailed(in); break;
			default: in.skipValue(); result = null; break;
		}
		in.endArray();
		return result;
	}

	/** Reads a new instance from the given reader. */
	public static CreateGameResponse readCreateGameResponse(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		CreateGameResponse result;
		int typeField = in.nextName();
		assert typeField == 0;
		int type = in.nextInt();
		switch (type) {
			case 1: result = GameCreated.create(); break;
			case 2: result = CreateGameFailed.create(); break;
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
