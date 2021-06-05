/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.dominokit.domino.ui.cards.Card;
import org.dominokit.domino.ui.grid.flex.FlexItem;
import org.dominokit.domino.ui.grid.flex.FlexLayout;
import org.dominokit.domino.ui.icons.Icons;
import org.dominokit.domino.ui.lists.ListGroup;
import org.dominokit.domino.ui.lists.ListItem;
import org.dominokit.domino.ui.loaders.Loader;
import org.dominokit.domino.ui.loaders.LoaderEffect;
import org.dominokit.domino.ui.notifications.Notification;
import org.dominokit.domino.ui.style.Styles;
import org.dominokit.domino.ui.utils.TextNode;

import qwirkle.app.client.Communication;
import qwirkle.app.client.Registration;
import qwirkle.common.messages.FindOpenGames;
import qwirkle.common.messages.GameClosed;
import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.GameJoined;
import qwirkle.common.messages.GameOpened;
import qwirkle.common.messages.GameUpdated;
import qwirkle.common.messages.JoinFailed;
import qwirkle.common.messages.JoinFailed.Reason;
import qwirkle.common.messages.JoinGame;
import qwirkle.common.messages.JoinGameResponse;
import qwirkle.common.messages.OpenGames;

/**
 * TODO
 */
public class JoinGameForm extends Card implements JoinGameResponse.Visitor<Void, Void> {

	private Communication _communication;
	private Consumer<GameInfo> _continuation;
	private ListGroup<GameInfo> _gameList;
	private Registration _onGameOpened;
	private Registration _onGameClosed;
	private Registration _onGameUpdated;
	private Loader _loader;

	public static JoinGameForm create(Communication communication, Consumer<GameInfo> continuation) {
		return new JoinGameForm(communication, continuation);
	}
	
	private JoinGameForm(Communication communication, Consumer<GameInfo> continuation) {
		_communication = communication;
		_continuation = continuation;
		
		setTitle("Alle offenen Spiele");
		setDescription("Such dir ein Spiel aus, bei dem Du beitreten möchtest.");
		
		appendChild(_gameList = ListGroup.create());
		
		_gameList.setItemRenderer((list, item) -> {
			item.appendChild(
				FlexLayout.create()
					.appendChild(FlexItem.create()
	                    .css(Styles.padding_5)
						.styler(style -> style.setWidth("20px").setBackgroundColor("red").setLineHeight("62px"))
						.appendChild(TextNode.of(Integer.toString(item.getValue().getUsers().size())))
					)
					.appendChild(FlexItem.create()
	                    .setFlexGrow(1)
	                    .css(Styles.padding_5)
	                    .styler(style -> style.setLineHeight("62px"))
	                    .appendChild(TextNode.of(item.getValue().getName()))
					)
					.appendChild(FlexItem.create()
	                    .css(Styles.padding_5, Styles.font_50)
						.styler(style -> style.setWidth("60px").setBackgroundColor("green").setLineHeight("62px"))
						.appendChild(Icons.ALL.play_circle_outline().addClickListener(evt -> join(item.getValue())))
					)
				);
			});
		
		_communication.<OpenGames>send(FindOpenGames.findOpenGames(), this::handle);
		
		_onGameOpened = _communication.addListener(GameOpened.class, this::handle);
		_onGameClosed = _communication.addListener(GameClosed.class, this::handle);
		_onGameUpdated = _communication.addListener(GameUpdated.class, this::handle);
	}
	
	private void join(GameInfo game) {
        _loader = Loader.create(element(), LoaderEffect.BOUNCE)
		    .setLoadingText("Spielteilnahme wird überprüft...")
		    .start();

        _communication.<JoinGameResponse>send(JoinGame.joinGame().setGameId(game.getGameId()), this::handle);
	}
	
	private void handle(JoinGameResponse response) {
		response.visit(this, null);
	}
	
	@Override
	public Void visit(GameJoined self, Void arg) {
		stopLoader();
		Registration.cancelRegistration(_onGameOpened);
		Registration.cancelRegistration(_onGameClosed);
		Registration.cancelRegistration(_onGameUpdated);
		_continuation.accept(self.getGame());
		return null;
	}
	
	@Override
	public Void visit(JoinFailed self, Void arg) {
		stopLoader();
		Notification.createWarning("Leider konntest Du dem Spiel nicht beitreten: " + translate(self.getReason())).show();
		return null;
	}

	private String translate(Reason reason) {
		switch (reason) {
		case ALREADY_PART_OF_A_GAME: return "Du bist schon in einem Spiel angemeldet.";
		case GAME_ALREADY_STARTED: return "Das Spiel hat schon vorher begonnen.";
		case GAME_NOT_FOUND: return "Das Spiel ist bereits beendet.";
		}
		return reason.name();
	}

	private void stopLoader() {
		if (_loader != null) {
			_loader.stop();
		}
	}
	
	private void handle(OpenGames message) {
		_gameList.setItems(message.getGames());
	}
	
	private void handle(GameOpened message) {
		_gameList.addItem(message.getGame());
	}

	private void handle(GameUpdated message) {
		GameInfo newGameInfo = message.getGame();
		String gameId = newGameInfo.getGameId();
		
		int index = indexOf(_gameList.getValues(), game -> game.getGameId().equals(gameId));
		if (index >= 0) {
			ListItem<GameInfo> item = _gameList.getItems().get(index);
			_gameList.removeItem(item, true);
			_gameList.insertAt(index, newGameInfo);
		}
	}
	
	/** 
	 * Berechnet den ersten Index, an dem die gegebene Liste einen Wert speichert, auf den das gegebene Prädikat zutrifft.
	 */
	private static <T> int indexOf(List<T> values, Predicate<? super T> predicate) {
		for (int n = 0, cnt = values.size(); n < cnt; n++) {
			if (predicate.test(values.get(n))) {
				return n;
			}
		}
		return -1;
	}

	private void handle(GameClosed message) {
		String gameId = message.getGameId();
		_gameList.setItems(
			_gameList.getValues().stream()
				.filter(game -> !game.getGameId().equals(gameId))
				.collect(Collectors.toList()));
	}
	
}
