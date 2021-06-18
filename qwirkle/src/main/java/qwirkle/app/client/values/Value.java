/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.values;

/**
 * Ein beobachtbarer Behälter für einen beliebigen Wert.
 * 
 * @param <T> Der Typ des Wertes, der in diesem Container gespeichert werden kann.
 */
public interface Value<T> {

	/**
	 * Holt den in diesem Container gespeicherten Wert.
	 */
	T get();

	/**
	 * Setzt den in diesem Container gespeicherten Wert auf einen neuen Wert.
	 * 
	 * @param newValue Der neue Wert.
	 * @return Der alte Wert.
	 */
	T set(T newValue);
	
	boolean addObserver(Observer<T> observer);
	
	boolean removeObserver(Observer<?> observer);

	/**
	 * Erzeugt einen neuen Container für einen beliebigen Wert.
	 */
	static <S> Value<S> create() {
		return new DefaultValue<S>();
	}
	
	/**
	 * Ein {@link Value}-Container, der automatisch das Minimum aller Werte in den gegebenen Containern berechnet.
	 */
	@SafeVarargs
	static Value<Double> min(Value<Double> ...values) {
		return new MinValue(values);
	}

	/** 
	 * Ein {@link Value}-Container der initial einen festen Wert hat.
	 */
	static <S> Value<S> constant(S value) {
		Value<S> result = create();
		result.set(value);
		return result;
	}
}
