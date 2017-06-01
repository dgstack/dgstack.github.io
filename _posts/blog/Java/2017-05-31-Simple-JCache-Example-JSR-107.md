---
layout: post
title: Simple JCache Example (JSR-107)
author: digvijayb
date: 2017-05-31 16:54:46
categories:
- blog
- Java
tags: ['JCache', 'Java', 'Ehcache', 'JSR-107']
img: NA
thumb: java-duke.png
postDisclaimmer: NA
---
**JCache** is a common API for using caching in Java. Specifies API and semantics for temporary, in memory caching of Java objects, including object creation, shared access, spooling, invalidation, and consistency across JVM's.

Caching is something that everyone has implemented in there app. There are *n* numbers of services and system available from just a simple Concurrent Map implementation to all the way to caching servers like Redis and memcache. Each cache provider have distinct api to use. JCache provide a standard set of API to implement caching in your app. JCache is based on JSR-107, JSR was submitted in year 2001 and finally released on 18 Mar 2014.

> JCache is just like Jdbc but for caching provider rather then database.
> Jdbc is comman api interact with any database, JCache is to interact with caching providers.

## List of JCache Providers

- Apache Ignite
- Blazing Cache
- cache2k
- Caffeine
- Coherence
- Ehcache
<!--more-->
- Hazelcast
- Infinispan
- Redisson
- Triava Cache
- WebSphere eXtreme Scale


## Dependencies

In this example I have used **ehcache** as our a caching provider and it is widely used in java world.

```xml
<dependencies>
  <dependency>
    <groupId>org.ehcache</groupId>
    <artifactId>jcache</artifactId>
    <version>1.0.0</version>
  </dependency>

  <dependency>
    <groupId>javax.cache</groupId>
    <artifactId>cache-api</artifactId>
    <version>1.0.0</version>
  </dependency>
</dependencies>
```

## JCacheSample.java

```java
package com.dgstack.dev.jcache;

import javax.cache.Cache;
import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.spi.CachingProvider;

public class JCacheSample {

	public static void main(String[] args) {

		final CachingProvider cachingProvider = Caching.getCachingProvider();

		System.out.println("cachingProvider = " + cachingProvider);

		final CacheManager cacheMgr = cachingProvider.getCacheManager();

		final MutableConfiguration<String, String> configuration = new MutableConfiguration<>();

		configuration.setTypes(String.class, String.class);

		cacheMgr.createCache("sampleCache", configuration);

		final Cache<String, String> sampleCache =
                    cacheMgr.getCache("sampleCache", String.class, String.class);

		sampleCache.put("name", "Digivjay");
		sampleCache.putIfAbsent("name", "Digvijay Bhakuni"); // This will not update the values
		sampleCache.put("jobs", "Developer");

		sampleCache.forEach(e -> {
			System.out.println("(KEY:" + e.getKey() + ")=>[VAL:"+ e.getValue()+"]");
		});

	}

}
```

`Caching.getCachingProvider()` return **CacheProvider** it check with current classloader that if their is any Cache Provider is loaded, if there is no cache provider then it throws `new CacheException("No CachingProviders have been configured")` and if more then one provider then it throws `new CacheException("Multiple CachingProviders have been configured when only a single CachingProvider is expected")`.

In our case it will return an instance of **Echache Provider** because thier is only one cache provider in classpath.

When working with **multiple cache providers** you can use `Caching.getCachingProvider(String name)`  method take the name.
For Echache it would be `org.ehcache.jcache.JCacheCachingProvider`

## Console Output

```
cachingProvider = org.ehcache.jcache.JCacheCachingProvider@355da254
(KEY:jobs)=>[VAL:Developer]
(KEY:name)=>[VAL:Digivjay]
```

This JCache also have support @Annotation and there usage is similar to Spring Caching API. I will post an example explaining usage of jcache annotation base api.


## Links

> - <a href="https://goo.gl/nTivQR" target="_blank">https://www.jcp.org/en/jsr/detail?id=107</a>
> - <a href="https://goo.gl/rCUG1E" target="_blank">https://spring.io/blog/2014/04/14/cache-abstraction-jcache-jsr-107-annotations-support</a>
> - <a href="https://goo.gl/qSEGxX" target="_blank">https://vaadin.com/blog/-/blogs/jcache-why-and-how-</a>
> - <a href="https://goo.gl/duxWXv" target="_blank">https://gist.github.com/digvijaybhakuni/c33dc5eefda6d7ab4e32c831ad20a9b2</a>
> - <a href="https://goo.gl/BXclWc" target="_blank">https://dzone.com/refcardz/java-caching</a>
> - <a href="https://goo.gl/ytSeqf" target="_blank">https://jcp.org/aboutJava/communityprocess/implementations/jsr107/index.html</a>
