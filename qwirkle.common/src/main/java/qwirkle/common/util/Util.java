/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.common.util;

import java.util.List;
import java.util.function.Predicate;

/**
 * Allgemein verwendbare Hilfsmittel
 */
public class Util {

	/** 
	 * Berechnet den ersten Index, an dem die gegebene Liste einen Wert speichert, auf den das gegebene Prädikat zutrifft.
	 */
	public static <T> int indexOf(List<T> values, Predicate<? super T> predicate) {
		for (int n = 0, cnt = values.size(); n < cnt; n++) {
			if (predicate.test(values.get(n))) {
				return n;
			}
		}
		return -1;
	}

}
