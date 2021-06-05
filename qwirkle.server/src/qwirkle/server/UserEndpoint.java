/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.io.IOError;
import java.io.IOException;
import java.io.Reader;
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
import qwirkle.common.messages.FindOpenGames;
import qwirkle.common.messages.GameAction;
import qwirkle.common.messages.GameCreated;
import qwirkle.common.messages.GameJoined;
import qwirkle.common.messages.GameOpened;
import qwirkle.common.messages.JoinFailed;
import qwirkle.common.messages.JoinGame;
import qwirkle.common.messages.Login;
import qwirkle.common.messages.LoginSuccess;
import qwirkle.common.messages.Logout;
import qwirkle.common.messages.OpenGames;
import qwirkle.common.messages.QwirkleUserMessage;
import qwirkle.common.messages.Request;
import qwirkle.common.messages.Response;
import qwirkle.common.messages.ServerError;
import qwirkle.common.messages.ServerMessage;
import qwirkle.common.messages.StartGame;
import qwirkle.common.messages.UserInfo;

/**
 * Websocket {@link Endpoint} processing communication with one participating user.
 */
public class UserEndpoint extends Endpoint implements MessageHandler.Whole<Reader>, ClientMessage.Visitor<Void, Void> {

	private static final Logger LOG = Logger.getLogger(UserEndpoint.class.getName());
	
	private UserInfo _user;
	private Session _session;
	private volatile GameEndpoint _game;
	
	private UserState _state = UserState.IDLE;

	@Override
	public void onOpen(Session session, EndpointConfig config) {
		_session = session;
		_session.addMessageHandler(this);
	}
	
	@Override
	public void onClose(Session session, CloseReason closeReason) {
		leaveGame();
		
		String userId;
		if (_user != null) {
			userId = _user.getUserId();
			UserManager.removeUser(userId);
		} else {
			userId = "unknown";
		}

		log(Level.INFO, "Session closed.");
	}

	@Override
	public void onMessage(Reader data) {
		JsonReader json = new JsonReader(new ReaderAdapter(data));
		
		ClientMessage message;
		try {
			message = ClientMessage.readClientMessage(json);
			log(Level.INFO, "Message received: " + message);
		} catch (IOException ex) {
			log(Level.WARNING, "Parsing message failed.", ex);
			return;
		}
		
		try {
			message.visit(this, null);
		} catch (Throwable ex) {
			log(Level.WARNING, "Message processing failed.", ex);
		}
	}
	
	@Override
	public Void visit(FindOpenGames self, Void arg) {
		_state = UserState.WAITING_FOR_GAME;
		sendResponse(self, OpenGames.openGames().setGames(GameManager.getOpenGames()));
		return null;
	}

	@Override
	public Void visit(CreateGame self, Void arg) {
		if (_game != null) {
			GameManager.leave(_game.getInfo().getGameId(), _user.getUserId());
		}
		
		_game = GameManager.createGame(self.getName());
		_game.addUser(this);
		
		log(Level.INFO, "Created game '" + _game.getGameId() + "'.");
		
		UserManager.broadCastToIdleUsers(GameOpened.gameOpened().setGame(_game.getInfo()));
		
		send(GameCreated.gameCreated().setGame(_game.getInfo()).setMsgId(self.getMsgId()));
		return null;
	}
	
	@Override
	public Void visit(JoinGame self, Void arg) {
		if (_game != null) {
			sendResponse(self, JoinFailed.joinFailed().setReason(JoinFailed.Reason.ALREADY_PART_OF_A_GAME));
			return null;
		}
		
		GameEndpoint game = GameManager.getGame(self.getGameId());
		if (game == null) {
			sendResponse(self, JoinFailed.joinFailed().setReason(JoinFailed.Reason.GAME_NOT_FOUND));
			return null;
		}
		
		if (!game.addUser(this)) {
			sendResponse(self, JoinFailed.joinFailed().setReason(JoinFailed.Reason.GAME_ALREADY_STARTED));
			return null;
		}
		
		_game = game;
		sendResponse(self, GameJoined.gameJoined().setGame(_game.getInfo()));
		return null;
	}
	
	@Override
	public Void visit(StartGame self, Void arg) {
		if (_game == null) {
			send(ServerError.serverError().setMessage("Not part of a game, cannot start the game."));
			return null;
		}
		
		if (!_game.getGameId().equals(self.getGameId())) {
			send(ServerError.serverError().setMessage("Not part of game '"  + self.getGameId() + "', cannot start this game."));
			return null;
		}
		
		if (_game.isStarted()) {
			return null;
		}
		
		_state = UserState.PLAYING;
		_game.start();
		return null;
	}

	@Override
	public Void visit(Login self, Void arg) {
		if (_user == null) {
			_user = UserInfo.userInfo().setName(self.getName()).setUserId(IDSource.createId());
		}
		
		log(Level.INFO, "Logged in.");

		UserManager.addUser(_user.getUserId(), this);
		
		sendResponse(self, LoginSuccess.loginSuccess().setUser(_user));
		return null;
	}

	/** 
	 * Schickt eine Antwort auf die gegebene Anfrage.
	 * 
	 * @param request Die Anfrage, auf die geantwortet werden soll.
	 * @param response Die Antwortnachricht.
	 */
	public void sendResponse(Request request, Response response) {
		send(response.setMsgId(request.getMsgId()));
	}

	@Override
	public Void visit(Logout self, Void arg) {
		if (_user != null) {
			leaveGame();

			log(Level.INFO, "Logged out.");
			
			UserManager.removeUser(_user.getUserId());
		}
		return null;
	}
	
	@Override
	public Void visit(GameAction self, Void arg) {
		GameEndpoint game = GameManager.getGame(self.getGameId());
		QwirkleUserMessage detail = self.getDetail();
		// Do not allow the user act as some other user.
		detail.setUserId(getUserId());
		game.handle(detail);
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
			GameManager.leave(_game, _user);
			_game = null;
		}
	}

	public void send(ServerMessage message) {
		send(serialize(message));
	}

	public void send(String data) {
		log(Level.INFO, "Sending message: " + data);
		try {
			_session.getBasicRemote().sendText(data);
		} catch (IOException ex) {
			log(Level.WARNING, "Response sending failed.", ex);
		} catch (Throwable ex) {
			log(Level.SEVERE, "Response sending crashed.", ex);
		}
	}

	private void log(Level level, String message) {
		log(level, message, null);
	}
	
	private void log(Level level, String message, Throwable ex) {
		String id = _user == null ? "unknown" : _user.getUserId();
		LOG.log(level, "User '" + id + "': " + message, ex);
	}

	public static void broadCast(Iterable<UserEndpoint> remainingUsers, ServerMessage message) {
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
	public boolean isWaitingForGame() {
		return _state == UserState.WAITING_FOR_GAME;
	}

}
