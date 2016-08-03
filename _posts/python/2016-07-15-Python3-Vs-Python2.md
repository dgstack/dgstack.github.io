---
layout: post
title: Python3 vs Python2
author: digvijayb
tags: ['Python2', 'Python3']
---

Python is general-purpose dynamic programming language desgined by Guido van Rossum. 
Which support multiple programming paradigm like object oriented, imperative, functional and others but it considered as one of the main stream functional programming language as it extensive use in functional world.
If you are new to python you find people working of different version of python which parallely maintanied.
As now 15 july 2016 there are two different stable vision of python are avaliable. 3.5.2 and 2.7.12. 
3.5.2 is not at all compatible with 2.7.12 there are even minor syntax differences. So this we will focus on find the differences between the two favour of python.

##Python 2.x vs. Python 3.x
Python comes in two basic flavors these days – Python 2.x (currently
2.7) and Python 3.x (currently 3.3). This is an important difference –
some code written for one won’t run on the other. However, most code is
interchangeable. Here are some of the key differences:

<table>
    <thead>
        <tr>
            <th>Python 2.x</th>
            <th>Python 3.x</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>print “hello” (print is a keyword)</td>
            <td>print(“hello”) (print is a function)</td>
        </tr>
        <tr>
            <td>except Exception, e: # OR except Exception as e </td>
            <td>except Exception as e: # ONLY</td>
        </tr>
        <tr>
            <td>Naming of Libraries and APIs are frequently inconsistent with PEP 8</td>
            <td>Improved (but still imperfect) consistency with PEP 8 guidelines</td>
        </tr>
        <tr>
            <td>Strings and unicode</td>
            <td>Strings are all unicode and bytes type is for unencoded 8 bit values</td>
        </tr>
    </tbody>
</table>

There is a utility called 2to3.py that you can use to convert Python 2.x
code to 3.x, while the ‘-3’ command line switch in 2.x enables additional
deprecation warnings for cases the automated converter cannot handle.
Third party tools like python-modernize and the ‘six’ support package
make it easy to target the large common subset of the two variants for
libraries and applications which support both 2.x and 3.x.

Below are the few which show comprehensive review difference between Python2 and Python3

- <a href="https://goo.gl/9nJWPY" target="_blank">Python2orPython3 - Python Wiki</a>
- <a href="http://goo.gl/tI1dfd" target="_blank">Python 2 vs Python 3: Which Should I Learn?</a>
- <a href="http://goo.gl/sqDvNw" target="_blank">The key differences between Python 2.7.x and Python 3.x with examples</a>
- <a href="https://goo.gl/7B7Wop" target="_blank">Python 2 vs. Python 3: How to Choose</a>




