package qwirkle.common.messages;

public class GameClosed extends ServerMessage {

	/**
	 * Creates a {@link GameClosed} instance.
	 */
	public static GameClosed gameClosed() {
		return new GameClosed();
	}

	/**
	 * Creates a {@link GameClosed} instance.
	 *
	 * @see #gameClosed()
	 */
	protected GameClosed() {
		super();
	}

	private String _gameId = "";

	public final String getGameId() {
		return _gameId;
	}

	/**
	 * @see #getGameId()
	 */
	public final GameClosed setGameId(String value) {
		_gameId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static GameClosed readGameClosed(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		GameClosed result = new GameClosed();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "GameClosed";
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
	public <R,A> R visit(ServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
