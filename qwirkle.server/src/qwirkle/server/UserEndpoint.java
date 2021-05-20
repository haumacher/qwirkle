/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.io.IOError;
import java.io.IOException;
import java.io.Reader;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.websocket.CloseReason;
import javax.websocket.Endpoint;
import javax.websocket.EndpointConfig;
import javax.websocket.MessageHandler;
import javax.websocket.Session;

import de.haumacher.msgbuf.io.StringW;
import de.haumacher.msgbuf.json.JsonReader;
import de.haumacher.msgbuf.json.JsonWriter;
import qwirkle.common.messages.ClientMessage;
import qwirkle.common.messages.CreateGame;
import qwirkle.common.messages.CreateGameResult;
import qwirkle.common.messages.GameOpened;
import qwirkle.common.messages.Login;
import qwirkle.common.messages.Logout;
import qwirkle.common.messages.ServerMessage;
import qwirkle.common.messages.UserInfo;

/**
 * Websocket {@link Endpoint} processing communication with one participating user.
 */
public class UserEndpoint extends Endpoint implements MessageHandler.Whole<Reader>, ClientMessage.Visitor<Void, Void> {

	private static final Logger LOG = Logger.getLogger(UserEndpoint.class.getName());
	private UserInfo _user;
	private Session _session;
	private volatile GameEndpoint _game;

	@Override
	public void onOpen(Session session, EndpointConfig config) {
		_session = session;
		session.addMessageHandler(this);
	}
	
	@Override
	public void onClose(Session session, CloseReason closeReason) {
		leaveGame();
	}

	@Override
	public void onMessage(Reader data) {
		JsonReader json = new JsonReader(new ReaderAdapter(data));
		try {
			ClientMessage message = ClientMessage.readClientMessage(json);
			message.visit(this, null);
		} catch (IOException ex) {
			LOG.log(Level.WARNING, "Cannot parse message.", ex);
		}
		System.out.println("Message received.");
	}

	@Override
	public Void visit(CreateGame self, Void arg) {
		if (_game == null) {
			GameManager.leave(_game.getInfo().getGameId(), _user.getUserId());
		}
		
		_game = GameManager.createGame(self.getName());
		_game.addUser(this);
		
		LOG.info("User '" + getUserId() + "' created game '" + _game.getGameId() + "'.");
		
		UserManager.broadCastToIdleUsers(GameOpened.gameOpened().setGame(_game.getInfo()));
		
		send(CreateGameResult.createGameResult().setGame(_game.getInfo()).setMsgId(self.getMsgId()));
		return null;
	}

	@Override
	public Void visit(Login self, Void arg) {
		if (_user == null) {
			_user = UserInfo.userInfo().setName(self.getName()).setUserId(IDSource.createId());
		}
		
		LOG.info("User '" + getUserId() + "' logged in.");

		UserManager.addUser(_user.getUserId(), this);
		return null;
	}

	@Override
	public Void visit(Logout self, Void arg) {
		if (_user != null) {
			leaveGame();

			LOG.info("User '" + getUserId() + "' logged out.");
			
			UserManager.removeUser(_user.getUserId());
		}
		return null;
	}

	/** 
	 * TODO
	 */
	public String getUserId() {
		return getUserInfo().getUserId();
	}

	/** 
	 * TODO
	 */
	public UserInfo getUserInfo() {
		return _user;
	}

	private void leaveGame() {
		if (_game != null) {
			_game.removeUser(getUserId());
			_game = null;
		}
	}

	public void send(ServerMessage message) {
		send(serialize(message));
	}

	public void send(String data) {
		try {
			_session.getBasicRemote().sendText(data);
		} catch (IOException ex) {
			LOG.info("Response sending failed.");
		}
	}

	public static void broadCast(List<UserEndpoint> remainingUsers, ServerMessage message) {
		String data = serialize(message);
		for (UserEndpoint remaining : remainingUsers) {
			remaining.send(data);
		}
	}

	public static String serialize(ServerMessage message) {
		try {
			StringW writer = new StringW();
			JsonWriter json = new JsonWriter(writer);
			message.writeTo(json);
			String data = writer.toString();
			return data;
		} catch (IOException ex) {
			throw new IOError(ex);
		}
	}

	/** 
	 * Whether this user has joined some game.
	 */
	public boolean hasGame() {
		return _game != null;
	}

}
