package qwirkle.common.messages;

/**
 * Notifies about currently open games in {@link Response} to a {@link FindOpenGames} message.
 */
public class OpenGames extends Response {

	/**
	 * Creates a {@link OpenGames} instance.
	 */
	public static OpenGames openGames() {
		return new OpenGames();
	}

	/**
	 * Creates a {@link OpenGames} instance.
	 *
	 * @see #openGames()
	 */
	protected OpenGames() {
		super();
	}

	private final java.util.List<GameInfo> _games = new java.util.ArrayList<>();

	/**
	 * List of games that can be joined.
	 */
	public final java.util.List<GameInfo> getGames() {
		return _games;
	}

	/**
	 * @see #getGames()
	 */
	public final OpenGames setGames(java.util.List<GameInfo> value) {
		_games.clear();
		_games.addAll(value);
		return this;
	}

	/**
	 * Adds a value to the {@link #getGames()} list.
	 */
	public final OpenGames addGame(GameInfo value) {
		_games.add(value);
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static OpenGames readOpenGames(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		OpenGames result = new OpenGames();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "OpenGames";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "games": return getGames();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "games": setGames((java.util.List<GameInfo>) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("games");
		out.beginArray();
		for (GameInfo x : getGames()) {
			x.writeTo(out);
		}
		out.endArray();
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "games": {
				in.beginArray();
				while (in.hasNext()) {
					addGame(GameInfo.readGameInfo(in));
				}
				in.endArray();
			}
			break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(Response.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
