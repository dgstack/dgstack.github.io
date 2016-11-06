---
layout: post
title: Spring Annotations
author: digvijayb
date: 2016-08-15 16:54:46
categories:
- blog
- Java
tags: ['Spring', 'Annotation']
img: NA
thumb: spring-logo.png
permalink: /2016/08/15/Spring-Annotation-Ref/
postDisclaimmer: Content of this post are inspired for DZone Refcardz spring annotation this blog hold no owner ship of this post content
---
The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. A key element of Spring is infrastructural support at the application level: Spring focuses on the "plumbing" of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments.

## Features
- Dependency Injection
- Aspect-Oriented Programming including Spring's declarative transaction management
- Spring MVC web application and RESTful web service framework- 
- Foundational support for JDBC, JPA, JMS

Spring app is generally configured by XML based file but with release of spring 2.5 we saw the introduction of annotation in spring framework. Now spring app can be configured by annotation, no need to have a spring-context.xml (the XML file used by bean factory for initialisation of beans). <!--more-->

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

### Core Spring Annotations
These annotations are used by Spring to guide creation and injection of beans, stereotype classes with regard to the application tier that they belong to. Spring 2.5 makes it easier to create Spring MVC applications with minimal XML configuration and without extending one of the many implementations of the Controller interface.

#### Context Configuration Annotations [Table]

| Name	| Application	|
|-------|-------------|
| @Autowired	|Marks a constructor, field, setter method or config method as to be autowired by Spring's dependency injection facilities.| 
| @Configurable 	| Marks a class as being eligible for Spring-driven configuration.|
| @Order 	| Defines ordering, as an alternative to implementing the `org.springframework.core.Ordered` interface.| 
| @Qualifier 	| Guides autowiring to be performed by means other than by type.|
| @Required 	| Marks a method (typically a JavaBean setter method) as being 'required': that is, the setter method must be configured to be dependency-injected with a value.|
| @Scope	| When used as a type-level annotation in conjunction with @Component, @Scope indicates the name of a scope to use for instances of the annotated type. When used as a method-level annotation in conjunction with @Bean, @Scope indicates the name of a scope to use for the instance returned from the method.|

#### Stereotyping Annotations [Table]

| Name	| Application	|
|-------|-------------|
| @Component	|Indicates that an annotated class is a "component". Such classes are considered as candidates for auto-detection when using annotation-based configuration and classpath scanning.| 
| @Controller	|Stereotypes a component as a Spring MVC controller. Indicates that an annotated class is a "Controller" is like web controller. Such classes are considered as candidates for auto-detection when using annotation-based configuration and classpath scanning.|
| @Repository	|Indicates that an annotated class is a "Repository", originally defined by Domain-Driven Design (Evans, 2003) as "a mechanism for encapsulating storage, retrieval, and search behavior which emulates a collection of objects".|
| @Service	| Stereotypes a component as a service. Indicates that an annotated class is a "Service", originally defined by Domain-Driven Design (Evans, 2003) as "an operation offered as an interface that stands alone in the model, with no encapsulated state."|

#### Spring MVC Annotations

| Name	| Application	|
|-------|-------------|
| @Controller	|Stereotypes a component as a Spring MVC controller. Indicates that an annotated class is a "Controller" is like web controller. Such classes are considered as candidates for auto-detection when using annotation-based configuration and classpath scanning.|
| @InitBinder	|Annotation that identifies methods which initialize the WebDataBinder which will be used for populating command and form object arguments of annotated handler methods.|
| @ModelAttribute	|When applied to a method, used to preload the model with the value returned from the method. When applied to a parameter, binds a model attribute to the parameter.|
| @RequestMapping	|Maps a URL pattern and/or HTTP method to a method or controller type.|
| @RequestParam	|Binds a request parameter to a method parameter.|
| @SessionAttributes	|Specifies that a model attribute should be stored in the session.|

#### Transaction Annotations

| Name	| Application	|
|-------|-------------|
| @Transactional	|Declares transactional boundaries and rules on a bean and/or its methods.|

The **@Transactional** annotation is used along with the `<tx:annotation-driven>` element to declare transactional boundaries and rules as class and method metadata in Java. Declaring bean methods and properties as MBean operations and attributes is supported under JMX Annotations.

#### JMX Annotations

| Name	| Application	|
|-------|-------------|
| @ManagedAttribute		       |Used on a setter or getter method to indicate that the bean's property should be exposed as a MBean attribute. |
| @ManagedNotification	      |Indicates a JMX notification emitted by a bean. |
| @ManagedNotifications	     |Indicates the JMX notifications emitted by a bean. |
| @ManagedOperation	     	   |Specifies that a method should be exposed as a MBean operation. |
| @ManagedOperationParameter	   |Used to provide a description for an operation parameter. |
| @ManagedOperationParameters|Provides descriptions for one or more operation parameters. |
| @ManagedResource	      	   |Specifies that all instances of a class should be exposed a MBeans. |

These annotations, used with the <context:mbean-export> element, declare bean methods and properties as MBean operations and attributes.

###  Aspect Annotations
AOP (Aspect Oriented Programming) in spring leverages the set of annotations provided by AspectJ. 
AspectJ annotations defined for Spring aspects will be defined in the context of Spring AOP and will not be handled by the AspectJ runtime, rather they get bound by byte code weaving at compile time.

| Name	| Application	|
|-------|-------------|
| @Aspect |Declares a class to be an aspect. |
| @After |Declares a method to be called after a pointcut completes. |
| @AfterReturning |Declares a method to be called after a pointcut returns successfully. |
| @AfterThrowing |Declares a method to be called after a pointcut throws an exception. |
| @Around |Declares a method that will wrap the pointcut. |
| @Before |Declares a method to be called before proceeding to the pointcut. |
| @DeclareParents |Declares that matching types should be given new parents,that is, it introduces new functionality into matching types. |
| @Pointcut |Declares an empty method as a pointcut placeholder method. |


### JSR-250 Annotations
Spring's own set of annotations, Spring also supports a few of the annotations defined by JSR-250, which is the basis for the annotations used in EJB 3`

| Name	| Application	|
|-------|-------------|
| @PostConstruct |Indicates a method to be invoked after a bean has been created and dependency injection is complete. Used to perform any initialization work necessary. |
| @PreDestroy |Indicates a method to be invoked just before a bean is removed from the Spring context. Used to perform any cleanup work necessary. |
| @Resource |Indicates that a method or field should be injected with a named resource (by default, another bean). |

#### Testing Annotations

These annotations are useful for creating unit tests in the JUnit 4 style that depend on Spring beans and/or require a transactional context.

| Name	| Application	|
|-------|-------------|
| @AfterTransaction |Used to identify a method to be invoked after a transaction has completed. |
| @BeforeTransaction |Used to identify a method to be invoked before a transaction starts. |
| @ContextConfiguration |Configures a Spring application context for a test. |
| @DirtiesContext |Indicates that a method dirties the Spring container and thus it must be rebuilt after the test completes. |
| @ExpectedException |Indicates that the test method is expected to throw a specific exception. The test will fail if the exception is not thrown. |
| @IfProfileValue |Indicates that the test class or method is enabled for a specific profile configuration. |
| @NotTransactional |Indicates that a test method must not execute in a transactional context. |
| @ProfileValueSourceConfiguration |Identifies an implementation of a profile value source. The absence of this annotation will cause profile values to be loaded from system properties. |
| @Repeat |Indicates that the test method must be repeated a specific number of times. |
| @Rollback |Specifies whether or not the transaction for the annotated method should be rolled back or not. |
| @TestExecutionListeners |Identifies zero or more test execution listeners for a test class. |
| @Timed |Specifies a time limit for the test method. If the test does not complete before the time has expired, the test will fail. |
| @TransactionConfiguration |Configures test classes for transactions, specifying the transaction manager and/or the default rollback rule for all test methods in a test class. |
