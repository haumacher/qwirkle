/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * TODO
 */
public class GameManager {
	
	private static ConcurrentMap<String, GameEndpoint> _games = new ConcurrentHashMap<>();

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
		
		List<UserEndpoint> remaining = game.removeUser(userId);
		if (remaining.isEmpty()) {
			_games.remove(gameId);
		}
	}

}
