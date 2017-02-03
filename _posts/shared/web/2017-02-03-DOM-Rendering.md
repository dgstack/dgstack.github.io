---
layout: sharedpost
title: Speed of DOM Rendering
author: digvijayb
date: 2017-02-02 16:54:46
categories:
- shared
- Web
tags: ['JavaScript', 'Angular2', 'React']
img: NA
thumb: dom-logo.jpg
permalink: /shared/Speed-Of-DOM-Rendering
postDisclaimmer : The content post is taken for JULIEN RENAUX post at toptal, www.stefankrause.net, www.codementor.io and merrickchristensen.com.
---

Angular Document Object Model (DOM) manipulation has evolved a lot. If you want a reactive User Interface (UI), DOM manipulation and JavaScript performance is important.

![Faster DOM Performance -by toptal.com](/assets/img/shared/toptal-domspeed.jpg)

For example, creating 1,000 rows in a table takes 126 milliseconds with vanilla JavaScript, 110% more (264ms) with Angular. 1.x, and only 40% more (177ms) with Angular >= 2. As you can see, the performance of Angular >= 2.x is better than Angular 1.x, and is similar to React performance.


#### <a href="https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts/table.html" target="_blank">Table Report of js framework benchmark of rendering table rows</a>

![Table: JS framework benchmark -by stefankrause.net](/assets/img/shared/render-speed-table.png)

### Check out more post that compare js framework.

#### <a href="https://www.codementor.io/reactjs/tutorial/reactjs-vs-angular-js-performance-comparison-knockout" target="_blank">React vs AngularJS 1.0 vs KnockoutJS: a Performance Comparison</a>

List of 1000 items that get rendered into a `ul` tag

![Test ran 10 on chrome -by codementor.com](/assets/img/shared/perfromance-chrome-codementor.PNG)

> Note that AngularJs is version 1 not 2. Angular2 perform mush better then AngularJs 1.

On average, React is the fastest at rendering a list of 1000 items. It’s a surprising result, because I would have expected raw DOM manipulation to be the fastest, as there’s nothing too hook up and so on. There’s an interesting outlier in the Chrome test in that the second run of the React test takes a very long time to run: almost 600ms. It happens every time the second test is run in Chrome after a fresh reload and I’m not sure why. Raw DOM manipulation comes in second, which doesn’t surprise me, as it’s obviously much lighter than either Angular or Knockout, with nothing else to hook up or take care of behind the scenes

#### <a href="http://merrickchristensen.com/articles/react-vs-angular-2.html" target="_blank">React vs Angular2</a>

Compare two of the most famous javascript framework by google and facebook. Angular2 and React

![Bootstrap Performance -by merrickchristensen.com](/assets/img/shared/ng2-react-bootstrap.png)


