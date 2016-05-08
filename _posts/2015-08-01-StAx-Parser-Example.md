---
layout: post
title: StAX Parser Example
author: digvijayb
tags: ['Java', 'StAX', 'XML']
---
##Using StAX Parser
Parsing an XML Document with **StAX parser** which is one of the fastest way to parser document in current days. Having very **less memory footprint**, easy to implement then previous generation of parser like <a href="https://docs.oracle.com/javase/tutorial/jaxp/dom/readingXML.html" target="_blank"><strong><em>DOM</em></strong></a> (Document Object Model) parse and others. This make StAX must use API for modern day application it is fast and lightweight. So,  below we have a easy program to parse down an XML document using StAX.

![Overview StAX Pull Model](https://docs.google.com/drawings/d/1PtvXEfkpLIX-oBpnX5l0UrA1IETes-lG5VDrlp1afAY/pub?w=480&h=360)

><a href="http://stax.codehaus.org/" target="_blank"><strong>StAX<strong></a> (Streaming API for XML) is an application programming interface (API) to read and write XML documents, originating from the Java programming language community. 
 It is one most fastest API to parse an XML document and very lightweight too. StAX work's on **pull** style of parsing unlike to SAX parser which is **push** style parsing.
>

###Feature of StAX 
>- Use **Pull Model** approach to parser a document.
>- Memory footprint is very small
>- Available in **JDK 1.6** onward. No need of any addition jar
>- Most **efficiently access XML** (especially with cursor API).
>- Very easy to use. 

In the following example  an XML document contain list of user information.  And we are going to parser that XML document list of user object java.  *"Let's Stack Up The Code"*

####user.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<users>
    <user id="1">
        <name>Digvijay Bhakuni</name>
        <username>digvijayb</username>
        <password>password1</password>
        <gender>Male</gender>
        <age>22</age>
        <location>Gurgaon, India</location>
    </user>
    <user id="2">
        <name>Rahul Sharma</name>
        <username>rahuls</username>
        <password>password2</password>
        <gender>Male</gender>
        <age>22</age>
        <location>New Delhi, India</location>
    </user>
    <user id="3">
        <name>Pankaj Bhakser</name>
        <username>pbhakser</username>
        <password>password3</password>
        <gender>Male</gender>
        <age>29</age>
        <location>Gurgaon, India</location>
    </user>
    <user id="4">
        <name>Pankaj Mishar</name>
        <username>pankajm</username>
        <password>password4</password>
        <gender>Male</gender>
        <age>23</age>
        <location>Nodia, India</location>
    </user>
        <user id="5">
        <name>Ajay Garg</name>
        <username>ajayg</username>
        <password>password5</password>
        <gender>Male</gender>
        <age>25</age>
        <location>Gurgaon, India</location>
    </user>
</users>
```
Now creating POJO *UserVO.java* this object will hole the value of user.
####UserVO.java
```java
package com.dgstack.dev.vo;

/**
 * @author digvijayb
 *
 */
public class UserVO {

	public UserVO() {
	}

	private int id;
	private String name;
	private String userid;
	private String password;
	private String gender;
	private int age;
	private String location;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	@Override
	public String toString(){
		StringBuilder builder = new StringBuilder("{ ");
		builder.append("id : ").append(id).append(", ");
		builder.append("name : ").append(name).append(", ");
		builder.append("userid : ").append(userid).append(", ");
		builder.append("password : ").append(password).append(", ");
		builder.append("gender : ").append(gender).append(", ");
		builder.append("age : ").append(age).append(", ");
		builder.append("location : ").append(location).append(" }");
		builder.append("\n");
		return builder.toString();
	}
}
```
Using StAX API to read Xml *StAXReader.java*
####StAXReader.java
```java
package com.dgstack.dev;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import javax.xml.namespace.QName;
import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.Attribute;
import javax.xml.stream.events.EndElement;
import javax.xml.stream.events.StartElement;
import javax.xml.stream.events.XMLEvent;

import com.dgstack.dev.vo.UserVO;

/**
 * @author digvijayb
 */
public class StAXReader {

	public List<UserVO> getUserList(String path) throws FileNotFoundException, XMLStreamException{
		StartElement startElement = null;
		EndElement endElement = null;
		Attribute attribute = null;
		QName idAttr =new QName("id"); 
		XMLEvent event = null;
		List<UserVO> list = null;
		UserVO userVO = null;
		String currentValue = "";
		XMLInputFactory inputFactory = XMLInputFactory.newInstance();
		XMLEventReader reader  = inputFactory.createXMLEventReader(new  FileReader(path));

		while(reader.hasNext()){
			event = reader.nextEvent();
			if(event.isStartElement()){
				startElement = event.asStartElement();
				if("users".equals(startElement.getName().getLocalPart())){
					list = new ArrayList<UserVO>();
				}else if("user".equals(startElement.getName().getLocalPart())){ 
					userVO = new UserVO();
					attribute = startElement.getAttributeByName(idAttr);
					userVO.setId(Integer.parseInt(attribute.getValue()));
				}
			}else if(event.isEndElement()){
				endElement = event.asEndElement();
				if("users".equals(endElement.getName().getLocalPart())){
					break;
				}else if("user".equals(endElement.getName().getLocalPart())){ 
					list.add(userVO);
					userVO = null;
				}else if("name".equals(endElement.getName().getLocalPart())){
					userVO.setName(currentValue.trim());
				}else if("username".equals(endElement.getName().getLocalPart())){
					userVO.setUserid(currentValue.trim());
				}else if("password".equals(endElement.getName().getLocalPart())){
					userVO.setPassword(currentValue.trim());
				}else if("gender".equals(endElement.getName().getLocalPart())){
					userVO.setGender(currentValue.trim());
				}else if("age".equals(endElement.getName().getLocalPart())){
					if(!currentValue.trim().isEmpty())
					userVO.setAge(Integer.parseInt(currentValue.trim()));
				}else if("location".equals(endElement.getName().getLocalPart())){
					userVO.setLocation(currentValue.trim());
				}
			}else if (event.isCharacters() && userVO != null && startElement != null) {
				System.out.println(event.asCharacters().getData() +" "+startElement.getName().getLocalPart() );
				currentValue = event.asCharacters().getData();
			}
		}
		return list;
	}

}	
```
Call StAXReader Class from main method
####StAXReaderExce.java
```java
package com.dgstack.dev;

import java.io.FileNotFoundException;
import java.util.List;

import javax.xml.stream.XMLStreamException;

import com.dgstack.dev.vo.UserVO;

/**
 * @author digvijayb
 */
public class StAXReaderExce {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		try {
			String path = "/home/digvijayb/App/test/user.xml";
			StAXReader stAXReader = new StAXReader();
			List<UserVO> list = stAXReader.getUserList(path);
			System.out.println(list);
		} catch (FileNotFoundException | XMLStreamException e) {
			e.printStackTrace();
		}
	}

}

```
----
####OUTPUT
```
[
  { id : 1, name : Digvijay Bhakuni, userid : digvijayb, password : password1, gender : Male, age : 22, location : Gurgaon, India }, 
  { id : 2, name : Rahul Sharma, userid : rahuls, password : password2, gender : Male, age : 22, location : New Delhi, India },
  { id : 3, name : Pankaj Bhakser, userid : pbhakser, password : password3, gender : Male, age : 29, location : Gurgaon, India },
  { id : 4, name : Pankaj Mishar, userid : pankajm, password : password4, gender : Male, age : 23, location : Nodia, India },
  { id : 5, name : Ajay Garg, userid : ajayg, password : password5, gender : Male, age : 25, location : Gurgaon, India }
]
```

Please do comment and follow us for more interesting programming trick and tutorial. 


