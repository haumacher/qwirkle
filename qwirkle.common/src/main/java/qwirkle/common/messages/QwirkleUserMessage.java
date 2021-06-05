package qwirkle.common.messages;

public abstract class QwirkleUserMessage extends de.haumacher.msgbuf.data.AbstractDataObject {

	/** Visitor interface for the {@link QwirkleUserMessage} hierarchy.*/
	public interface Visitor<R,A> {

		/** Visit case for {@link MakeTurn}.*/
		R visit(MakeTurn self, A arg);

	}

	/**
	 * Creates a {@link QwirkleUserMessage} instance.
	 */
	protected QwirkleUserMessage() {
		super();
	}

	private String _userId = "";

	public final String getUserId() {
		return _userId;
	}

	/**
	 * @see #getUserId()
	 */
	public final QwirkleUserMessage setUserId(String value) {
		_userId = value;
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static QwirkleUserMessage readQwirkleUserMessage(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		QwirkleUserMessage result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			case "MakeTurn": result = MakeTurn.readMakeTurn(in); break;
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
			case "userId": return getUserId();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "userId": setUserId((String) value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("userId");
		out.value(getUserId());
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "userId": setUserId(in.nextString()); break;
			default: super.readField(in, field);
		}
	}

	/** Accepts the given visitor. */
	public abstract <R,A> R visit(Visitor<R,A> v, A arg);


}
