---
title: "Mandelbrot Set Explorer"
date: 2017-08-30T19:33:06-04:00
categories:
- projects
tags:
- javascript
- webworker
- mandelbrot
#thumbnailImage: //example.com/image.jpg
---

I built a Mandelbrot Set Explorer using Javascript Web Workers and HTML5 Canvas.  It's one of my favorite software projects!

<!--more-->

<div style='position:relative;'>
    <canvas id='mandelbrot' width='500' height='500' style='border:solid 1px #ccc;'></canvas>
    <div id='zoom-rect' style='position:absolute;pointer-events:none;border:solid 1px white; background:rgba(255,255,255,0.5);'></div>
</div>
<script src="/projects/mandelbrot/big.min.js"></script>
<script src="/projects/mandelbrot/app.js"></script>