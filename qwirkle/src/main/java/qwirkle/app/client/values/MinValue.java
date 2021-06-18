/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.values;

/**
 * Ein Container, der automatisch das Minimum der beiden Werte aus zwei anderen
 * Containern berechnet, die Zahlen enthalten.
 */
public class MinValue extends DefaultValue<Double> implements Observer<Double> {

	private Value<Double>[] _values;

	/** 
	 * Creates a {@link MinValue}.
	 */
	public MinValue(Value<Double>[] values) {
		_values = values;
		for (Value<Double> value : values) {
			value.addObserver(this);
		}
		update();
	}

	@Override
	public void valueChanged(Value<Double> sender, Double oldValue, Double newValue) {
		update();
	}

	private void update() {
		set(compute());
	}

	private Double compute() {
		Double result = null;
		for (Value<Double> value : _values) {
			Double x = value.get();
			if (result == null) {
				result = x;
			} else if (x != null) {
				result = Math.min(result, x);
			}
		}
		return result;
	}

}
