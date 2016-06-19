---
layout: post
title: Builder pattern for creating object
author: digvijayb
tags: ['Builder Pattern','Java']
---

There are number of creational patterns which are use to create instances of class, but were builder pattern fit in and stand out from other creational pattern like static factory, telescoping constructor, javabean pattern and other's. Is its ability to scale with a large number of parameters. So let's get started with an example.

Let's consider a case where we have to create object of a Product class with several field like name, description, sellPrice, costPrice, maxRetailPrice, discount and brand. For selling a product name, sellPrice and description are mandatory field, a product object is incomplete without these three information.So we are going to implement builder pattern in this case to incur the problem.

Instead of making the desired object directly, the client calls a constructor (or static factory) with all of the required parameters and gets a builder object. Then the client calls setter-like methods on the builder object to set each optional parameter of interest. Finally, the client calls a parameterless build method to generate the object, which is immutable. The builder is a static member class of the class it builds.

{% highlight java %}

package com.dgstack.blog.pattern.creation;

public class Product {

    private final String name;
    private final String description;
    private final String brand;
    private final double sellPrice;
    private final double costPrice;
    private final double maxRetialPrice;
    private final float discount;

    public static class Builder{
        //mandatory field
        private final String name;
        private final String description;
        private final double sellPrice;

        //option field
        private String brand = "";
        private double costPrice = 0.0;
        private double maxRetialPrice = 0.0;
        private float discount = 0.0F;

        public Builder(String name, String description, double sellPrice){
            this.name = name;
            this.description = description;
            this.sellPrice = sellPrice;
        }

        public Builder brand(String brand){
            this.brand = brand;
            return this;
        }

        public Builder costPrice(double costPrice){
            this.costPrice = costPrice;
            return this;
        }
        public Builder maxRetialPrice(double maxRetialPrice){
            this.maxRetialPrice = maxRetialPrice;
            return this;
        }
        public Builder discount(float discount){
            this.discount = discount;
            return this;
        }

        public Product build(){
            return new Product(this);
        }
    }


    private Product(Builder builder){
        this.name = builder.name;
        this.description = builder.description;
        this.brand = builder.brand;
        this.sellPrice = builder.sellPrice;
        this.costPrice = builder.costPrice;
        this.maxRetialPrice = builder.maxRetialPrice;
        this.discount = builder.discount;
    }

}
{% endhighlight %}

Now we look at client code (or calling code). 

{% highlight java %}
class BuilderClient{
    public static void builderClient(){
        /**  Some Code */
        
        //fill in the required field
        Product.Builder builder 
            = new Product.Builder("iPhone5", "iPhone 5C", 499.90);
        
        //chaining is done as it return itself
        builder.brand("apple").maxRetialPrice(699.99);
        
        // building the immutable object of product iphone
        Product iPhone = builder.build(); 
        
        /*** Some Code that use iPhone object*/
    }
}
{% endhighlight %}

For more in on the topic refer to : 

- Design Patterns: Elements of Reusable Object-Oriented Software aka Gang of Four (GOF).
- Effective Java by Joshua Bloch
