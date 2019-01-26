---
layout: post
title: "Struts Spring Hibernate Intregration"
author: digvijayb
tags: ['Java', 'Struts', 'Spring', 'Hibernate']
date: 2018-07-19 16:54:46
author: digvijayb
categories:
- Java
- blog
img: NA
thumb: logo.png
permalink: /draft/java/20180719/Struts-Spring-Hibernate-Intregration-With-Easy
postDisclaimmer: NA
---
This is sample application that demo the Intregration of Struts 1.x with Spring and Hibernate.
Most of the old java web apps were build you struts 1.x it was great web framework build apps in last decade but this 2018 it has been 10 years of last stable release of struts 1.3. 

This example use struts as frontcontroller and all business/service layer done in spring and the Data Access layer is taken care by Hibernate.

Project Structure
-----
This project structure is maven-archetype-webapp. And depencencies use are listed below. 
>- struts-core 1.3.10
>- struts-taglib 1.3.10
>- spring-struts 3.1.1 
>- spring-core 3.1.1
>- spring-web 3.1.1 
>- hibernate 3.2.2 

> Note: You can update the spring and hibernate as per you application.

<!--more-->

pom.xml
---
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>project-crud-ops</groupId>
	<artifactId>project-crud-ops</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>war</packaging>
	<name>DemoProject</name>
	<description>Project CRUD Demo</description>
	<build>
		<defaultGoal>install</defaultGoal>
		<sourceDirectory>src</sourceDirectory>
		<plugins>
			<plugin>
				<artifactId>maven-compiler-plugin</artifactId>
				<version>3.1</version>
				<configuration>
					<source>1.7</source>
					<target>1.7</target>
				</configuration>
			</plugin>
			<plugin>
				<artifactId>maven-war-plugin</artifactId>
				<version>2.4</version>
				<configuration>
					<warSourceDirectory>WebContent</warSourceDirectory>
					<failOnMissingWebXml>false</failOnMissingWebXml>
				</configuration>
			</plugin>
		</plugins>
	</build>
	<dependencies>
		<!-- Spring 3.1.1 dependencies -->
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-core</artifactId>
			<version>3.1.1.RELEASE</version>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-web</artifactId>
			<version>3.1.1.RELEASE</version>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-struts</artifactId>
			<version>3.1.1.RELEASE</version>
		</dependency>

		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-orm</artifactId>
			<version>3.1.1.RELEASE</version>
		</dependency>



		<!-- Struts 1.3 dependencies -->
		<dependency>
			<groupId>org.apache.struts</groupId>
			<artifactId>struts-core</artifactId>
			<version>1.3.10</version>
		</dependency>

		<dependency>
			<groupId>org.apache.struts</groupId>
			<artifactId>struts-taglib</artifactId>
			<version>1.3.10</version>
		</dependency>

		<dependency>
			<groupId>org.apache.struts</groupId>
			<artifactId>struts-extras</artifactId>
			<version>1.3.10</version>
		</dependency>

		<!-- MySql dependencies -->

		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<version>5.1.9</version>
		</dependency>

		<!-- Hibernate 3.2 dependencies -->

		<dependency>
			<groupId>org.hibernate</groupId>
			<artifactId>hibernate</artifactId>
			<version>3.2.2.ga</version>
		</dependency>

		<dependency>
			<groupId>org.hibernate</groupId>
			<artifactId>hibernate-annotations</artifactId>
			<version>3.2.1.ga</version>
		</dependency>

		<dependency>
			<groupId>dom4j</groupId>
			<artifactId>dom4j</artifactId>
			<version>1.6.1</version>
		</dependency>

		<dependency>
			<groupId>commons-logging</groupId>
			<artifactId>commons-logging</artifactId>
			<version>1.1.1</version>
		</dependency>

		<dependency>
			<groupId>commons-collections</groupId>
			<artifactId>commons-collections</artifactId>
			<version>3.2.1</version>
		</dependency>

		<dependency>
			<groupId>cglib</groupId>
			<artifactId>cglib</artifactId>
			<version>2.2</version>
		</dependency>

		<dependency>
			<groupId>antlr</groupId>
			<artifactId>antlr</artifactId>
			<version>2.7.7</version>
		</dependency>

		<dependency>
			<groupId>javax.transaction</groupId>
			<artifactId>jta</artifactId>
			<version>1.1</version>
		</dependency>

		<dependency>
			<groupId>org.hibernate.javax.persistence</groupId>
			<artifactId>hibernate-jpa-2.0-api</artifactId>
			<version>1.0.0.Final</version>
		</dependency>

		<dependency>
			<groupId>asm</groupId>
			<artifactId>asm</artifactId>
			<version>3.3.1</version>
		</dependency>


	</dependencies>
</project>
```

## ApplicationContext.xml

`ApplicationContext.xml` is spring appilcation context file.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:p="http://www.springframework.org/schema/p"
	xsi:schemaLocation="http://www.springframework.org/schema/beans  
        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

	<bean
		class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
		<property name="location">
			<value>WEB-INF/app.properties</value>
		</property>
	</bean>

	<import resource="spring-hibernate-config.xml" />

	<bean id="projectDAO" class="com.dgstack.dev.examples.dao.impl.ProjectDAOImpl" scope="prototype">
		<property name="hibernateTemplate" ref="hTemplate" />
	</bean>

	<bean id="service" class="com.dgstack.dev.examples.service.impl.ProjectServiceImpl" scope="singleton">
		<lookup-method name="createProjectDao" bean="projectDAO" />
	</bean>

	<bean name="/project" class="com.dgstack.dev.examples.action.ProjectAction">
		<property name="service" ref="service" />
	</bean>

</beans>
```