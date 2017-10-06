---
layout: sharedpost
title: Hazelcast vs. Infinispan (Benchmark)
author: digvijayb
date: 2017-10-05 10:54:46
categories:
- shared
- Java
tags: ['Java', 'Cache', 'Hazelcast', 'Infinispan']
img: NA
thumb: java.png
permalink: /shared/Hazelcast-vs-Infinispan-Benchmark
postDisclaimmer : This gist Belong to Mikael Gueck
---
Benchmark of Hazelcast vs. Infinispan, to find the best.

## Jboss Infinispan

Infinispan is a distributed in-memory key/value data store with optional schema. The In-Memory Data Grid (IMDG) by Red Hat.

### Feature

- Multi-user System with Apache 2 License
- Full text search 
- ORM Join Support
- Corruption Resistant
- Transactions
  - Concurrency control based on optimistic and pessimistic locks and total order
  - Integration with JTA/JTS
- Cloud and Virtualization Support
  - EC2, Openshift, Azure, Docker
- JCache (JSR-107) Provider
- Cluster Management : JMX
- Storage : On-Heap (JVM)
- Integrated Clustering 
  - Hibernate L2 Cache
  - WildFly
  - Spring Session
- Server Protocols
  - Memcached
  - HotRod
  - WebSocket

## Hazelcast

Infinispan is a open source In-Memory Data Grid (IMDG) by Hazelcast.

### Feature

- Multi-user System with Apache 2 License
- Real time analytics 
- Spring Data Support
- Data Encryption
- CEP Streaming
- Distributed Caching (Support Java Concurrency)
- Integrated Clustering 
  - Hibernate L2 Cache
  - Tomcat/Jetty/Grails Clustered Web Sessions
- JCache (JSR-107) Provider
- Cloud and Virtualization Support
  - AWS, Azure, Docker, Eureka, Kubernetes, Zookeeper Discovery
- Storage : On-Heap (JVM)
- Cluster Management : JMX API
- Server Protocols
  - Memcached
  - REST
  - Open Binary Client Protocol and Client Implementation Guide



### Result

| Feature                                  | Hazelcast | Infinispan |
| ---------------------------------------- | --------- | ---------- |
| Support for Distributed Hash Table architecture in peer-to-peer mode. | YES       | YES        |
| Support for Fully Replicated architecture in peer-to-peer mode. | NO        | YES        |
| Guarantee that the cache does never become inconsistent when atomic operations are called in peer-to-peer mode, even when cache is misconfigured? | YES       | NO         |
| Elastic deployments in client-server mode (grow automatically with the number of servers) | YES       | YES        |
| Guarantee that the cache does never become inconsistent when atomic operations are called in client-server mode, even when cache is misconfigured? | YES       | NO         |



### POM.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>mapbench</groupId>
    <artifactId>mapbench</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <dependency>
            <groupId>org.infinispan</groupId>
            <artifactId>infinispan-core</artifactId>
            <version>5.2.0.Final</version>
        </dependency>
        <dependency>
            <groupId>com.hazelcast</groupId>
            <artifactId>hazelcast</artifactId>
            <version>2.5</version>
        </dependency>
        <dependency>
            <groupId>com.carrotsearch</groupId>
            <artifactId>junit-benchmarks</artifactId>
            <version>0.5.0</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.11</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

</project>
```
### InfiniTest.java

```java
import com.carrotsearch.junitbenchmarks.BenchmarkOptions;
import com.carrotsearch.junitbenchmarks.BenchmarkRule;
import org.infinispan.manager.DefaultCacheManager;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Rule;
import org.junit.Test;

import java.util.UUID;

public class InfiniTest {

    @Rule
    public org.junit.rules.TestRule benchmarkRun = new BenchmarkRule();

    private static org.infinispan.Cache<String, String> map;

    @BeforeClass
    public static void beforeClass() throws Exception {
        map = new DefaultCacheManager().getCache("benchmark");
    }

    @AfterClass
    public static void afterClass() throws Exception {
        map.stop();
    }

    @BenchmarkOptions(benchmarkRounds = 1000000, warmupRounds = 100000)
    @Test
    public void testInfinispan() throws Exception {
        map.put(UUID.randomUUID().toString(), UUID.randomUUID().toString());
    }

}
```
> InfiniTest.testInfinispan: [measured 1000000 out of 1100000 rounds, threads: 1 (sequential)]
>  round: 0.00 [+- 0.00], round.block: 0.00 [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 10, GC.time: 4.30, time.total: 14.48, time.warmup: 1.70, time.bench: 12.78


### HazelTest.java

```java
import com.carrotsearch.junitbenchmarks.BenchmarkOptions;
import com.carrotsearch.junitbenchmarks.BenchmarkRule;
import com.hazelcast.config.Config;
import com.hazelcast.core.Hazelcast;
import com.hazelcast.core.HazelcastInstance;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Rule;
import org.junit.Test;

import java.util.Map;
import java.util.UUID;

public class HazelTest {

    @Rule
    public org.junit.rules.TestRule benchmarkRun = new BenchmarkRule();

    private static HazelcastInstance instance;

    private static Map<String, String> map;

    @BeforeClass
    public static void beforeClass() throws Exception {
        Config cfg = new Config();
        instance = Hazelcast.newHazelcastInstance(cfg);
        map = instance.getMap("benchmark");
    }

    @AfterClass
    public static void afterClass() throws Exception {
        instance.getLifecycleService().shutdown();
    }

    @BenchmarkOptions(benchmarkRounds = 1000000, warmupRounds = 100000)
    @Test
    public void testHazelcast() throws Exception {
        map.put(UUID.randomUUID().toString(), UUID.randomUUID().toString());
    }

}
```

> HazelTest.testHazelcast: [measured 1000000 out of 1100000 rounds, threads: 1 (sequential)]
>  round: 0.00 [+- 0.00], round.block: 0.00 [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 11, GC.time: 4.56, time.total: 32.52, time.warmup: 4.26, time.bench: 28.27



#### Ref. Link


- <a href="http://infinispan.org/features/" target="_blank">Infinispan Features</a>
- <a href="https://hazelcast.org/features" target="_blank">Hazelcast Features</a>
- <a href="http://vschart.com/compare/jboss-infinispan/vs/hazelcast" target="_blank">Feature Comparison @ VsChart</a>
- <a href="https://labs.consol.de/java-caches/index.html" target="_blank">Java Caches: Ehcache, Hazelcast, Infinispan @ consol</a>
