---
layout: post
title: Hello World With Mustache.java
author: digvijayb
tags: ['Java','Mustache']
---
##Simple of Templating by mustache.java

Mustache.js is very popular templating js for web. Today we going to look at java version of mustache.

So for getting started we need a file which will act like a template for our program. 
For this we a file **template.mustache** which is simple text for a mail with some place holder in mustache syntax.

###template.mustache

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

###TestMushache.java

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