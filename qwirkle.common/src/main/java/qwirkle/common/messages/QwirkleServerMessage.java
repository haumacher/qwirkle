package qwirkle.common.messages;

/**
 * Common base-class for message details sent by the Qwirkle server-logic.
 *
 * @see GameUpdate#getDetail()
 */
public abstract class QwirkleServerMessage extends de.haumacher.msgbuf.data.AbstractDataObject implements de.haumacher.msgbuf.binary.BinaryDataObject {

	/** Visitor interface for the {@link QwirkleServerMessage} hierarchy.*/
	public interface Visitor<R,A> {

		/** Visit case for {@link FillInventory}.*/
		R visit(FillInventory self, A arg);

		/** Visit case for {@link StartTurn}.*/
		R visit(StartTurn self, A arg);

		/** Visit case for {@link NotifyTurn}.*/
		R visit(NotifyTurn self, A arg);

	}

	/**
	 * Creates a {@link QwirkleServerMessage} instance.
	 */
	protected QwirkleServerMessage() {
		super();
	}

	/** Reads a new instance from the given reader. */
	public static QwirkleServerMessage readQwirkleServerMessage(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		QwirkleServerMessage result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			case "FillInventory": result = FillInventory.readFillInventory(in); break;
			case "StartTurn": result = StartTurn.readStartTurn(in); break;
			case "NotifyTurn": result = NotifyTurn.readNotifyTurn(in); break;
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
	public final void writeTo(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		out.beginObject();
		out.name(0);
		out.value(typeId());
		writeFields(out);
		out.endObject();
	}

	/** The binary identifier for this concrete type in the polymorphic {@link QwirkleServerMessage} hierarchy. */
	protected abstract int typeId();

	/**
	 * Serializes all fields of this instance to the given binary output.
	 *
	 * @param out
	 *        The binary output to write to.
	 * @throws java.io.IOException If writing fails.
	 */
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		// No fields to write, hook for subclasses.
	}

	/** Consumes the value for the field with the given ID and assigns its value. */
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			default: in.skipValue(); 
		}
	}

	/** Reads a new instance from the given reader. */
	public static QwirkleServerMessage readQwirkleServerMessage(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		QwirkleServerMessage result;
		int typeField = in.nextName();
		assert typeField == 0;
		int type = in.nextInt();
		switch (type) {
			case 1: result = FillInventory.create(); break;
			case 2: result = StartTurn.create(); break;
			case 3: result = NotifyTurn.create(); break;
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
