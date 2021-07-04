/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.ArrayList;
import java.util.List;

import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.icons.Icons;
import org.dominokit.domino.ui.layout.Layout;
import org.dominokit.domino.ui.utils.DominoElement;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HtmlContentBuilder;

import elemental2.dom.DomGlobal;
import elemental2.dom.Event;
import elemental2.dom.EventListener;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;
import qwirkle.app.client.SpielfeldDarstellung;
import qwirkle.app.client.SteinDarstellung;
import qwirkle.app.client.Vorrat;
import qwirkle.app.client.values.Value;
import qwirkle.common.messages.Placement;
import qwirkle.common.messages.Stein;
import qwirkle.common.model.Spielfeld;

/**
 * TODO
 */
public abstract class GameScreen {

	protected final Spielfeld _spielfeld;
	private SpielfeldDarstellung _spielfeldDarstellung;
	private Vorrat _vorrat;
	private Layout _layout;
	
	private EventListener _onResize;
	private List<SteinDarstellung> _vorschau = new ArrayList<>();
	private double _hideTimeout;

	/** 
	 * Creates a {@link GameScreen}.
	 */
	public GameScreen(Layout layout) {
		_layout = layout;
		_spielfeld = new Spielfeld();
	}
	
	/** 
	 * TODO
	 */
	public void show() {
		DominoElement<HTMLDivElement> contentPanel = _layout.getContentPanel();
		
		DomGlobal.document.addEventListener("resize", _onResize = this::fenstergrößeVerändert);
		
		HTMLDivElement root = DominoElement.div()
			.styler(s -> s.setPosition("absolute")
				.setTop("70px")
				.setLeft("0px")
				.setRight("0px")
				.setBottom("0px")
				.setOverFlow("hidden"))
			.element();
		
		Value<Double> steinGrößeSpielfeld = Value.create();
		Value<Double> steinGrößeVorrat = Value.create();
		Value<Double> steinGröße = Value.min(
			Value.constant((double)SteinDarstellung.SIZE), 
			steinGrößeSpielfeld, 
			steinGrößeVorrat);
		
		HTMLDivElement top = DominoElement.div().styler(s -> s.setPosition("absolute").setTop("0px").setLeft("0px").setRight("0px").setBottom("120px")).element();
		{
			_spielfeldDarstellung = new SpielfeldDarstellung(top, _spielfeld, steinGröße, steinGrößeSpielfeld);
		}
		root.appendChild(top);
		
		HTMLDivElement bottomLeft = DominoElement.div().styler(s -> s.setPosition("absolute").setBottom("0px").setLeft("0px").setWidth("calc(50% - 60px)").setHeight("120px")).element();
		{
			_vorrat = new Vorrat(bottomLeft, _spielfeldDarstellung, steinGröße, steinGrößeVorrat);
		}
		root.appendChild(bottomLeft);

		HTMLDivElement bottomMiddle = DominoElement.div()
			.styler(s -> s.setPosition("absolute")
				.setBottom("0px")
				.setLeft("calc(50% - 60px)")
				.setWidth("120px")
				.setHeight("120px")
				.setPadding("10px"))
			.element();
		bottomMiddle.appendChild(Button.createPrimary("Fertig").addClickListener(this::beendeZug).element());
		root.appendChild(bottomMiddle);
		
		contentPanel.appendChild(root);
		
		updatePlayerStats();
		
		_spielfeldDarstellung.zeigeAn();
	}

	/**
	 * Zeigt den Spielstand und den aktuell aktiven Spieler an.
	 */
	protected void updatePlayerStats() {
		DominoElement<HTMLUListElement> topBar = _layout.getTopBar();
		topBar.clearElement();
		for (PlayerStat player : getPlayerStats()) {
			HtmlContentBuilder<HTMLLIElement> li = Elements.li();
			if (player.isActive()) {
				li.add(Icons.ALL.play_circle_mdi().size18().css("no_line_height"));
			}
			li.add(Elements.span().add(player.getName() + ": " + player.getScore()).style("padding-left: 5px;"));
			li.css("navbar-brand");
			li.style("padding-left: 10px;");
			topBar.appendChild(li);
		}
	}

	/** 
	 * Die aktiven Spieler, ihre Punkte und welcher Spieler aktiv ist.
	 */
	protected abstract Iterable<PlayerStat> getPlayerStats();

	private void fenstergrößeVerändert(@SuppressWarnings("unused") Event evt) {
		
	}

	protected void fülleAuf(List<Stein> steine) {
		_vorrat.fülleAuf(steine);
	}

	protected void zeigeZug(List<Placement> placements) {
		if (_hideTimeout != 0) {
			DomGlobal.clearTimeout(_hideTimeout);
			versteckeVorschau();
			_hideTimeout = 0;
		}
		for (Placement placement : placements)  {
			int x = placement.getX();
			int y = placement.getY();
			SteinDarstellung darstellung = _spielfeldDarstellung.fügeEin(x, y, placement.getStein());
			darstellung.setzeVorschau(true);
			_vorschau.add(darstellung);
		}
		_hideTimeout = DomGlobal.setTimeout(this::versteckeVorschau, 800);
	}
	
	void versteckeVorschau(Object...args) {
		_vorschau.stream().forEach(d -> d.setzeVorschau(false)); 
		_vorschau.clear();
	}

	protected void starteZug() {
		_vorrat.starteZug();
	}

	private void beendeZug(@SuppressWarnings("unused") Event evt) {
		List<Placement> beschreibung = _vorrat.beendeZug();
		
		meinZug(beschreibung);
	}

	protected abstract void	meinZug(List<Placement> beschreibung);

}
