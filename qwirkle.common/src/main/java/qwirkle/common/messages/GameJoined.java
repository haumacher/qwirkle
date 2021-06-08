package qwirkle.common.messages;

/**
 * Successful {@link Response} to a {@link JoinGame} {@link link Request}.
 *
 * <p>
 * When this message is received, the game has not yet started. This is announced with a separate 
 * {@link GameStarted} message.
 * </p>
 */
public class GameJoined extends JoinGameResponse {

	/**
	 * Creates a {@link GameJoined} instance.
	 */
	public static GameJoined create() {
		return new GameJoined();
	}

	/**
	 * Creates a {@link GameJoined} instance.
	 *
	 * @see #create()
	 */
	protected GameJoined() {
		super();
	}

	private GameInfo _game = null;

	/**
	 * Updated information about the joined game.
	 */
	public final GameInfo getGame() {
		return _game;
	}

	/**
	 * @see #getGame()
	 */
	public final GameJoined setGame(GameInfo value) {
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
	public static GameJoined readGameJoined(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		GameJoined result = new GameJoined();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "GameJoined";
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
		return 7;
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		super.writeFields(out);
		if (hasGame()) {
			out.name(2);
			getGame().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 2: setGame(GameInfo.readGameInfo(in)); break;
			default: super.readField(in, field);
		}
	}

	/** Reads a new instance from the given reader. */
	public static GameJoined readGameJoined(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		GameJoined result = new GameJoined();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	@Override
	public <R,A> R visit(JoinGameResponse.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
