---
title: "Mandelbrot Set Explorer"
date: 2017-08-30T19:33:06-04:00
categories:
- projects
tags:
- javascript
- webworker
- mandelbrot
thumbnailImage: /projects/mandelbrot/mandelbrot.png
---

I built a Mandelbrot Set Explorer using Javascript Web Workers and HTML5 Canvas.  It's one of my favorite software projects!

<!--more-->

Drag your mouse over the canvas to zoom in.

<div style='position:relative;'>
    <canvas id='mandelbrot' width='500' height='500' style='border:solid 1px #ccc;'></canvas>
    <div id='zoom-rect' style='position:absolute;pointer-events:none;border:solid 1px white; background:rgba(255,255,255,0.5);'></div>
</div>
<script src="/projects/mandelbrot/app.js"></script>

[Source Code](https://github.com/robinfhu/personal-site/tree/master/static/projects/mandelbrot)


## Background

The Mandelbrot Set Explorer is one of my favorite software projects to build.  I've built it in Visual Basic, Java, Processing.js, and Assembly.  It's my go to project when I want to learn a new language.

The goal of the version above was to play around with the Web Workers API.  This is a new feature in browsers that lets you essentially multi-thread your application.  A perfect use case for multi-threading, is to perform Mandelbrot Set calculations without freezing the browser.

I initially wanted to use the [Big.js](https://github.com/MikeMcl/big.js/) high precision math library.  The idea was that I could bypass the floating point limits in Javascript, allowing me to zoom indefinitely into the fractal.  After trying the library however, I hit some pretty heavy CPU usage.  It was simply too computationally intensive for any practical use.  I ended up going back to using native floating point numbers.

## Development

I coded this entire app in about 2 hours.  My biggest struggle with Mandelbrot is figuring out the coordinate system.  I always have to figure out the algebra necessary to convert pixel coordinates to mathematical coordinates.  I will confuse `xMin` and `yMax`, and flip the axis wrong.  It requires so much mental energy to code the zooming logic.

The Web Worker API was dead simple to use.  The `onmessage` and `postMessage` commands work exactly as described.  I am impressed, and will try to find more usages for web workers in future projects.

Using the **Hugo** static site generator made development a breeze.  The hot reloading feature allowed me to iterate quickly.


