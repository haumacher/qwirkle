package qwirkle.common.messages;

public class CreateGameResult extends Response {

	/**
	 * Creates a {@link CreateGameResult} instance.
	 */
	public static CreateGameResult createGameResult() {
		return new CreateGameResult();
	}

	/**
	 * Creates a {@link CreateGameResult} instance.
	 *
	 * @see #createGameResult()
	 */
	protected CreateGameResult() {
		super();
	}

	private GameInfo _game = null;

	public final GameInfo getGame() {
		return _game;
	}

	/**
	 * @see #getGame()
	 */
	public final CreateGameResult setGame(GameInfo value) {
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
	public static CreateGameResult readCreateGameResult(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		CreateGameResult result = new CreateGameResult();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "CreateGameResult";
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
	public <R,A> R visit(Response.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
