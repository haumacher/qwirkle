/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import de.haumacher.msgbuf.io.StringR;
import de.haumacher.msgbuf.io.StringW;
import de.haumacher.msgbuf.json.JsonReader;
import de.haumacher.msgbuf.json.JsonWriter;
import elemental2.dom.DomGlobal;
import elemental2.dom.Location;
import elemental2.dom.WebSocket;
import qwirkle.common.messages.ClientMessage;
import qwirkle.common.messages.CreateGameFailed;
import qwirkle.common.messages.GameClosed;
import qwirkle.common.messages.GameCreated;
import qwirkle.common.messages.GameJoined;
import qwirkle.common.messages.GameOpened;
import qwirkle.common.messages.GameStarted;
import qwirkle.common.messages.GameUpdate;
import qwirkle.common.messages.GameUpdated;
import qwirkle.common.messages.JoinFailed;
import qwirkle.common.messages.LoginFailed;
import qwirkle.common.messages.LoginSuccess;
import qwirkle.common.messages.OpenGames;
import qwirkle.common.messages.QwirkleServerMessage;
import qwirkle.common.messages.Request;
import qwirkle.common.messages.Response;
import qwirkle.common.messages.ServerError;
import qwirkle.common.messages.ServerMessage;

/**
 * Kommunikationszentrale mit dem Server.
 */
public class Communication implements ServerMessage.Visitor<Void, Void> {

	private WebSocket _socket;
	
	private Runnable _onReady = EvtUtil.NOTHING;

	private int _nextId = 1;

	private HashMap<String, Consumer<? extends Response>> _handlers = new HashMap<>();
	
	private Map<Class<?>, Consumer<? extends ServerMessage>> _listeners = new HashMap<>();
	
	private Map<String, Consumer<QwirkleServerMessage>> _gameListeners = new HashMap<>();
	
	/** 
	 * Creates a {@link Communication}.
	 */
	protected Communication() {
		super();
	}
	
	/**
	 * Creates a {@link Communication}.
	 */
	public static Communication create() {
		return new Communication();
	}
	
	public Communication setOnReady(Runnable onReady) {
		_onReady = onReady;
		return this;
	}
	
	public Communication start() {
		Location location = DomGlobal.window.location;
		DomGlobal.console.info("Loaded from: " + location.protocol + "//" + location.host + location.pathname);
		String protocol = location.protocol.equals("http:") ? "ws:" : "wss:";
		String contextPath = location.pathname;
		int slashIdx = contextPath.lastIndexOf('/');
		if (slashIdx >= 0) {
			contextPath = contextPath.substring(0, slashIdx);
		} else {
			contextPath = "";
		}
		String url = protocol + "//" + location.host + contextPath + "/talk";
		DomGlobal.console.info("Connecting to : " + url);
		_socket = new WebSocket(url);
		_socket.onopen = evt -> _onReady.run();
		
		_socket.onmessage = evt -> {
			try {
				String data = evt.data.asString();
				ServerMessage message = ServerMessage.readServerMessage(new JsonReader(new StringR(data)));
				message.visit(this, null);
			} catch (IOException ex) {
				DomGlobal.console.info("Parsing message failed.", ex);
			}
		};
		
		return this;
	}
	
	public Communication stop() {
		_socket.close();
		_socket = null;
		
		return this;
	}

	public void send(ClientMessage message) {
		try {
			StringW out = new StringW();
			message.writeTo(new JsonWriter(out));
			_socket.send(out.toString());
		} catch (IOException ex) {
			DomGlobal.console.info("Sending message failed.", ex);
		}
	}

	public <T extends Response> void send(Request message, Consumer<T> onResponse) {
		String msgId = initMessageId(message);
		_handlers.put(msgId, onResponse);
		send(message);
	}

	public String initMessageId(Request message) {
		String msgId = nextId();
		message.setMsgId(msgId);
		return msgId;
	}
	
	private String nextId() {
		return Integer.toString(_nextId++);
	}

	@Override
	public Void visit(ServerError self, Void arg) {
		return handle(self);
	}

	@Override
	public Void visit(OpenGames self, Void arg) {
		return handle(self);
	}

	@Override
	public Void visit(GameOpened self, Void arg) {
		return handle(self);
	}

	@Override
	public Void visit(GameClosed self, Void arg) {
		return handle(self);
	}
	
	@Override
	public Void visit(GameStarted self, Void arg) {
		return handle(self);
	}

	@Override
	public Void visit(GameUpdated self, Void arg) {
		return handle(self);
	}
	
	@Override
	public Void visit(GameJoined self, Void arg) {
		return handle(self);
	}
	
	@Override
	public Void visit(JoinFailed self, Void arg) {
		return handle(self);
	}
	
	@Override
	public Void visit(LoginSuccess self, Void arg) {
		return handle(self);
	}
	
	@Override
	public Void visit(LoginFailed self, Void arg) {
		return handle(self);
	}

	@Override
	public Void visit(GameCreated self, Void arg) {
		return handle(self);
	}
	
	@Override
	public Void visit(CreateGameFailed self, Void arg) {
		return handle(self);
	}
	
	@Override
	public Void visit(GameUpdate self, Void arg) {
		Consumer<? super QwirkleServerMessage> listener = _gameListeners.get(self.getGameId());
		if (listener != null) {
			listener.accept(self.getDetail());
		}
		return null;
	}

	private <T extends ServerMessage> Void handle(T self) {
		DomGlobal.console.info("Received: ", self);
		
		@SuppressWarnings("unchecked")
		Consumer<T> consumer = (Consumer<T>) _listeners.get(self.getClass());
		if (consumer != null) {
			consumer.accept(self);
		}
		
		return null;
	}

	private Void handle(Response response) {
		@SuppressWarnings("unchecked")
		Consumer<? super Response> handler = (Consumer<? super Response>) _handlers.remove(response.getMsgId());
		if (handler != null) {
			handler.accept(response);
		}
		return null;
	}
	
	public Registration addGameListener(String gameId, Consumer<QwirkleServerMessage> listener) {
		_gameListeners.put(gameId, listener);
		return () -> removeGameListener(gameId, listener);
	}
	
	public boolean removeGameListener(String gameId, Consumer<QwirkleServerMessage> listener) {
		if (_gameListeners.get(gameId) != listener) {
			return false;
		}
		
		_gameListeners.remove(gameId);
		return true;
	}

	/** 
	 * TODO
	 */
	public <T extends ServerMessage> Registration addListener(Class<T> type, Consumer<T> listener) {
		_listeners.put(type, listener);
		return () -> removeListener(type, listener);
	}
	
	public <T extends ServerMessage> boolean removeListener(Class<T> type, Consumer<T> listener) {
		if (_listeners.get(type) != listener) {
			return false;
		}
		
		_listeners.remove(type);
		return true;
	}

}
