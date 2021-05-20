/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.util.UUID;

/**
 * TODO
 */
public class IDSource {

	/** 
	 * TODO
	 */
	public static String createId() {
		return UUID.randomUUID().toString();
	}

}
