package qwirkle.common.messages;

/**
 * Base class of possible {@link Response} messages to {@link Login}.
 */
public abstract class LoginResponse extends Response {

	/** Visitor interface for the {@link LoginResponse} hierarchy.*/
	public interface Visitor<R,A> {

		/** Visit case for {@link LoginSuccess}.*/
		R visit(LoginSuccess self, A arg);

		/** Visit case for {@link LoginFailed}.*/
		R visit(LoginFailed self, A arg);

	}

	/**
	 * Creates a {@link LoginResponse} instance.
	 */
	protected LoginResponse() {
		super();
	}

	/** Reads a new instance from the given reader. */
	public static LoginResponse readLoginResponse(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		LoginResponse result;
		in.beginArray();
		String type = in.nextString();
		switch (type) {
			case "LoginSuccess": result = LoginSuccess.readLoginSuccess(in); break;
			case "LoginFailed": result = LoginFailed.readLoginFailed(in); break;
			default: in.skipValue(); result = null; break;
		}
		in.endArray();
		return result;
	}

	/** Reads a new instance from the given reader. */
	public static LoginResponse readLoginResponse(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		LoginResponse result;
		int typeField = in.nextName();
		assert typeField == 0;
		int type = in.nextInt();
		switch (type) {
			case 4: result = LoginSuccess.create(); break;
			case 5: result = LoginFailed.create(); break;
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


	@Override
	public final <R,A> R visit(Response.Visitor<R,A> v, A arg) {
		return visit((Visitor<R,A>) v, arg);
	}

}
