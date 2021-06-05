package qwirkle.common.messages;

/**
 * Requests a game to start. 
 *
 * <p>
 * This message must only be sent by the {@link CreateGame owner of the game}. All players of 
 * the game receive a {@link GameStarted} message in response. All other users 
 * {@link FindOpenGames searching for an open game} receive a {@link GameClosed} message. 
 * </p>
 */
public class StartGame extends ClientMessage {

	/**
	 * Creates a {@link StartGame} instance.
	 */
	public static StartGame startGame() {
		return new StartGame();
	}

	/**
	 * Creates a {@link StartGame} instance.
	 *
	 * @see #startGame()
	 */
	protected StartGame() {
		super();
	}

	private String _gameId = "";

	/**
	 * The ID of the game to start.
	 *
	 * @see GameInfo#getGameId()
	 */
	public final String getGameId() {
		return _gameId;
	}

	/**
	 * @see #getGameId()
	 */
	public final StartGame setGameId(String value) {
		_gameId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static StartGame readStartGame(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		StartGame result = new StartGame();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "StartGame";
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
	public <R,A> R visit(ClientMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
