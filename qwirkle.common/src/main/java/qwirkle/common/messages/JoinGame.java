package qwirkle.common.messages;

/**
 * {@link Request} joining an open game.
 *
 * @see GameJoined
 */
public class JoinGame extends Request {

	/**
	 * Creates a {@link JoinGame} instance.
	 */
	public static JoinGame joinGame() {
		return new JoinGame();
	}

	/**
	 * Creates a {@link JoinGame} instance.
	 *
	 * @see #joinGame()
	 */
	protected JoinGame() {
		super();
	}

	private String _gameId = "";

	/**
	 * ID of the game to join.
	 *
	 * <p>
	 * To successfully join a game, the game must not have been started before. 
	 * </p>
	 *
	 * @see GameInfo#getGameId()
	 */
	public final String getGameId() {
		return _gameId;
	}

	/**
	 * @see #getGameId()
	 */
	public final JoinGame setGameId(String value) {
		_gameId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static JoinGame readJoinGame(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		JoinGame result = new JoinGame();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "JoinGame";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "gameId": return getGameId();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "gameId": setGameId((String) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("gameId");
		out.value(getGameId());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "gameId": setGameId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(Request.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
