/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.common.ai;

import java.util.List;

import qwirkle.common.messages.Stein;

/**
 * TODO
 */
public class SteinAuswahl {

	final List<Stein> _vorrat;
	final boolean[] _benutzt;

	/** 
	 * Erzeugt eine {@link SteinAuswahl}.
	 */
	public SteinAuswahl(List<Stein> vorrat) {
		_vorrat = vorrat;
		_benutzt = new boolean[vorrat.size()];
	}
	
	/**
	 * Die momentan noch zur Auswahl stehenden Steine aus dem Vorrat.
	 */
	public Durchgang steine() {
		return new Durchgang() {
			int index = 0;
			{
				next();
			}

			@Override
			public boolean hatStein() {
				return index < _benutzt.length;
			}
			
			@Override
			public Stein nimmStein() {
				assert !_benutzt[index];
				_benutzt[index] = true;
				return _vorrat.get(index);
			}
			
			@Override
			public void gibSteinFrei() {
				assert _benutzt[index];
				_benutzt[index] = false;
				index++;
				next();
			}
			
			private void next() {
				while (index < _benutzt.length && _benutzt[index]) {
					index++;
				}
			}

		};
	}
	
	interface Durchgang {
		boolean hatStein();
		Stein nimmStein();
		void gibSteinFrei();
	}

}
