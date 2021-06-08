package qwirkle.common.messages;

public class GameAction extends ClientMessage {

	/**
	 * Creates a {@link GameAction} instance.
	 */
	public static GameAction create() {
		return new GameAction();
	}

	/**
	 * Creates a {@link GameAction} instance.
	 *
	 * @see #create()
	 */
	protected GameAction() {
		super();
	}

	private String _gameId = "";

	private QwirkleUserMessage _detail = null;

	public final String getGameId() {
		return _gameId;
	}

	/**
	 * @see #getGameId()
	 */
	public final GameAction setGameId(String value) {
		_gameId = value;
		return this;
	}

	public final QwirkleUserMessage getDetail() {
		return _detail;
	}

	/**
	 * @see #getDetail()
	 */
	public final GameAction setDetail(QwirkleUserMessage value) {
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
	public static GameAction readGameAction(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		GameAction result = new GameAction();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "GameAction";
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
			case "detail": setDetail((QwirkleUserMessage) value); break;
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
			case "detail": setDetail(QwirkleUserMessage.readQwirkleUserMessage(in)); break;
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
		out.name(1);
		out.value(getGameId());
		if (hasDetail()) {
			out.name(2);
			getDetail().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 1: setGameId(in.nextString()); break;
			case 2: setDetail(QwirkleUserMessage.readQwirkleUserMessage(in)); break;
			default: super.readField(in, field);
		}
	}

	/** Reads a new instance from the given reader. */
	public static GameAction readGameAction(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		GameAction result = new GameAction();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	@Override
	public <R,A> R visit(ClientMessage.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
