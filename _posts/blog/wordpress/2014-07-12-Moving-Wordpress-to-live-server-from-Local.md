---
layout: post
title: 7 Easy Steps to Moving Wordpress site to live server from Local
author: digvijayb
date: 2016-07-15 16:54:46
categories:
- blog
- Wordpress
tags: ['wordpress', 'godady', 'live', 'server', 'local']
img: NA
thumb: wordpress.png
postDisclaimmer: NA
---
### How to move a wordpress blog from localhost to live server (or web server).
**Install or Move your wordpress blog to live host in 7 Easy Step**

It always had been a pain for a developer to migrate project from one environment to another and with php and static web site which can't be bundle it like war, dll and exe.

>3 years back I use to be a freelance web developer, primarily working with wordpress. When I use complete project and hand it over to client I have sit long hour and support them over remote and phone to make there site live and client don't want to share there live credential with a freelance(why would they anyway). Then wrote this post and use to give them this doc.

Now there are better way to do this like docker and other. But with small business manually migrating website is the only way.

**Step 1.** At your hosting server install wordpress. I am using my cpanel godady.

![Click on wordpress and follow simple steps to installs](http://4.bp.blogspot.com/-r2oW-oHPnZE/U8DATkxFmPI/AAAAAAAAAVs/5KZ18fFDtsM/s1600/web_host_wp.png)

> Now wordpress ready with default theme and with Hello Post.<!--more-->

**Step 2.** Go to your local database or database client in my case I am using **phpMyAdmin** to connect my database. Then Select your wordpress database and select export option. And you will get a SQL script file like **your_database_name.sql**

![Click on export tab select Quick option and hit go.](http://2.bp.blogspot.com/-lPjT3eGDxYw/U8DNUyos54I/AAAAAAAAAWY/3Ej2KHjvD4k/s1600/local_db_Export.png)

**Step 3.** Now open the sql file in any of your preferred text editor I am using **SciTE** but even Notepad will work then open **find and replace** and replace all localhost address to your site address.
Like in this case **http://localhost/sam** to **http://www.get24sevensupport.com**

![Click Replace All](http://4.bp.blogspot.com/-wKgkq6jNh1Q/U8DNUUh1MHI/AAAAAAAAAWU/Uh3_-I-3RjM/s1600/db_url_replace.png)

**Step 4.** Go to hosting database and select all wordpress table by Check All checkbox then select Drop option from the dropdown menu.

![Check all the wordpress table and select drop.](http://2.bp.blogspot.com/-YMvl-k8-8eY/U8DNV8NCDuI/AAAAAAAAAWs/kYizWre9jAs/s1600/prod_db.png)

**Step 5.** A confirmation screen will appear onto your with name (or drop table sql) of all the table to drop. then press Yes

![Click Yes](http://2.bp.blogspot.com/-BfK_bp94h6A/U8DNWKctT1I/AAAAAAAAAWw/4AHOsEG708A/s1600/prod_db_drop.png)

> **All of your wordpress data is moved. Now it's time to move all of media and themes content to live server.**

**Step 6.** Now connect to your FTP Account via a FTP Client your can use any client you like I am using **FileZila.** You can even access your FTP via cpanel's file manger (if your got one in your cpanel). Open the folder **www** or **public_html** and their you will get a folder name wp-content. Now delete that folder and upload your local **wp-content** folder to web host.

> **Note: With FileZila delete wp-content on the right and drag and drop wp-content from left to right.**

![Delete wp-content on the right and drag and drop wp-content from left to right.](http://3.bp.blogspot.com/-1NV-moJ6pIQ/U8DNUmnGEiI/AAAAAAAAAWc/b49-zBvEK2A/s1600/fillzila_wp.png)

**Step 7.** Now got to your browser and open your web site and your are done.

![Your are gone live](http://3.bp.blogspot.com/-FS9z70ts3lk/U8DNZVcX3fI/AAAAAAAAAXI/9d5bRyemwzk/s1600/wp_site_prod.png)

>For any concern and queries comment below
