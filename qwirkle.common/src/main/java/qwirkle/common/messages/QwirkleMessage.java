package qwirkle.common.messages;

public abstract class QwirkleMessage extends de.haumacher.msgbuf.data.AbstractDataObject {

	/** Visitor interface for the {@link QwirkleMessage} hierarchy.*/
	public interface Visitor<R,A> {

	}

	/**
	 * Creates a {@link QwirkleMessage} instance.
	 */
	protected QwirkleMessage() {
		super();
	}

	private String _gameId = "";

	public final String getGameId() {
		return _gameId;
	}

	/**
	 * @see #getGameId()
	 */
	public final QwirkleMessage setGameId(String value) {
		_gameId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static QwirkleMessage readQwirkleMessage(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		QwirkleMessage result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			default: in.skipValue(); result = null; break;
		}
		in.endArray();
		return result;
	}

	@Override
	public final void writeTo(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		out.beginArray();
		out.value(jsonType());
		writeContent(out);
		out.endArray();
	}

	/** The type identifier for this concrete subtype. */
	protected abstract String jsonType();

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

	/** Accepts the given visitor. */
	public abstract <R,A> R visit(Visitor<R,A> v, A arg);


}
