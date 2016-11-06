---
layout: post
title: RESTful Web Service With Jersey And Spring
author: digvijayb
date: 2015-09-21 16:54:46
categories:
- blog
- Java
tags: ['Java', 'REST', 'Spring', 'Jersey', 'JAX-RS']
img: NA
thumb: spring-logo.png
permalink: /2015/09/21/RESTful-Web-Service-with-Jersey-in-spring/
postDisclaimmer : NA
---

Two of the coolest framework in java Jersey and Spring. we are going to integrate together to get best of the both for our restful web service. Jersey provides the JAX-RS API's implementation to get web service structure ready. And spring logical support to our web service by it unique feature inversion of control (IoC) 

><a href="https://jersey.java.net/" target="_blank"><strong>Jersey</strong></a> RESTful Web Services framework is open source, production quality, framework for developing **RESTful** Web Services in Java that provides support for JAX-RS APIs and serves as a JAX-RS (*JSR 311 & JSR 339*) Reference Implementation.

>The <a href="http://en.wikipedia.org/wiki/Spring_Framework" target="_blank"><strong>Spring Framework</strong></a> is an open source application framework and inversion of control container for the Java platform.
>

**Technology Stack**

- Spring 3.2.2.RELEASE
- Jersey 1.8
- Tomcat 7
- JDK 1.6<!--more-->

![Flow Diagram Of Web Service Using Jersey And Spring](https://docs.google.com/drawings/d/1soNcbVH52UpqIV2MPS5P8rfz6C8RCisFYPLcBuEvY_M/pub?w=478&h=314)

#### pom.xml
This pom xml we have mentioned all the dependencies.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>com.dgstack.dev</groupId>
	<artifactId>rs-jersey-spring</artifactId>
	<packaging>war</packaging>
	<version>0.0.1-SNAPSHOT</version>
	<name>rs-jersey-spring Maven Webapp</name>
	<url>http://maven.apache.org</url>
	<properties>
		<spring.version>3.2.2.RELEASE</spring.version>
		<jersey.version>1.8</jersey.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-core</artifactId>
			<version>${spring.version}</version>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-context</artifactId>
			<version>${spring.version}</version>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-web</artifactId>
			<version>${spring.version}</version>
		</dependency>
		<dependency>
			<groupId>com.sun.jersey</groupId>
			<artifactId>jersey-json</artifactId>
			<version>${jersey.version}</version>
		</dependency>
		<dependency>
			<groupId>com.sun.jersey.contribs</groupId>
			<artifactId>jersey-spring</artifactId>
			<version>${jersey.version}</version>
		</dependency>
		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>3.8.1</version>
			<scope>test</scope>
		</dependency>
	</dependencies>
	<build>
		<finalName>rs-jersey-spring</finalName>
	</build>
</project>
```

#### web.xml

This is the web xml where make instance of `com.sun.jersey.spi.spring.container.servlet.SpringServlet`  jersey-serlvet and map it with `*/api/**`  and set init-param `<param-name>com.sun.jersey.config.property.packages</param-name>` as the package where we the all the resource class `<param-value>com.dgstack.dev.ws</param-value>`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://java.sun.com/xml/ns/javaee"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
	version="2.5">
	<display-name>Archetype Created Web Application</display-name>
	<welcome-file-list>
		<welcome-file>index.jsp</welcome-file>
	</welcome-file-list>
	<context-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>classpath:AppContext.xml</param-value>
	</context-param>
	<listener>
		<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
	</listener>
	<servlet>
		<servlet-name>jersey-serlvet</servlet-name>
		<servlet-class>com.sun.jersey.spi.spring.container.servlet.SpringServlet</servlet-class>
		<init-param>
			<param-name>com.sun.jersey.config.property.packages</param-name>
			<param-value>com.dgstack.dev.ws</param-value>
		</init-param>
		<init-param>
			<param-name>com.sun.jersey.api.json.POJOMappingFeature</param-name>
			<param-value>true</param-value>
		</init-param>
		<load-on-startup>1</load-on-startup>
	</servlet>
	<servlet-mapping>
		<servlet-name>jersey-serlvet</servlet-name>
		<url-pattern>/api/*</url-pattern>
	</servlet-mapping>
</web-app>
```

#### AppContext.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:context="http://www.springframework.org/schema/context"
	xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
		http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">

	<context:component-scan base-package="com.dgstack.dev.ws" />
	<context:annotation-config/>
	
	<bean id="movieRepo" class="com.dgstack.dev.repo.MovieRepoImpl" scope="singleton"></bean>
	
</beans>
```

#### MoviesWS.java

```java
package com.dgstack.dev.ws;

import java.util.Collection;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.dgstack.dev.repo.MovieRepo;
import com.dgstack.dev.vo.MovieVO;

/**
 * @author digvijay.bhakuni
 *
 */
@Path("/movie/")
@Component
public class MoviesWS {

	@Autowired
	private MovieRepo movieRepo;
	public MoviesWS() {
	}

	@GET @Path("/all") @Produces(MediaType.APPLICATION_JSON)
	public Response getAllMovies(){
		Collection<MovieVO> movies = movieRepo.allMovie();
		return Response.ok(movies.toArray()).build();
	}
	
	@POST @Produces(MediaType.APPLICATION_JSON) @Consumes(MediaType.APPLICATION_JSON)
	public Response addMovies(final MovieVO movie){
		MovieVO movieNew = movieRepo.addMovie(movie);
		return Response.ok(movieNew).build();
	}
	
	@PUT @Produces(MediaType.APPLICATION_JSON) @Consumes(MediaType.APPLICATION_JSON)
	public Response updateMovies(final MovieVO movie){
		MovieVO movieNew = movieRepo.update(movie);
		return Response.ok(movieNew).build();
	}
	
	@GET @Path("{id}") @Produces(MediaType.APPLICATION_JSON)
	public Response getMovies(@PathParam("id")final String id){
		MovieVO movie = movieRepo.getMovieById(id);
		return Response.ok(movie).build();
	}
	
}
```

#### MovieVO.java

```java
package com.dgstack.dev.vo;

import java.io.Serializable;

/**
 * @author digvijay.bhakuni
 *
 */
public class MovieVO implements Serializable{

	private static final long serialVersionUID = 1082165539433738004L;

	public MovieVO() {
	}
	
	private String id;
	
	private String name;
	
	private String year;
	
	private String rating;

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the year
	 */
	public String getYear() {
		return year;
	}

	/**
	 * @param year the year to set
	 */
	public void setYear(String year) {
		this.year = year;
	}

	/**
	 * @return the rating
	 */
	public String getRating() {
		return rating;
	}

	/**
	 * @param rating the rating to set
	 */
	public void setRating(String rating) {
		this.rating = rating;
	}	
}

```

#### MovieRepo.java

```java
package com.dgstack.dev.repo;

import java.util.Collection;
import java.util.List;

import com.dgstack.dev.vo.MovieVO;

/**
 * @author digvijay.bhakuni
 *
 */
public interface MovieRepo {

	public MovieVO getMovieById(String Id);
	
	public MovieVO addMovie(MovieVO movie);
	
	public Collection<MovieVO> allMovie();
	
	public MovieVO update(MovieVO movie); 
}
```

#### MovieRepoImpl.java
```java
package com.dgstack.dev.repo;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import com.dgstack.dev.vo.MovieVO;

/**
 * @author digvijay.bhakuni
 *
 */
public class MovieRepoImpl implements MovieRepo{

	public Map<String, MovieVO> repoMap;

	public MovieRepoImpl() {
	}

	@PostConstruct
	public void init(){
		repoMap = new HashMap<String, MovieVO>();
		MovieVO movieVO = new MovieVO();
		movieVO.setId(String.valueOf(System.currentTimeMillis()));
		movieVO.setName("The Martin");
		movieVO.setYear("2015");
		movieVO.setRating("5");
		repoMap.put(movieVO.getId(), movieVO);
		System.out.println(repoMap);
	}
	
	public MovieVO getMovieById(String id) {
		return repoMap.get(id);
	}

	public MovieVO addMovie(MovieVO movie) {
		movie.setId(String.valueOf(System.currentTimeMillis()));
		return repoMap.put(movie.getId(), movie);
	}

	public Collection<MovieVO> allMovie() {
		return repoMap.values();
	}

	public MovieVO update(MovieVO movie) {
		return repoMap.put(movie.getId(), movie);
	}
}
```

> Please Do Comment and click here to get <a href="https://github.com/dgstack/WebServiceProj/archive/master.zip" title="Get Code Zip">code</a>