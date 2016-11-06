---
layout: post
title: Why Iterator interface provides remove() method but no add() method? 
author: digvijayb
date: 2015-09-08 16:54:46
categories:
- blog
- Java
tags: ['Java','Map', 'Collection']
img: NA
thumb: java.png
permalink: /2015/09/08/Why-Iterator-interface-provides-remove-method-but-no-add/
postDisclaimmer: NA
---
The Interface Iterator provider as three method that are `hasNext()`, `next()` and `remove()`. 
This means that we can remove any element from a collection while iterating over it. so why we cannot add element to the collection. Why they don't provide `add()` method.


Answer is, that they can't allow you to concurrently read and add element to a collection. The Iterator work on any collection whether it Set, List or Map. So it does know very much the on which underlying it's going to work and we know all the collection implementation maintain ordering of elements based on some algorithm. *For example*  `TreeSet` maintains the order of elements in by implementation Red-Black Tree data structure. Therefore if we tried to add an element to `TreeSet` using the iterator at given index or position of iterator. it might corrupt the state of the underlying data structure. So, the `add()`     method could change structural state of a data structure. <!--more-->

![Iterator is at this position we try add ‘0’ value at this position then it will break the logic of sorted tree and be no long sorted ](https://docs.google.com/drawings/d/1q96NuP_ani_Hy8O2mnYCt4N8OlBat-opVIrDT0f_YiA/pub?w=1016&h=719)

While `remove()` method doesn't change or violate  any state and rule of data structure or of the algorithm.

ListIterator provide the `add()` methods because it know the location where it needs to add the newly created element as List preserves the order of its element in order of their insertion.


Please do comment...