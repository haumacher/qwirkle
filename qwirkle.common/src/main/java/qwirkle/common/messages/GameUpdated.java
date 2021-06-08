package qwirkle.common.messages;

/**
 * Informs of a state change of an open game. 
 *
 * <p>
 * Normally this happens, if the number of players has changed, either if a new player has joined 
 * the game, or a player has again left the game. The message is sent to all users that have already
 * entered the game, and all users that have not yet entered a game but sent a {@link FindOpenGames} 
 * message.
 * </p>
 */
public class GameUpdated extends ServerMessage {

	/**
	 * Creates a {@link GameUpdated} instance.
	 */
	public static GameUpdated create() {
		return new GameUpdated();
	}

	/**
	 * Creates a {@link GameUpdated} instance.
	 *
	 * @see #create()
	 */
	protected GameUpdated() {
		super();
	}

	private GameInfo _game = null;

	/**
	 * New game information. This information replaces the last one published with the same {@link GameInfo#getGameId()}.
	 */
	public final GameInfo getGame() {
		return _game;
	}

	/**
	 * @see #getGame()
	 */
	public final GameUpdated setGame(GameInfo value) {
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
	public static GameUpdated readGameUpdated(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		GameUpdated result = new GameUpdated();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "GameUpdated";
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
	protected int typeId() {
		return 11;
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		super.writeFields(out);
		if (hasGame()) {
			out.name(1);
			getGame().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 1: setGame(GameInfo.readGameInfo(in)); break;
			default: super.readField(in, field);
		}
	}

	/** Reads a new instance from the given reader. */
	public static GameUpdated readGameUpdated(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		GameUpdated result = new GameUpdated();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	@Override
	public <R,A> R visit(ServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
