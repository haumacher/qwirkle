/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.websocket.DeploymentException;
import javax.websocket.server.ServerContainer;
import javax.websocket.server.ServerEndpointConfig;
import javax.websocket.server.ServerEndpointConfig.Builder;

/**
 * {@link ServletContextListener} observing the server startup and shutdown.
 */
public class ContextListener implements ServletContextListener {

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		System.out.println("Starting up.");
		
        ServerContainer container = (ServerContainer) sce.getServletContext().getAttribute(ServerContainer.class.getName());
        if (container == null) {
    		throw new RuntimeException("No websocket container found, cannot register websockets.");
        } else {
        	try {
        		Builder builder = ServerEndpointConfig.Builder.create(UserEndpoint.class, "/talk");
        		ServerEndpointConfig config = builder.build();
        		
        		container.addEndpoint(config);
        	} catch (DeploymentException ex) {
        		throw new RuntimeException("Unable to add WebSocket endpoints", ex);
        	}		
        }
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		System.out.println("Shutting down.");
	}

}
