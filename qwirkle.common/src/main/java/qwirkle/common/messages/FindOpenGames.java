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
	public static FindOpenGames findOpenGames() {
		return new FindOpenGames();
	}

	/**
	 * Creates a {@link FindOpenGames} instance.
	 *
	 * @see #findOpenGames()
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
	public <R,A> R visit(Request.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
