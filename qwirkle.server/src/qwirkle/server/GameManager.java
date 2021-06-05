/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.stream.Collectors;

import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.UserInfo;

/**
 * TODO
 */
public class GameManager {
	
	private static ConcurrentMap<String, GameEndpoint> _games = new ConcurrentHashMap<>();

	/**
	 * Das Spiel mit der gegebenen ID.
	 */
	public static GameEndpoint getGame(String gameId) {
		return _games.get(gameId);
	}

	/** 
	 * TODO
	 * @param name 
	 */
	public static GameEndpoint createGame(String name) {
		GameEndpoint game = new GameEndpoint(name);
		_games.put(game.getInfo().getGameId(), game);
		return game;
	}

	/** 
	 * TODO
	 */
	public static void leave(String gameId, String userId) {
		GameEndpoint game = _games.get(gameId);
		if (game == null) {
			return;
		}
		
		game.removeUser(userId);
	}

	public static List<GameInfo> getOpenGames() {
		return _games.values().stream()
			.filter(game -> !game.isStarted())
			.map(game -> game.getInfo())
			.sorted((g1, g2) -> g1.getName().compareTo(g2.getName()))
			.collect(Collectors.toList());
	}

	/** 
	 * Macht dasselbe wie {@link #leave(String, String)}, nur mit Objekten als Argumenten statt IDs. 
	 */
	public static void leave(GameEndpoint game, UserInfo user) {
		leave(game.getGameId(), user.getUserId());
	}

	/** 
	 * TODO
	 */
	public static void internalGameClosed(GameEndpoint game) {
		_games.remove(game.getGameId());
	}

}
