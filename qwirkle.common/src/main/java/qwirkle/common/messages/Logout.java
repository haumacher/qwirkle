package qwirkle.common.messages;

public class Logout extends ClientMessage {

	/**
	 * Creates a {@link Logout} instance.
	 */
	public static Logout create() {
		return new Logout();
	}

	/**
	 * Creates a {@link Logout} instance.
	 *
	 * @see #create()
	 */
	protected Logout() {
		super();
	}

	/** Reads a new instance from the given reader. */
	public static Logout readLogout(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		Logout result = new Logout();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "Logout";
	}

	@Override
	protected int typeId() {
		return 5;
	}

	/** Reads a new instance from the given reader. */
	public static Logout readLogout(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		Logout result = new Logout();
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
