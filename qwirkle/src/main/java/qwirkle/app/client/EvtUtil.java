/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client;

import elemental2.dom.EventListener;

/**
 * TODO
 */
public class EvtUtil {

	public static final Runnable NOTHING = () -> {/*Ignore.*/};

	public static EventListener toListener(Runnable runnable) {
		return evt -> runnable.run();
	}

}
