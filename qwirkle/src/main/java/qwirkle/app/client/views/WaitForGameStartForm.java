/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.function.Consumer;

import org.dominokit.domino.ui.cards.Card;
import org.dominokit.domino.ui.forms.TextBox;
import org.dominokit.domino.ui.grid.flex.FlexItem;
import org.dominokit.domino.ui.grid.flex.FlexLayout;
import org.dominokit.domino.ui.lists.ListGroup;
import org.dominokit.domino.ui.style.Styles;
import org.dominokit.domino.ui.utils.TextNode;

import qwirkle.app.client.Communication;
import qwirkle.app.client.Registration;
import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.GameStarted;
import qwirkle.common.messages.GameUpdated;
import qwirkle.common.messages.UserInfo;

/**
 * TODO
 */
public class WaitForGameStartForm extends Card {

	private Communication _communication;
	private Consumer<GameInfo> _continuation;
	private TextBox _gameIdField;
	private ListGroup<UserInfo> _userList;
	private Registration _onUpdate;
	private Registration _onStart;

	/** 
	 * Creates a {@link WaitForGameStartForm}.
	 */
	public WaitForGameStartForm(Communication communication, GameInfo game, Consumer<GameInfo> continuation) {
		_communication = communication;
		_continuation = continuation;
		
		setTitle("Warte auf Spielstart");
		
		appendChild(
			_gameIdField = TextBox.create()
				.setLabel("Spielenummer")
				.setTooltip("Schick diese Nummer deinen Freunden, damit sie Dein Spiel schnell finden können.")
				.setReadOnly(true));
		
		appendChild(_userList = ListGroup.<UserInfo>create().setItemRenderer((list, item) -> {
			item.setSelectable(false)
				.appendChild(FlexLayout.create()
					.appendChild(FlexItem.create()
						.styler(style -> style.setWidth("20px").setBackgroundColor("red"))
					)
					.appendChild(FlexItem.create()
                        .setFlexGrow(1)
                        .css(Styles.padding_5)
                        .styler(style -> style.setLineHeight("62px"))
                        .appendChild(TextNode.of(item.getValue().getName()))
                        .setTooltip("User ID: " + item.getValue().getUserId())
                    )
				);
			}));
		
		updateGame(game);
		
		_onUpdate = _communication.addListener(GameUpdated.class, this::handle);
		_onStart = _communication.addListener(GameStarted.class, this::handle);
	}

	private void handle(GameUpdated message) {
		updateGame(message.getGame());
	}

	private void updateGame(GameInfo game) {
		_gameIdField.setValue(game.getGameId());
		
		_userList.clearElement();
		_userList.addItems(game.getPlayers());
	}
	
	private void handle(GameStarted message) {
		Registration.cancelRegistration(_onUpdate);
		Registration.cancelRegistration(_onStart);
		
		_continuation.accept(message.getGame());
	}
}
