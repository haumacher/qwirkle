/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.values;

import java.util.ArrayList;
import java.util.List;

/**
 * Ein einfacher Container, der nur den Wert speichert und über etwaige Änderungen informiert.
 */
class DefaultValue<T> implements Value<T> {

	private T _value;
	
	private List<Observer<T>> _observers = new ArrayList<>();

	private boolean _iterating;

	@Override
	public T get() {
		return _value;
	}

	@Override
	public T set(T newValue) {
		T oldValue = _value;
		if (equals(newValue, oldValue)) {
			return oldValue;
		}
		_value = newValue;
		
		boolean before = _iterating;
		_iterating = true;
		try {
			for (Observer<T> observer : _observers) {
				observer.valueChanged(this, oldValue, newValue);
			}
		} finally {
			// Setze den Zustand nicht zurück, wenn während der Benachrichtigung
			// eine Modifikation an der Observer-Liste erfolgt ist. In diesem
			// Fall wurde eine Kopie angelegt und die Liste muss nicht
			// nocheinmal kopiert werden, wenn noch eine Modifikation erfolgt.
			if (_iterating) {
				_iterating = before;
			}
		}
		return oldValue;
	}

	private static boolean equals(Object a, Object b) {
		return a == null ? b == null : a.equals(b);
	}

	@Override
	public boolean addObserver(Observer<T> observer) {
		if (_observers.contains(observer)) {
			return false;
		}
		copyWhenIterating();
		_observers.add(observer);
		return true;
	}

	@Override
	public boolean removeObserver(Observer<?> observer) {
		copyWhenIterating();
		return _observers.remove(observer);
	}


	private void copyWhenIterating() {
		if (_iterating) {
			_observers = new ArrayList<>(_observers);
			_iterating = false;
		}
	}
}
