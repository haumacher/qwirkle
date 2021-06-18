/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.values;

/**
 * Ein Beobachter des Wertes in einem {@link Value} container.
 */
public interface Observer<T> {
	
	void valueChanged(Value<T> sender, T oldValue, T newValue);

}
