package qwirkle.common.messages;

/**
 * {@link Request} sending the list of games that can be {@link JoinGame joined}.
 *
 * <p>
 * This {@link Request} is answered by a {@link OpenGames} message, followed by a sequence 
 * of {@link GameOpened}, {@link GameClosed}, and {@link GameUpdated} messages.
 * </p>
 */
public class FindOpenGames extends Request {

	/**
	 * Creates a {@link FindOpenGames} instance.
	 */
	public static FindOpenGames create() {
		return new FindOpenGames();
	}

	/**
	 * Creates a {@link FindOpenGames} instance.
	 *
	 * @see #create()
	 */
	protected FindOpenGames() {
		super();
	}

	/** Reads a new instance from the given reader. */
	public static FindOpenGames readFindOpenGames(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		FindOpenGames result = new FindOpenGames();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "FindOpenGames";
	}

	@Override
	protected int typeId() {
		return 3;
	}

	/** Reads a new instance from the given reader. */
	public static FindOpenGames readFindOpenGames(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		FindOpenGames result = new FindOpenGames();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	@Override
	public <R,A> R visit(Request.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
