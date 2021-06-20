/*
 * Copyright (c) 2021 Bernhard Haumacher et al. All Rights Reserved.
 */
package qwirkle.server;

import java.util.logging.Logger;

import javax.servlet.ServletContext;
import javax.websocket.DeploymentException;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.server.handler.HandlerCollection;
import org.eclipse.jetty.util.resource.Resource;
import org.eclipse.jetty.webapp.WebAppContext;
import org.eclipse.jetty.websocket.jsr356.server.deploy.WebSocketServerContainerInitializer;
import org.eclipse.jetty.websocket.jsr356.server.deploy.WebSocketServerContainerInitializer.Configurator;

/**
 * Main entry point to start the Qwirkle server.
 */
public class Main {
	
	private static final Logger LOG = Logger.getLogger(Main.class.getName());
	private static int _port = 8080;
	private static String _contextPath = "/qwirkle";

	/**
	 * Main method for embedded server startup.
	 */
	public static void main(String[] args) throws Exception {
		for (int n = 0, cnt = args.length; n < cnt; ) {
			String arg = args[n++];
			if (arg.equals("-p")) {
				_port = Integer.parseInt(args[n++]);
			}
			else if (arg.equals("-c")) {
				_contextPath = args[n++];
			}
			else {
				System.err.println("Usage: java " + Main.class.getName() + " -p <port> -c <context-path>");
				System.exit(1);
			}
		}
		
		LOG.info("Starting server: http://localhost:" + _port + _contextPath);
		
		final Server server = new Server();

		ServerConnector connector = new ServerConnector(server);
		connector.setPort(_port);
		// open connector to bind port yet.
		connector.open();
		server.addConnector(connector);

		HandlerCollection handlers = new HandlerCollection();

		WebAppContext webapp = new WebAppContext();
		webapp.setContextPath(_contextPath);
		webapp.setBaseResource(Resource.newClassPathResource("/META-INF/resources/"));
		
		// Without this funny code, there is no ServerContainer in the ContextListener.
        WebSocketServerContainerInitializer.configure(webapp, new Configurator() {
			@Override
			public void accept(ServletContext servletContext,
					org.eclipse.jetty.websocket.jsr356.server.ServerContainer serverContainer)
					throws DeploymentException {
				System.out.println("Enabled websockets.");
			}
		});
        
		webapp.addEventListener(new ContextListener());
		
		handlers.addHandler(webapp);

		server.setHandler(handlers);

		server.start();

		LOG.info("Server started: http://localhost:" + _port + _contextPath + "/");
		server.join();
	}

}
