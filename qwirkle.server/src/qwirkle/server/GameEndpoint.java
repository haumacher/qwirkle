/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.UserJoined;
import qwirkle.common.messages.UserLeft;

/**
 * Endpoint for all communication that is specific to a certain game instance.
 */
public class GameEndpoint {

	private static final Logger LOG = Logger.getLogger(GameEndpoint.class.getName());

	private GameInfo _info;
	
	private final Map<String, UserEndpoint> _users = new HashMap<>();

	/** 
	 * Creates a {@link GameEndpoint}.
	 * @param name 
	 *
	 */
	public GameEndpoint(String name) {
		_info = GameInfo.gameInfo().setGameId(IDSource.createId()).setName(name);
	}
	
	/** 
	 * TODO
	 */
	public void addUser(UserEndpoint user) {
		String userId = user.getUserId();
		
		List<UserEndpoint> usersBefore;
		synchronized (_users) {
			usersBefore = copyUsers();
			_users.put(userId, user);
		}
		
		String gameId = getGameId();
		LOG.info("User '" + userId + "' joined game '" + gameId + "'.");

		UserEndpoint.broadCast(usersBefore, UserJoined.userJoined().setGameId(gameId).setUser(user.getUserInfo()));
	}

	private List<UserEndpoint> copyUsers() {
		ArrayList<UserEndpoint> usersBefore;
		usersBefore = new ArrayList<>(_users.values());
		return usersBefore;
	}

	/** 
	 * TODO
	 */
	public GameInfo getInfo() {
		return _info;
	}

	/** 
	 * TODO
	 * @return 
	 */
	public List<UserEndpoint> removeUser(String userId) {
		List<UserEndpoint> remainingUsers;
		synchronized (_users) {
			UserEndpoint removed = _users.remove(userId);
			remainingUsers = copyUsers();
			if (removed == null) {
				return remainingUsers;
			}
		}
		
		String gameId = getGameId();
		LOG.info("User '" + userId + "' left game '" + gameId + "'.");
		
		UserEndpoint.broadCast(remainingUsers, 
			UserLeft.userLeft().setGameId(gameId).setUserId(userId));
		
		return remainingUsers;
	}

	public String getGameId() {
		return getInfo().getGameId();
	}

	/** 
	 * TODO
	 */
	public Object getUserIds() {
		synchronized (_users) {
			return new HashSet<>(_users.keySet());
		}
	}

}
