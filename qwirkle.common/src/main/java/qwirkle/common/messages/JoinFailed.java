package qwirkle.common.messages;

/**
 * {@link Response} to {@link JoinGame} that rejects joining the game.
 *
 * <p>
 * Reasons why a join may be that the game has been started before the join request was received, or the game 
 * has been closed by its owner.
 * </p>
 */
public class JoinFailed extends JoinGameResponse {

	/**
	 * Reason why a game could not be joined.
	 */
	public enum Reason {

		/**
		 * The game with the given ID was not found on the server. This means that the game has been closed in the meantime.
		 */
		GAME_NOT_FOUND,

		/**
		 * You tried to enter a game while you are still part of another game.
		 */
		ALREADY_PART_OF_A_GAME,

		/**
		 * The game can no longer be joined, because it has been started before the join request was received.
		 */
		GAME_ALREADY_STARTED,

		;

		/** Writes this instance to the given output. */
		public final void writeTo(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
			out.value(name());
		}

		/** Reads a new instance from the given reader. */
		public static Reason readReason(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
			return valueOf(in.nextString());
		}

		/** Writes this instance to the given binary output. */
		public final void writeTo(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
			switch (this) {
				case GAME_NOT_FOUND: out.value(0); break;
				case ALREADY_PART_OF_A_GAME: out.value(0); break;
				case GAME_ALREADY_STARTED: out.value(0); break;
				default: out.value(0);
			}
		}

		/** Reads a new instance from the given binary reader. */
		public static Reason readReason(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
			switch (in.nextInt()) {
				case 0: return GAME_NOT_FOUND;
				default: return GAME_NOT_FOUND;
			}
		}
	}

	/**
	 * Creates a {@link JoinFailed} instance.
	 */
	public static JoinFailed create() {
		return new JoinFailed();
	}

	/**
	 * Creates a {@link JoinFailed} instance.
	 *
	 * @see #create()
	 */
	protected JoinFailed() {
		super();
	}

	private Reason _reason = Reason.GAME_NOT_FOUND;

	/**
	 * Reason why joining the game has failed.
	 */
	public final Reason getReason() {
		return _reason;
	}

	/**
	 * @see #getReason()
	 */
	public final JoinFailed setReason(Reason value) {
		_reason = value;
		return this;
	}

	/**
	 * Checks, whether {@link #getReason()} has a value.
	 */
	public final boolean hasReason() {
		return _reason != null;
	}

	/** Reads a new instance from the given reader. */
	public static JoinFailed readJoinFailed(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		JoinFailed result = new JoinFailed();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	protected String jsonType() {
		return "JoinFailed";
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "reason": return getReason();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "reason": setReason((Reason) value); break;
			default: super.set(field, value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		if (hasReason()) {
			out.name("reason");
			getReason().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "reason": setReason(Reason.readReason(in)); break;
			default: super.readField(in, field);
		}
	}

	@Override
	protected int typeId() {
		return 8;
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		super.writeFields(out);
		if (hasReason()) {
			out.name(2);
			getReason().writeTo(out);
		}
	}

	@Override
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 2: setReason(Reason.readReason(in)); break;
			default: super.readField(in, field);
		}
	}

	/** Reads a new instance from the given reader. */
	public static JoinFailed readJoinFailed(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		JoinFailed result = new JoinFailed();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

	@Override
	public <R,A> R visit(JoinGameResponse.Visitor<R,A> v, A arg) {
		return v.visit(this, arg);
	}

}
