---
layout: post
title: Create Minimal Jetty Server 
author: digvijayb
date: 2017-01-09 00:00:00
categories:
- blog
- Ops
tags: ['Java', 'IBM', 'Config']
img: jetty-big.png
thumb: jettylogo.png
postDisclaimmer : NA
---

Jetty is java servlet container developed by Eclipse Foundation and it has such small footprint that you can embedded it in you java app or can use as test server alternative to any web server like tomcat. All by writting small main class of just over of 10 line.

>Jetty is used in a wide variety of projects and products, both in development and production. Jetty can be easily embedded in devices, tools, frameworks, application servers, and clusters.
<!--more-->

### JettyServer.java
This class have main method that can be direclty run from cmd line. You can run your web app without configuring any server or deploying your app to server.

```java
package com.dgstack.eg;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;

public class JettyServer {

	public static void main(String[] args) 
            throws Exception {
	    Server server = new Server(8080);
	    WebAppContext context = new WebAppContext();
	    context.setContextPath("/");
	    context.setDescriptor("src/main/webapp/web.xml");
	    context.setResourceBase("src/main/webapp/");
	    server.setHandler(context);
	    server.start();
	}
}
```

Inside main method we have instance of `Server` class which take port number as constructor arg. Then we have `WebAppContext` class were we have set the Context path, Descriptor (web.xml path) and Resource Base.

### Dependency build.gradle

```gradle
group 'com.dgstack.eg'
version '1.0'

apply plugin: 'java'
apply plugin: 'war'
apply plugin: 'application'

sourceCompatibility = 1.8

repositories {
    mavenCentral()
}

dependencies {
  compile group: 'org.eclipse.jetty', name: 'jetty-server', version: '9.3.15.v20161220'
  compile group: 'org.eclipse.jetty', name: 'jetty-webapp', version: '9.3.15.v20161220'
}

task runApp(type: JavaExec) {
  classpath = sourceSets.main.runtimeClasspath
  main = 'com.dgstack.eg.JettyServer'
}
```

> Get the code at this <a href="https://gist.github.com/digvijaybhakuni/ef8b867ddfd8c970177d2300e67d6426" target="_blank"> gist</a>.