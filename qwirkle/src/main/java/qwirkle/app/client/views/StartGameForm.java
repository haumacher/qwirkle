/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.function.Consumer;

import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.cards.Card;
import org.dominokit.domino.ui.forms.TextBox;
import org.dominokit.domino.ui.grid.flex.FlexItem;
import org.dominokit.domino.ui.grid.flex.FlexLayout;
import org.dominokit.domino.ui.lists.ListGroup;
import org.dominokit.domino.ui.loaders.Loader;
import org.dominokit.domino.ui.loaders.LoaderEffect;
import org.dominokit.domino.ui.notifications.Notification;
import org.dominokit.domino.ui.style.Styles;
import org.dominokit.domino.ui.utils.TextNode;

import elemental2.dom.Event;
import qwirkle.app.client.Communication;
import qwirkle.app.client.Registration;
import qwirkle.common.messages.CreateGame;
import qwirkle.common.messages.CreateGameFailed;
import qwirkle.common.messages.CreateGameResponse;
import qwirkle.common.messages.GameCreated;
import qwirkle.common.messages.GameInfo;
import qwirkle.common.messages.GameStarted;
import qwirkle.common.messages.GameUpdated;
import qwirkle.common.messages.StartGame;
import qwirkle.common.messages.UserInfo;

/**
 * TODO
 */
public class StartGameForm extends Card implements Consumer<CreateGameResponse>, CreateGameResponse.Visitor<Void, Void> {

	private Communication _communication;
	private UserInfo _userInfo;
	private TextBox _gameId;
	private GameInfo _game;
	private ListGroup<UserInfo> _userList;
	private Button _startButton;
	private Registration _onJoin;
	private Registration _onLeave;
	private Registration _onStart;
	private Loader _loader;
	private Consumer<GameInfo> _continuation;

	public static StartGameForm create(Communication communication, UserInfo userInfo, Consumer<GameInfo> continuation) {
		return new StartGameForm(communication, userInfo, continuation);
	}
	
	/** 
	 * Creates a {@link StartGameForm}.
	 */
	protected StartGameForm(Communication communication, UserInfo userInfo, Consumer<GameInfo> continuation) {
		_communication = communication;
		_userInfo = userInfo;
		_continuation = continuation;
		
		setTitle("Warte auf Mitspieler");
		
		appendChild(
			_gameId = TextBox.create()
				.setLabel("Spielenummer")
				.setPlaceholder("Noch nicht zugewiesen")
				.setTooltip("Schick diese Nummer deinen Freunden, damit sie Dein Spiel schnell finden können.")
				.setReadOnly(true));
		
		appendChild(_userList = ListGroup.create());
		_userList.setItemRenderer((list, item) -> {
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
			});
		_userList.addItem(_userInfo);
		
		appendChild(_startButton = Button.createPrimary("Spiel beginnen").addClickListener(this::startGameClicked));
		updateStartButton();
		
		_onJoin = _communication.addListener(GameUpdated.class, this::gameUpdatedReceived);
		_onStart = _communication.addListener(GameStarted.class, this::gameStartedReceived);
		
		_communication.send(CreateGame.createGame().setName(_userInfo.getName()), this);
	}
	
	private void startGameClicked(Event evt) {
        _loader = Loader.create(this.element(), LoaderEffect.BOUNCE)
		    .setLoadingText("Starte das Spiel, einen Moment bitte...")
		    .start();
		
		_communication.send(StartGame.startGame().setGameId(_game.getGameId()));
	}
	
	private void gameStartedReceived(GameStarted message) {
		if (_loader != null) {
			_loader.stop();
			_loader = null;
		}
		
		_onJoin = Registration.cancelRegistration(_onJoin);
		_onJoin = Registration.cancelRegistration(_onLeave);
		_onJoin = Registration.cancelRegistration(_onStart);
		
		_continuation.accept(message.getGame());
	}
	
	private void gameUpdatedReceived(GameUpdated message) {
		if (!matchesGameId(message)) {
			return;
		}

		_game = message.getGame();
		_userList.removeAll();
		_userList.addItems(message.getGame().getUsers());
		
		updateStartButton();
	}

	private boolean matchesGameId(GameUpdated message) {
		return _game.getGameId().equals(message.getGame().getGameId());
	}

	private void updateStartButton() {
		_startButton.setDisabled(_game == null || _game.getUsers().size() < 2);
	}
	
	@Override
	public void accept(CreateGameResponse response) {
		response.visit(this, null);
	}
	
	@Override
	public Void visit(GameCreated self, Void arg) {
		_game = self.getGame();
		_gameId.setValue(self.getGame().getGameId());
		return null;
	}

	@Override
	public Void visit(CreateGameFailed self, Void arg) {
		Notification.createWarning("Das Spiel konnte nicht erstellt werden: " + self.getMessage()).show();
		return null;
	}

}
