---
layout: post
title: Spring Annotations
author: digvijayb
tags: ['Spring', 'Annotation']
---

The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. A key element of Spring is infrastructural support at the application level: Spring focuses on the "plumbing" of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments.

##Features
- Dependency Injection
- Aspect-Oriented Programming including Spring's declarative transaction management
- Spring MVC web application and RESTful web service framework- 
- Foundational support for JDBC, JPA, JMS

Spring app is generally configured by XML based file but with release of spring 2.5 we saw the introduction of annotation in spring framework. Now spring app can be configured by annotation no need to have a spring-context.xml (the XML file used bean factory to initialisation of beans). 

These spring annotations is category as follows

- Core Spring Annotations
	- Context Configuration Annotations
	- Stereotyping Annotations
	- Spring MVC Annotations
	- Transaction Annotations
	- JMX Annotations
- Aspect Annotations
- JSR-250 Annotations
- Testing Annotations

###Core Spring Annotations
These annotations are used by Spring to guide creation and injection of beans, stereotype classes with regard to the application tier that they belong to. Spring 2.5 to make it easier to create Spring MVC applications with minimal XML configuration and without extending one of the many implementations of the Controller interface.

The **@Transactional** annotation is used along with the `<tx:annotation-driven>` element to declare transactional boundaries and rules as class and method metadata in Java. Declaring bean methods and properties as MBean operations and attributes is supported under JMX Annotations.

###Aspect Annotations
AOP (Aspect Oriented Programming) in spring leverages the set of annotations provided by AspectJ. AspectJ annotations to define Spring aspects, those aspects will be defined in the context of Spring AOP and will not be handled by the AspectJ runtime.

###JSR-250 Annotations
Spring's own set of annotations, Spring also supports a few of the annotations defined by JSR-250, which is the basis for the annotations used in EJB 3

####Testing Annotations

These annotations are useful for creating unit tests in the JUnit 4 style that depend on Spring beans and/or require a transactional context.

Do Comment and Share the post.

<sub>** content of this post are inspired for DZone Refcardz spring annotation this blog hold no owner ship of this post content.</sub>
