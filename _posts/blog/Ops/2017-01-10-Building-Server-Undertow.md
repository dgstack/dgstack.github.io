---
layout: post
title: Building Server with Undertow
author: digvijayb
date: 2017-01-11 00:00:00
categories:
- blog
- Ops
tags: ['Java', 'Jboss', 'Server', 'Undertow']
img: undertow.png
thumb: thumb04.jpg
postDisclaimmer : NA
---
Undertow is a flexible performant web server written in java, provid blocking and non-blocking api. It can also embeded in your app can ship it prod with no problem. Now it is also becoming the hot choice for mircoservice deployment. 

> Undertow is extremely lightweight, with the Undertow core jar coming in at under 1Mb. It is lightweight at runtime too, with a simple embedded server using less than 4Mb of heap space

### Key Feature
- Lightweight
- Support HTTP Upgrade (multiplexed over the HTTP port)
- Support Web Socket 
- Servlet 3.1
- Embeddable
<!--more-->

### Undertow Server builder
Undertow use easy builder api to build Servlet Container and configure it as you would in deployment descriptor file `(web.xml)`. As you configure your `DeploymentInfo` with Servlet class, request mapping, welcome files and other stuff that you do in your regular `web.xml` file, then use `DeploymentManager` to deploy it in `ServletContainer`, then path use `PathHandler` with context path to you deployed app in container and finally add our `PathHandler` to listener at specified port. Now start then undertow server to listen.

#### App.java

```java
import static io.undertow.servlet.Servlets.servlet;

import javax.servlet.ServletException;

import org.glassfish.jersey.servlet.ServletContainer;

import io.undertow.Handlers;
import io.undertow.Undertow;
import io.undertow.server.handlers.PathHandler;
import io.undertow.servlet.Servlets;
import io.undertow.servlet.api.DeploymentInfo;
import io.undertow.servlet.api.DeploymentManager;

public class App {

	private static Undertow server;

	public static void main(String[] args) 
        throws ServletException {
		startContainer(9090);
	}

	public static void stopContainer() {
		server.stop();
	}

	public static void startContainer(int port)
        throws ServletException {
        
        io.undertow.servlet.api.ServletContainer 
            servletContainer = Servlets.defaultContainer();
            
        DeploymentInfo di = Servlets.deployment()
            .setClassLoader(App.class.getClassLoader()).setContextPath("/jaxrx")
            .setDeploymentName("jaxrx-demo-1.0")
            .addServlets(servlet("jerseyServlet", ServletContainer.class)
            .setLoadOnStartup(1).setAsyncSupported(true)
            .addInitParam("javax.ws.rs.Application", JerseyApp.class.getName())
            .addMapping("/api/*")).addWelcomePage("index.html");
        
        DeploymentManager manager = servletContainer.addDeployment(di);
        
        manager.deploy();
        
        PathHandler path = Handlers.path(Handlers.redirect("/jaxrx"))
            .addPrefixPath("/jaxrx", manager.start());
            
        server = Undertow.builder()
            .addHttpListener(port, "localhost").setHandler(path).build();
            
        server.start();
    }
}
```


### Dependency build.gradle

```gradle
group 'com.dgstack.eg.jaxrs'
version '1.0'

apply plugin: 'java'
apply plugin: 'war'
apply plugin: 'application'

sourceCompatibility = 1.8

mainClassName = 'com.dgstack.eg.jaxrx.App'

repositories {
    mavenCentral()
}

dependencies {
    //Jersey servlet dependencies
    compile group: 'org.glassfish.jersey.containers', name: 'jersey-container-servlet', version: '2.25'

    //Undertow dependencies
    compile group: 'io.undertow', name: 'undertow-core', version: '1.4.7.Final'
    compile group: 'io.undertow', name: 'undertow-servlet', version: '1.4.7.Final'
    
    //J2ee servlet dependencies
    compile group: 'javax.servlet', name: 'javax.servlet-api', version: '3.1.0'

}

task runApp(type: JavaExec) {
  classpath = sourceSets.main.runtimeClasspath
  main = 'com.dgstack.eg.jaxrx.App'
}
```

> Get the code at this <a href="https://gist.github.com/digvijaybhakuni/dcefe5db113dba29a1022b1000716354" target="_blank"> gist</a>.