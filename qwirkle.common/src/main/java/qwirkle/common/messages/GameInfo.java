package qwirkle.common.messages;

/**
 * Information exchanged for describing a game.
 */
public class GameInfo extends de.haumacher.msgbuf.data.AbstractDataObject implements de.haumacher.msgbuf.binary.BinaryDataObject {

	/**
	 * Creates a {@link GameInfo} instance.
	 */
	public static GameInfo create() {
		return new GameInfo();
	}

	/**
	 * Creates a {@link GameInfo} instance.
	 *
	 * @see #create()
	 */
	protected GameInfo() {
		super();
	}

	private String _gameId = "";

	private String _name = "";

	private final java.util.List<UserInfo> _players = new java.util.ArrayList<>();

	/**
	 * The technical ID of the game. It is assigned by the server when creating the game, see {@link GameCreated}.
	 */
	public final String getGameId() {
		return _gameId;
	}

	/**
	 * @see #getGameId()
	 */
	public final GameInfo setGameId(String value) {
		_gameId = value;
		return this;
	}

	/**
	 * Name of the game assigned by the client creating the game, see {@link CreateGame#getName()}.
	 */
	public final String getName() {
		return _name;
	}

	/**
	 * @see #getName()
	 */
	public final GameInfo setName(String value) {
		_name = value;
		return this;
	}

	/**
	 * List of users currently assigned to this game.
	 *
	 * @see JoinGame
	 */
	public final java.util.List<UserInfo> getPlayers() {
		return _players;
	}

	/**
	 * @see #getPlayers()
	 */
	public final GameInfo setPlayers(java.util.List<UserInfo> value) {
		_players.clear();
		_players.addAll(value);
		return this;
	}

	/**
	 * Adds a value to the {@link #getPlayers()} list.
	 */
	public final GameInfo addPlayer(UserInfo value) {
		_players.add(value);
		return this;
	}

	/** Reads a new instance from the given reader. */
	public static GameInfo readGameInfo(de.haumacher.msgbuf.json.JsonReader in) throws java.io.IOException {
		GameInfo result = new GameInfo();
		in.beginObject();
		result.readFields(in);
		in.endObject();
		return result;
	}

	@Override
	public final void writeTo(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		writeContent(out);
	}

	@Override
	public Object get(String field) {
		switch (field) {
			case "gameId": return getGameId();
			case "name": return getName();
			case "players": return getPlayers();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "gameId": setGameId((String) value); break;
			case "name": setName((String) value); break;
			case "players": setPlayers((java.util.List<UserInfo>) value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("gameId");
		out.value(getGameId());
		out.name("name");
		out.value(getName());
		out.name("players");
		out.beginArray();
		for (UserInfo x : getPlayers()) {
			x.writeTo(out);
		}
		out.endArray();
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "gameId": setGameId(in.nextString()); break;
			case "name": setName(in.nextString()); break;
			case "players": {
				in.beginArray();
				while (in.hasNext()) {
					addPlayer(UserInfo.readUserInfo(in));
				}
				in.endArray();
			}
			break;
			default: super.readField(in, field);
		}
	}

	@Override
	public final void writeTo(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		out.beginObject();
		writeFields(out);
		out.endObject();
	}

	/** Serializes all fields of this instance to the given binary output. */
	protected void writeFields(de.haumacher.msgbuf.binary.DataWriter out) throws java.io.IOException {
		out.name(1);
		out.value(getGameId());
		out.name(2);
		out.value(getName());
		out.name(3);
		{
			java.util.List<UserInfo> values = getPlayers();
			out.beginArray(de.haumacher.msgbuf.binary.DataType.OBJECT, values.size());
			for (UserInfo x : values) {
				x.writeTo(out);
			}
			out.endArray();
		}
	}

	/** Consumes the value for the field with the given ID and assigns its value. */
	protected void readField(de.haumacher.msgbuf.binary.DataReader in, int field) throws java.io.IOException {
		switch (field) {
			case 1: setGameId(in.nextString()); break;
			case 2: setName(in.nextString()); break;
			case 3: {
				in.beginArray();
				while (in.hasNext()) {
					addPlayer(UserInfo.readUserInfo(in));
				}
				in.endArray();
			}
			break;
			default: in.skipValue(); 
		}
	}

	/** Reads a new instance from the given reader. */
	public static GameInfo readGameInfo(de.haumacher.msgbuf.binary.DataReader in) throws java.io.IOException {
		in.beginObject();
		GameInfo result = new GameInfo();
		while (in.hasNext()) {
			int field = in.nextName();
			result.readField(in, field);
		}
		in.endObject();
		return result;
	}

}
