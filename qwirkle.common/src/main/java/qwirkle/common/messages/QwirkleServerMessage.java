package qwirkle.common.messages;

public abstract class QwirkleServerMessage extends de.haumacher.msgbuf.data.AbstractDataObject {

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

	/** Accepts the given visitor. */
	public abstract <R,A> R visit(Visitor<R,A> v, A arg);


}
