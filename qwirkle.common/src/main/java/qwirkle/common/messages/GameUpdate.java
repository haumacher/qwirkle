package qwirkle.common.messages;

public class GameUpdate extends ServerMessage {

	/**
	 * Creates a {@link GameUpdate} instance.
	 */
	public static GameUpdate gameUpdate() {
		return new GameUpdate();
	}

	/**
	 * Creates a {@link GameUpdate} instance.
	 *
	 * @see #gameUpdate()
	 */
	protected GameUpdate() {
		super();
	}

	private String _gameId = "";

	private QwirkleServerMessage _detail = null;

	public final String getGameId() {
		return _gameId;
	}

	/**
	 * @see #getGameId()
	 */
	public final GameUpdate setGameId(String value) {
		_gameId = value;
		return this;
	}

	public final QwirkleServerMessage getDetail() {
		return _detail;
	}

	/**
	 * @see #getDetail()
	 */
	public final GameUpdate setDetail(QwirkleServerMessage value) {
		_detail = value;
		return this;
	}

	/**
	 * Checks, whether {@link #getDetail()} has a value.
	 */
	public final boolean hasDetail() {
		return _detail != null;
	}

	/** Reads a new instance from the given reader. */
	public static GameUpdate readGameUpdate(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		GameUpdate result = new GameUpdate();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "GameUpdate";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "gameId": return getGameId();
			case "detail": return getDetail();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "gameId": setGameId((String) value); break;
			case "detail": setDetail((QwirkleServerMessage) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("gameId");
		out.value(getGameId());
		if (hasDetail()) {
			out.name("detail");
			getDetail().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "gameId": setGameId(in.nextString()); break;
			case "detail": setDetail(QwirkleServerMessage.readQwirkleServerMessage(in)); break;
			default: super.readField(in, field);
		}
	}

	@Override
	public <R,A> R visit(ServerMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}