package qwirkle.common.messages;

/**
 * Common base-class for message details sent by a Qwirkle player during a game.
 */
public abstract class QwirkleUserMessage extends de.haumacher.msgbuf.data.AbstractDataObject implements de.haumacher.msgbuf.binary.BinaryDataObject {

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

	/**
	 * The user ID of the player that sent the message.
	 */
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

	@Override
	public final void writeTo(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		out.beginObject();
		out.name(0);
		out.value(typeId());
		writeFields(out);
		out.endObject();
	}

	/** The binary identifier for this concrete type in the polymorphic {@link QwirkleUserMessage} hierarchy. */
	protected abstract int typeId();

	/** Serializes all fields of this instance to the given binary output. */
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		out.name(1);
		out.value(getUserId());
	}

	/** Consumes the value for the field with the given ID and assigns its value. */
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 1: setUserId(in.nextString()); break;
			default: in.skipValue(); 
		}
	}

	/** Reads a new instance from the given reader. */
	public static QwirkleUserMessage readQwirkleUserMessage(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		QwirkleUserMessage result;
		int typeField = in.nextName();
		assert typeField == 0;
		int type = in.nextInt();
		switch (type) {
			case 1: result = MakeTurn.create(); break;
			default: while (in.hasNext()) {in.skipValue(); } in.endObject(); return null;
		}
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	/** Accepts the given visitor. */
	public abstract <R,A> R visit(Visitor<R,A> v, A arg);


}
