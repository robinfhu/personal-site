---
title: "D3 Charting Library"
date: 2017-08-29T23:08:36-04:00
categories:
- projects
tags:
- d3js
- javascript
- charting
thumbnailImage: /projects/charting/forestd3.png
thumbnailImagePosition: left
slug: charting-library
---

I built my own charting library using D3.js.  This is an extension from my experience working on NVD3 at Novus Partners!

<!--more-->
<style>
#legend .item {
    display: inline-block;
}
</style>
<div id="legend" style="margin-top:50px;"></div>
<div id="line-plot" style="height: 400px;"></div>
<div id="bar-plot" style="height: 210px;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.13/d3.js" charset="utf-8"></script>
<script src="/projects/charting/forest-d3.js"></script>
<script src="/projects/charting/app.js"></script>

[Source Code](https://github.com/robinfhu/forest-d3)
|
[More Examples](http://charting.robinforest.net)

## Background

I gained a new appreciation of the power of data visualizations after joining [Novus Partners](http://novus.com). Novus built the famous [NVD3 Charting Library](http://nvd3.org/), and I had the pleasure of working on that open source project.  I learned a lot about [d3.js](https://d3js.org/), and it's unique way of handling data.

After gaining enough experience, I took a stab at making my own charting library.  Some basic features I wanted:

* Clean code!
* Smooth animations
* Easy to use data format
* Ability to combine different chart types
* Robust tooltip system
* A good legend system
* Ability to add line markers and sections to the chart
* Ability for charts to communicate with each other

It took a while to develop, but the result is fairly impressive.  You can see an example above.

## Technology Used

I built the library using d3.js version 3.5.  I wrote the code using Coffeescript. View the [Source Code](https://github.com/robinfhu/forest-d3).
