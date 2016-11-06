---
layout: post
title: Web Service Jargon (JAX-WS)
author: digvijayb
date: 2016-09-17 16:54:46
categories:
- blog
- Java
tags: ['JAXB', 'Java', 'JAX-WS', 'Web Service']
img: NA
thumb: java.png
permalink: /2016/09/17/Web-Service-Jargon-JAXWS/
postDisclaimmer : Content of this post are inspired content for wikipedia.org, w3schools.com, tutorialspoint.com, javabrains.io this blog hold no owner ship of this post content
---
Web Service is web app which offer intersystem commutation between one electronic device to another electronic device over World Wide Web by using HTTP (Hyper Text Transfer Protocol). Web Service can be written in enterprise and high level language like Java and C#. And other hand client of this web service could be  embedded program written in C or any other embedded language of your house hold refrigerator connected to internet.

Web services may use **SOAP** over **HTTP** protocol, allowing less costly interactions over the Internet than via proprietary solutions like **EDI/B2B**

The Java API for XML Web Services (JAX-WS) is a Java programming language API for creating web services, particularly SOAP services. JAX-WS is one of the Java XML programming APIs. It is part of the Java EE platform.<!--more-->

>  **Jargon** are special words or expressions used by a professional or group that are difficult for others to understand.

<p>
<div class="toc">
<ul>
<li><a href="#web-service-jargon-jax-ws">Web Service Jargon (JAX-WS)</a><ul>
<li><a href="#wsdl">WSDL</a></li>
<li><a href="#uddi">UDDI</a></li>
<li><a href="#soap">SOAP</a></li>
<li><a href="#sei">SEI</a></li>
</ul>
</li>
</ul>
</div>
</p>

## WSDL
WSDL stand for **W**eb **S**ervice **D**efination **L**anguage. This is an XML Document which act as an interface for the signature of web method. This signature is the contract for the API to be consumed by the Client.
This wsdl is generally parsed by client programs to build a proxy interface or stub to call the web service like regular method in the native client language. 

In Java **JAXB** is commonly used to generate proxy class or stub. **wsgen.exe**, a utility you get along with JDK. 

## UDDI
UDDI stand for **U**niversal **D**escription, **D**iscovery and **I**ntegration. is a platform-independent, Extensible Markup Language protocol that includes a (XML-based) registry by which businesses worldwide can list themselves on the Internet, and a mechanism to register and locate web service applications. UDDI is an open industry initiative, sponsored by the Organization for the Advancement of Structured Information Standards (OASIS), for enabling businesses to publish service listings and discover each other, and to define how the services or software applications interact over the Internet.

UDDI was originally proposed as a core Web service standard. It is designed to be interrogated by SOAP messages and to provide access to Web Services Description Language (WSDL) documents describing the protocol bindings and message formats required to interact with the web services listed in its directory.

In short UDDI is an XML-based standard for describing, publishing, and finding web services. *Like Yellow Pages of Web Services*

## SOAP
SOAP stand for **S**imple **O**bject **A**ccess **P**rotocol. It's a protocol by which we can access an object created in one technology by other technology over world wide web and is simple to do so.

SOAP enables communication between two applications via arguments and returned value. These two application could be written in two different languages or they can be server side applications or client side applications.The communication of the passing argument or getting returned value between two application witten in different language and technologies like server app and client app. As we know  web service provide the interpotablity among different technologies we can simply pass java string object to a C++ app. To handle this problem we choose a common and uniform format that can be used by both the client and server to communicate. XML is the format which is used by server and client and the set of standard protocols followed by both with XML format is called Simple Object Access Protocol.

In short SOAP (Simple Object Access Protocol) is a protocol specification for exchanging structured information in the implementation of web services in computer networks.

## SEI

SEI stand for **S**ervice **E**ndpoint **I**nterface. As we know that SOAP is a communication layer in web service. Our code call or method call is to be transformed into a soap message. SEI is used to convert our method on client proxy or stub to a soap message in XML format and deliver it to the server. 

In short  a soap based web service can be implemented as a single java class. An endpoint interface, also known as a service endpoint interface (SEI), is a term used in Java Platform, Enterprise Edition.

> Note : Every programming language or technology has it own native SEI to provide easy access to web service and make developer free of converting the method call to soap message.

So that's all for web service jargon. Do comment and share the post.
