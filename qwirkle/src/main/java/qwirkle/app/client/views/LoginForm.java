/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.app.client.views;

import java.util.function.Consumer;

import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.cards.Card;
import org.dominokit.domino.ui.forms.TextBox;
import org.dominokit.domino.ui.forms.validations.ValidationResult;
import org.dominokit.domino.ui.loaders.Loader;
import org.dominokit.domino.ui.loaders.LoaderEffect;
import org.dominokit.domino.ui.notifications.Notification;

import elemental2.dom.Event;
import qwirkle.app.client.Communication;
import qwirkle.common.messages.Login;
import qwirkle.common.messages.LoginFailed;
import qwirkle.common.messages.LoginResponse;
import qwirkle.common.messages.LoginSuccess;
import qwirkle.common.messages.UserInfo;

/**
 * Formular, in das man einen Nutzernamen eingeben kann.
 */
public class LoginForm extends Card implements Consumer<LoginResponse>, LoginResponse.Visitor<Void, Void> {

	private static final Runnable NOTHING = () -> {/*Ignore.*/};

	/** 
	 * Erzeugt ein {@link LoginForm}.
	 */
	public static LoginForm create(Communication communication) {
		return new LoginForm(communication);
	}

	private TextBox _userName;
	
	private Consumer<UserInfo> _okClicked = info -> {};

	private final Communication _communication;

	private Loader _loader;
	
	/** 
	 * Creates a {@link LoginForm}.
	 */
	protected LoginForm(Communication communication) {
		_communication = communication;
		
		setTitle("Nutzerdaten eingeben");
		setDescription("Gib dir einen Namen ein, unter dem dich andere Mitspieler sehen und finden können.");
		
		appendChild(_userName = 
			TextBox.create()
				.setLabel("Nutzername")
				.setPlaceholder("Dein Name")
				.setRequired(true, "Du musst einen Nutzernamen eingeben.")
				.setAutoValidation(true));
		appendChild(Button.createPrimary("Ok, los!").addClickListener(this::okClicked));
	}
	
	private void okClicked(Event evt) {
		for (ValidationResult result : _userName.validateAll()) {
			if (! result.isValid()) {
				Notification.createWarning("Deine Eingaben sind noch nicht ganz korrekt, bitte prüf sie nochmal.").show();
				return;
			}
		}
		
        _loader = Loader.create(this.element(), LoaderEffect.BOUNCE)
		    .setLoadingText("Einen Moment bitte, du wirst angemeldet...")
		    .start();
        
        String value = _userName.getValue();
		_communication.send(Login.login().setName(value), this);
	}
	
	@Override
	public void accept(LoginResponse response) {
		response.visit(this, null);
	}
	
	@Override
	public Void visit(LoginSuccess self, Void arg) {
		stopLoader();
		
		Notification.createSuccess("Willkommen " + self.getUser().getName() + "! Es kann los gehen...").show();
		_okClicked.accept(self.getUser());
		return null;
	}

	@Override
	public Void visit(LoginFailed self, Void arg) {
		stopLoader();
		Notification.createWarning("Das hat leider nicht geklappt: " + self.getMessage()).show();
		return null;
	}
	
	private void stopLoader() {
		if (_loader != null) {
			_loader.stop();
			_loader = null;
		}
	}

	/** 
	 * Setzt die Aktion, die nach einem erfolgreichen Login ausgeführt werden soll.
	 */
	public LoginForm setContinuation(Consumer<UserInfo> okClicked) {
		_okClicked = okClicked;
		return this;
	}

}
