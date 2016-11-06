---
layout: post
title: Increase JVM Size In WebSphere Application Server (WAS)
author: digvijayb
date: 2016-11-06 00:00:00
categories:
- blog
- Ops
tags: ['Java', 'IBM', 'Config']
img: NA
thumb: logo.png
postDisclaimmer : NA
---
#### How to increase JVM Memory Size in WebSphere Application Server (WAS).

Server getting very slow and hanging up a lot sometime ending up by "java.lang.OutOfMemory" error frequently while deploying or republishing J2EE Web application in WebSphere Application Server.

Today, I'll telling how to set initial heap size and maximum heap size of JVM. that can solve these issues So to do so start your WAS first. then After the server has been started run the admin console from the IDE I am using IBM RSA(Rational Software Architect for WebSphere) you could be use whatever you like.<!--more-->

Or the other way is, in your web browser open `http://localhost:9060/ibm/console/`  9060 is the default port for WAS WebConsole.

![Open  this URL in web browser](http://2.bp.blogspot.com/-JkO-F0UjzYw/VOWtbuFtuPI/AAAAAAAAAcs/uQM_5vLNId4/s1600/1.JPG)

In WAS web console in left side in navigation menu, click on "Server -> Server Types -> webSphere application servers"

![Click On Circled link](http://2.bp.blogspot.com/-30xI5bMslR0/VOWte4iOhfI/AAAAAAAAAc4/qHJRqyjTg1o/s1600/2.JPG)

Then click on the server your chose, in my there is only one server1

![Click On Circled link](http://1.bp.blogspot.com/-pzVP7uoXCRs/VOWte4JS5OI/AAAAAAAAAc0/QVAL_DyTeck/s1600/3.JPG)

In there under Server Infrastructure click on "Java and Process Management -> Process definition"

![Click On Circled link](http://3.bp.blogspot.com/-jNUbquEaMT4/VOWte3CmObI/AAAAAAAAAc8/iiUoOLB4rdo/s1600/4.JPG)

In there under Additional Properties click on "Java Virtual Machine"

![Click On Circled link](http://3.bp.blogspot.com/-pmJcr34HFdU/VOWtf4vrUWI/AAAAAAAAAdY/Qh_lbaHNRow/s1600/5.JPG)

Here you can set Initial heap size and similarly Maximum heap size in MB(megabyte). And click on apply.

![Click On Circled link](http://1.bp.blogspot.com/-ZVV1SvUWI3Q/VOWtgKFYJyI/AAAAAAAAAdI/tw-5Eu_mvCY/s1600/6.JPG)

Then click on the save button to save the setting. Then restart the server and enjoy.

![Click On Circled link](http://3.bp.blogspot.com/-a6xS82OC99o/VOWtgAGU99I/AAAAAAAAAdM/AzHmtrDWHPc/s1600/7.JPG)

