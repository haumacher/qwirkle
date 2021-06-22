/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.List;

import org.dominokit.domino.ui.layout.Layout;

import qwirkle.common.ai.QwirkleBot;
import qwirkle.common.messages.Placement;
import qwirkle.common.messages.Stein;
import qwirkle.common.model.Nachzugstapel;

/**
 * TODO
 */
public class SingleplayerGameScreen extends GameScreen {
	
	private final Nachzugstapel _stapel;
	private final QwirkleBot _bot;

	/** 
	 * Creates a {@link SingleplayerGameScreen}.
	 */
	public SingleplayerGameScreen(Layout layout) {
		super(layout);
		
		_bot = new QwirkleBot();
		_stapel = new Nachzugstapel();
	}
	
	@Override
	public void show() {
		super.show();
		
		fülleAuf(_stapel.nimmSteine(6));
		steineFürBot(6);

		starteZug();
	}

	private void steineFürBot(int cnt) {
		for (Stein stein : _stapel.nimmSteine(cnt)) {
			_bot.add(stein);
		}
	}

	@Override
	protected void meinZug(List<Placement> beschreibung) {
		zeigeZug(beschreibung);
		informiereBot(beschreibung);
		
		fülleAuf(_stapel.nimmSteine(beschreibung.size()));
		
		List<Placement> gegenzug = _bot.berechneZug();
		zeigeZug(gegenzug);
		informiereBot(gegenzug);
		steineFürBot(gegenzug.size());
		
		starteZug();
	}

	private void informiereBot(List<Placement> beschreibung) {
		for (Placement placement : beschreibung) {
			_bot.set(placement.getX(), placement.getY(), placement.getStein());
		}
	}

}
