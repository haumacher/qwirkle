package qwirkle.common.messages;

/**
 * Notifies that a game has started. 
 *
 * <p>
 * This message is sent to all players that have {@link JoinGame joined} this game before. All other
 * users {@link FindOpenGames searching for an open game} receive the {@link GameClosed} message instead.
 * </p>
 */
public class GameStarted extends ServerMessage {

	/**
	 * Creates a {@link GameStarted} instance.
	 */
	public static GameStarted gameStarted() {
		return new GameStarted();
	}

	/**
	 * Creates a {@link GameStarted} instance.
	 *
	 * @see #gameStarted()
	 */
	protected GameStarted() {
		super();
	}

	private GameInfo _game = null;

	/**
	 * Updated information containing the final list of players of the game that has been started.
	 */
	public final GameInfo getGame() {
		return _game;
	}

	/**
	 * @see #getGame()
	 */
	public final GameStarted setGame(GameInfo value) {
		_game = value;
		return this;
	}

	/**
	 * Checks, whether {@link #getGame()} has a value.
	 */
	public final boolean hasGame() {
		return _game != null;
	}

	/** Reads a new instance from the given reader. */
	public static GameStarted readGameStarted(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		GameStarted result = new GameStarted();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "GameStarted";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "game": return getGame();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "game": setGame((GameInfo) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		if (hasGame()) {
			out.name("game");
			getGame().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "game": setGame(GameInfo.readGameInfo(in)); break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(ServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
