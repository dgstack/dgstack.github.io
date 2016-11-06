---
layout: post
title: Hello World With Mustache.java
author: digvijayb
date: 2016-05-07 16:54:46
categories:
- blog
- Java
tags: ['Java','Mustache']
img: NA
thumb: thumb01.jpg
permalink: /2016/05/07/Hello-World-With-Mustache/
postDisclaimmer : NA
---
## Simple of Templating by mustache.java

Mustache.js is very popular templating js for web. Today we going to look at java version of mustache.

So for getting started we need a file which will act like a template for our program. 
For this we a file **template.mustache** which is simple text for a mail with some place holder in mustache syntax.<!--more-->

#### template.mustache

```
Hi {{ "{{name"}}}},

Your Account number {{"{{accountNo"}}}} mapped with your aardhar card no. {{"{{ uuid" }}}}
Is {{ "{{status" }}}}. Thank you for your assistance.
{{ "{{#isPassed }}}}
Congrat!!! Now Enjoy the benefits...
{{ "{{/isPassed" }}}}
{{ "{{#isFailed" }}}}
Sorry !!! Please try agian
{{ "{{/isFailed" }}}}

Thank You
{{"{{sender"}}}}
```

Now when we have our template file ready. we going to use this file a template publish mail to a person in java. And just for now it is going to print it in console because this example is just to give an idea about mustache.java more comprehensive mustache will be covered in later post.

#### TestMushache.java

```java

class TestMushache{
   
    public void main(String... args){
     
                 MustacheFactory mf = new DefaultMustacheFactory();
         Mustache mustache = mf.compile("template.mustache");
         System.out.println();
         Map map = new HashMap(){
             {
                 put("name", "TestName");
                 put("accountNo", 123679);
                 put("uuid","101010-101010-10101-0420");
                 put("status", "Failed because invalid information");
                 put("isPassed", 0);
                 put("isFailed", 1);
                 put("sender", "Test Sender");
             }
         };
                mustache.execute(new PrintWriter(System.out), map).flush();
     }

}
```

### Output 

The following is output on the console

```
Hi TestName,

Your Account number 123679 mapped with your aardhar card no. 101010-101010-10101-0420
Is Failed because invalid information. Thank you for your assistance.


Sorry !!! Please try agian


Thank You
Test Sender
```

### Maven

To download jar for the mustache you vist this link.

<a href="https://mvnrepository.com/artifact/com.github.spullara.mustache.java/compiler/0.9.2" target="_blank">
    https://mvnrepository.com/artifact/com.github.spullara.mustache.java/compiler/0.9.2
</a>

And the maven dependency is followed below.

```xml
    <dependency>
		<groupId>com.github.spullara.mustache.java</groupId>
		<artifactId>compiler</artifactId>
		<version>0.9.2</version>
	</dependency>
```

Please do comment and share the post.