package qwirkle.common.messages;

/**
 * Information exchanged for describing a game.
 */
public class GameInfo extends de.haumacher.msgbuf.data.AbstractDataObject {

	/**
	 * Creates a {@link GameInfo} instance.
	 */
	public static GameInfo gameInfo() {
		return new GameInfo();
	}

	/**
	 * Creates a {@link GameInfo} instance.
	 *
	 * @see #gameInfo()
	 */
	protected GameInfo() {
		super();
	}

	private String _gameId = "";

	private String _name = "";

	private final java.util.List<UserInfo> _users = new java.util.ArrayList<>();

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
	public final java.util.List<UserInfo> getUsers() {
		return _users;
	}

	/**
	 * @see #getUsers()
	 */
	public final GameInfo setUsers(java.util.List<UserInfo> value) {
		_users.clear();
		_users.addAll(value);
		return this;
	}

	/**
	 * Adds a value to the {@link #getUsers()} list.
	 */
	public final GameInfo addUser(UserInfo value) {
		_users.add(value);
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
			case "users": return getUsers();
			default: return super.get(field);
		}
	}

	@Override
	public void set(String field, Object value) {
		switch (field) {
			case "gameId": setGameId((String) value); break;
			case "name": setName((String) value); break;
			case "users": setUsers((java.util.List<UserInfo>) value); break;
		}
	}

	@Override
	protected void writeFields(de.haumacher.msgbuf.json.JsonWriter out) throws java.io.IOException {
		super.writeFields(out);
		out.name("gameId");
		out.value(getGameId());
		out.name("name");
		out.value(getName());
		out.name("users");
		out.beginArray();
		for (UserInfo x : getUsers()) {
			x.writeTo(out);
		}
		out.endArray();
	}

	@Override
	protected void readField(de.haumacher.msgbuf.json.JsonReader in, String field) throws java.io.IOException {
		switch (field) {
			case "gameId": setGameId(in.nextString()); break;
			case "name": setName(in.nextString()); break;
			case "users": {
				in.beginArray();
				while (in.hasNext()) {
					addUser(UserInfo.readUserInfo(in));
				}
				in.endArray();
			}
			break;
			default: super.readField(in, field);
		}
	}

}
