---
layout: post
title: Creating Immutable Class
author: digvijayb
date: 2016-05-16 16:54:46
categories:
- blog
- Java
tags: ['Java', 'immutable']
img: NA
thumb: logo.png
permalink: /2016/05/16/Creating-Immutable-class/
postDisclaimmer : NA
---
## How to create immutable class

Immutable Classes are those who’s object once created it can’t be change (or value can’t change).
So to create Immutable Class in java there are some simple that are listed below.

### Rules for immutable class:

- No setter should provide for the field.
- All field should be final and private.
- Make the class final as an immutable class should not be inherited or an another for this could be to make the constructor private and construct instances in factory methods.
- If there is any field which is a references to mutable objects make sure that it should not be modified : 
   - Don’t provide methods that modify the mutable objects. 
   - Don’t share references to the mutable objects. Always create a copy of the object and provide that for any operation.

<!--more-->

### Sample of Immutable Class

```java
import java.util.Date

public final class ImmutableSample{

    private final int intField; // Is value type 
    private final String stringField;// Is Immutable
    private final Date dateField;// Is mutable

    private ImmutableSample(int intField, String stringField, Date dateField){
        this.intField = intField;
        this.stringField = stringField;
        this.dateField = new Date(dateField.getTime());
    }


    public static ImmutableSample getInstance(int intField, String stringField, Date dateField){
        return new ImmutableSample(fld1, fld2, date);
    }

    //Provide no setter methods

    /**
    * int is value type variable, So the value in intField going change every 
    * */
    public int getIntField() {
        return intField;
    }

    /**
    * String class is also immutable so we can return the instance variable as it is
    * */
    public String getStringField() {
        return stringField;
    }

    /**
    * As Date field is mutable so we create a copy of dateField. So that modification will not effect dateField.
    * */
    public Date getDateField() {
        return new Date(dateField.getTime());
    }

    @Override
    public String toString() {
        return intField +" - "+ stringField +" - "+ dateField;
    }
}

```

## Some advantage of Immutable Object

- They are thread-safe so don’t have and synchronization issues.
- They can be best use in Map’s key and Set’s element.
- It easier to parallelize your program as there are no conflicts among immutable objects.
- They have their class invariant established once upon construction, and it never needs to be checked again

Please do comment and suggest