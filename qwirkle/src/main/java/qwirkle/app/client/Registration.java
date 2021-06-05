/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client;

/**
 * TODO
 */
public interface Registration {
	
	void cancel();

	/** 
	 * TODO
	 * @return 
	 */
	static Registration cancelRegistration(Registration self) {
		if (self != null) {
			self.cancel();
		}
		return null;
	}

}
