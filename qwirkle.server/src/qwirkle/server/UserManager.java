/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import qwirkle.common.messages.ServerMessage;

/**
 * TODO
 */
public class UserManager {
	
	private static final ConcurrentMap<String, UserEndpoint> _users = new ConcurrentHashMap<>();

	/** 
	 * TODO
	 */
	public static void addUser(String userId, UserEndpoint handler) {
		_users.put(userId, handler);
	}

	/** 
	 * TODO
	 */
	public static void removeUser(String userId) {
		_users.remove(userId);
	}

	/** 
	 * TODO
	 */
	public static void broadCastToIdleUsers(ServerMessage message) {
		String data = UserEndpoint.serialize(message);
		for (UserEndpoint user : _users.values()) {
			if (user.isWaitingForGame()) {
				user.send(data);
			}
		}
	}

}
