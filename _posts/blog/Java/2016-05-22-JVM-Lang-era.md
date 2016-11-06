---
layout: post
title: Era of JVM language
author: digvijayb
date: 2016-05-22 16:54:46
categories:
- blog
- Java
tags: ['JVM', 'Language']
img: NA
thumb: java-duke.png
permalink: /2016/05/22/JVM-Lang-era/
postDisclaimmer: NA
---
**Java** is computer programming language with multi-paradigm of programming
*Object-oriented, structured, imperative,  concurrent and others* desgined and 
created by James Glosling and his team at Sun microsystems. Released in 1995
with its promised *"Write Once, Run Anywhere"* now after 21 years of initial 
reslease in 2016 Java is one of the most popular programming languages in use
particularly for client-server web applications, with a reported 9 million developers.<!--more-->

> **Index is an indicator of the popularity of programming language for May 2016**
> ![Programming Community index is an indicator of the popularity of programming language for May 2016](https://docs.google.com/drawings/d/11df4bNfMyxqwLgu0GEYgN-0LmgChS5cPNvmMzRrth6A/pub?w=1415&h=620)
> source : tiobe.com

<!--
<div class="image-section">
    <img src="https://docs.google.com/drawings/d/11df4bNfMyxqwLgu0GEYgN-0LmgChS5cPNvmMzRrth6A/pub?w=1415&h=620" 
    alt="Programming Community index is an indicator of the popularity of programming language for May 2016">
    <em class="cation">source : tiobe.com</em>
</div>
-->

## Java to run on JVM

The language java run on vitual machine not on OS directly which is called the JVM (Java Vitual Machine)
and that make the java so reliable, robus, platform independent language.
For a long time java has be only language which run on JVM because the jvm was 
desgined to work java not the other way around. So any computer programming language
that complie a program or a pieces of code that can run on JVM (Java Vitual Machine) is 
a JVM language.

## Alternative Languages for the JVM

Java is the primary programming language for JVM. So how these are alternative 
languages for jvm work some of them are interpreted by java program and some are
complie to Java bytecode and JIT during execution as regular java programs to impove 
performance. Some jvm language are Clojure, Groovy, Scala, Kotin, Xtend, Ceylon, 
JRuby, Jython and many more. for this we talk JRuby and Jython as they are implements
for Ruby and Python. These language has there own benefits and feature over java 
and even different programming paradigm then java. And these language are even large 
scala in production apps Like Linkedin and twitter. These language has very lucrative 
turnaround time as per productivity and performance. Scala is one of the heavily use 
language in concurrent apps as it boost huge performance impact then java and also 
considerable very small code base for the same app in java.

> **A Month of JVM languages: Groovy, Ceylon, Kotlin and Scala** <br/>
> *Post at zeroturnaround.com [https://goo.gl/PvwzJ4]*
>
> ![The next JVM Language to learn](https://docs.google.com/drawings/d/1_O6FsmWLlU3Dv49GnZsdsWe2_G4__dci6wBnTYJCS7A/pub?w=957&h=676)
> Image Source : zeroturnaround.com

### Scala

Scala is a statically typed programming language that fuses the object-oriented model and functional programming ideas.
It is desgined by Martin Odersky around 2001 released 2003. <br/>
**Compilation :** Bytecode, and JIT compiled<br/>
**Language type system :** Strong<br/>
**Binding :** Late, reflective<br/>
**Feature focus :** pattern matching <br/>
 **Support by :** Lightbend Inc. (formerly Typesafe Inc.) / Scala Solutions<br/>

### Groovy

Groovy is an object-oriented programming language much like Java, but meant to be used as scripting language to the Java platform with a dynamic-language feature set.
It is designed by James Strachan in 2003 <br/>
**Compilation :** Bytecode, and JIT compiled <br/>
**Language type system :** Strong, supports both static and dynamic typing <br/>
**Binding :** Late, reflective <br/>
**Feature focus :** safe navigation <br/>
**Support by :** Community-based <br/>

### Clojure

Clojure is a dynamically typed programming language that can be seen as a modern take on Lisp. It is radically different from what object-oriented programmers might be used to
It is created by Rich Hickey in 2007<br/>
**Compilation :** Bytecode, and JIT compiled<br/>
**Language type system :** Strong, dynamic<br/>
**Binding :** Late, reflective<br/>
**Feature focus :** homoiconicity<br/>
**Support by :** Community-based<br/>

### Kotlin

Kotlin is a statically typed object-oriented language. Its main design goals are to be compatible with Java’s API, have a type system that catches more errors at compile time, and be less verbose than Java. Kotlin’s designers say that Scala is a close choice to match its design goals, but they dislike Scala’s complexity and long compilation time compared to Java. Kotlin aims to tackle these issues.
It is desgined by JetBrains, developed JetBrains and open source contributors and created in 2011. <br/>
**Compilation :** Compiles to JavaScript or Java bytecode, JIT compiled <br/>
**Language type system :** Strong, static <br/>
**Binding :** Early <br/>
**Feature focus :** smart casts <br/>
**Support by :** JetBrains Inc. <br/>

### Ceylon

Ceylon, a statically typed object-oriented language, to give Java programmers a language that’s easy to learn and understand (because of syntax that’s similar to Java) but less verbose. Ceylon includes more type system features than Java.
It is desgined by Gavin King, Red Hat in 2011. <br/>
**Compilation :** Compiles to JavaScript or Java bytecode, JIT compiled <br/>
**Language type system :** Static, strong <br/>
**Binding :** Early <br/>
**Feature focus :** for comprehensions. <br/>
**Support by :** Red Hat <br/>

### Xtend

Xtend is a statically typed object-oriented language. One way it differs from other languages is that it compiles to pretty-printed Java code rather than bytecode. As a result, you can also work with the generated code.
It is desgined by Sven Efftinge, Sebastian Zarnekow in 2011.
**Compilation :** Bytecode, and JIT compiled. <br/>
**Language type system :** Static, strong, inferred. <br/>
**Binding :** Early. <br/>
**Feature focus :** active annotations. <br/>
**Support by :** itemis. <br/>


There more languages which very high productivity and performance There **Gosu** by Guidewire Software Inc. / Community and **Rhino** Mozilla Foundation in 1997 now support by mozilla / oracle / community

**Gosu** borrows concepts from other languages, such as Ruby, Java, and C#, and is mainly used as a scripting language within other JVM software systems. However, Gosu has some innovative, very interesting features such as the Open Type System, which allows it to be easily extended for compile-time type checking, and its use of XML and XSL as native types. Its syntax is compact and concise, lending to its simplicity

**Rhino** is a JavaScript engine, bundled as part of Java SE, which executes JavaScript code and allows for interoperability with Java code. The engine works in either interpreted or compiled mode, and is meant to execute server-side JavaScript code as part of an enterprise application solution.


> **Other information and references links**
>
>- <a href="https://goo.gl/eOrx01" target="_blank">Why Should I Learn Scala?</a>
>- <a href="https://goo.gl/PvwzJ4" target="_blank">A Month of JVM languages: Groovy, Ceylon, Kotlin and Scala</a>
>- <a href="http://goo.gl/IeWOB3" target="_blank">Alternative Languages for the JVM</a>


Please do comment and share.


