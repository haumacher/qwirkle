package qwirkle.common.messages;

/**
 * {@link Request} creating a game.
 */
public class CreateGame extends Request {

	/**
	 * Creates a {@link CreateGame} instance.
	 */
	public static CreateGame createGame() {
		return new CreateGame();
	}

	/**
	 * Creates a {@link CreateGame} instance.
	 *
	 * @see #createGame()
	 */
	protected CreateGame() {
		super();
	}

	private String _name = "";

	/**
	 * The name of the game as show to potential players.
	 */
	public final String getName() {
		return _name;
	}

	/**
	 * @see #getName()
	 */
	public final CreateGame setName(String value) {
		_name = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static CreateGame readCreateGame(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		CreateGame result = new CreateGame();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "CreateGame";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "name": return getName();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "name": setName((String) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("name");
		out.value(getName());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "name": setName(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(Request.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
