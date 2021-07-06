/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.dominokit.domino.ui.layout.Layout;

import qwirkle.common.ai.QwirkleBot;
import qwirkle.common.messages.Placement;
import qwirkle.common.messages.Stein;
import qwirkle.common.model.Nachzugstapel;
import qwirkle.common.model.Position;
import qwirkle.common.model.Zugbewertung;

/**
 * {@link GameScreen} in einem Spiel gegen einen Computer-Gegner.
 */
public class SingleplayerGameScreen extends GameScreen {
	
	private final Nachzugstapel _stapel;
	private final QwirkleBot _bot;
	
	private final List<PlayerStat> _stats = new ArrayList<>();

	/** 
	 * Creates a {@link SingleplayerGameScreen}.
	 */
	public SingleplayerGameScreen(Layout layout) {
		super(layout);
		
		_bot = new QwirkleBot(Zugbewertung::zugbewertung);
		_stapel = new Nachzugstapel();
		_stats.add(new PlayerStat("Du"));
		_stats.add(new PlayerStat("Computer"));
	}
	
	@Override
	protected Iterable<PlayerStat> getPlayerStats() {
		return _stats;
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
		
		_stats.get(0).addScore(punkte(beschreibung));
		
		fülleAuf(_stapel.nimmSteine(beschreibung.size()));
		
		List<Placement> gegenzug = _bot.berechneZug();
		zeigeZug(gegenzug);
		informiereBot(gegenzug);
		steineFürBot(gegenzug.size());

		_stats.get(1).addScore(punkte(gegenzug));
		
		starteZug();
	}

	private int punkte(List<Placement> beschreibung) {
		List<Position> positions = beschreibung.stream().map(p -> new Position(p.getX(), p.getY())).collect(Collectors.toList());
		int punkte= Zugbewertung.zugbewertung(_spielfeld, positions);
		return punkte;
	}
	
	@Override
	protected void starteZug() {
		super.starteZug();
		
		_stats.get(0).setActive(true);
		updatePlayerStats();
	}

	private void informiereBot(List<Placement> beschreibung) {
		for (Placement placement : beschreibung) {
			_bot.set(placement.getX(), placement.getY(), placement.getStein());
		}
	}

}
