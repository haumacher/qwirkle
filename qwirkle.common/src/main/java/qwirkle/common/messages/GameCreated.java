package qwirkle.common.messages;

/**
 * Informs about successfully creating a game.
 */
public class GameCreated extends CreateGameResponse {

	/**
	 * Creates a {@link GameCreated} instance.
	 */
	public static GameCreated gameCreated() {
		return new GameCreated();
	}

	/**
	 * Creates a {@link GameCreated} instance.
	 *
	 * @see #gameCreated()
	 */
	protected GameCreated() {
		super();
	}

	private GameInfo _game = null;

	/**
	 * Info about the newly created game.
	 *
	 * <p>
	 * The user that requested creating the new game is the first {@link GameInfo#getUsers() user}.
	 * </p>
	 */
	public final GameInfo getGame() {
		return _game;
	}

	/**
	 * @see #getGame()
	 */
	public final GameCreated setGame(GameInfo value) {
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
	public static GameCreated readGameCreated(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		GameCreated result = new GameCreated();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "GameCreated";
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
	public <R,A> R visit(CreateGameResponse.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
