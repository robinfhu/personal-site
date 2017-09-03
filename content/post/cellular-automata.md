---
title: "Cellular Automata Simulator"
date: 2017-08-29T23:01:54-04:00
categories:
- projects
tags:
- javascript
thumbnailImage: /projects/cellular/cellular-project.png
slug: cellular-automata
---

I wrote a cellular automation simulator using Processing.js.  If you like Conway's Game of Life,
Brian's Brain or others, this should interest you!

<!--more-->

<div class='cellular-program' style='border:solid 1px #ccc; padding:10px;'>
    <div class='btn-group' style='margin-bottom:15px;'>
        <button id='btn_start' class='btn btn--default'>Start</button>
        <button id='btn_stop' class='btn btn--default'>Stop</button>
        <button id='btn_clear' class='btn btn--default'>Clear World</button>
        <button id='btn_random' class='btn btn--default'>Randomize</button>
    </div>
    <div style='margin-bottom:15px;'>
        <label for='rule_selection'>Enter Rule</label>
        <select name='rule_selection' id='rule_selection'>
            <option value='345/2/4'>Star Wars</option>
            <option value='/2/3'>Brian's Brain</option>
            <option value='6/246/3'>Brain 6</option>
            <option value='23/3/2'>Conway's Game of Life</option>
            <option value='3467/2678/6'>Rake</option>
            <option value='345/24/25'>Bombers</option>
            <option value='45678/25678/4'>SediMental</option>
        </select>
        <input type='text' class="input--large" placeholder='Enter rule(i.e."345/2/4")...' id='txt_rule' value='345/2/4'>
    </div>
    <br/>
    <canvas id='main_canvas' data-processing-sources="/projects/cellular/cellular.pde"></canvas>
    <br>
    <a href="https://github.com/robinfhu/processingjs">Github</a>
</div>
<script src="/projects/cellular/processing-1.4.1.js"></script>
<script src="/projects/cellular/cellular_main.js"></script>

## What is it?

This program was inspired by [Mirek's Cellebration website](http://psoup.math.wisc.edu/mcell/index.html), which talks in detail about cellular automata. These are mathematical simulations which involve iterating a collection of cells in a grid, based on a series of rules.
For instance, the well known automaton, Conway's Game of Life, has the following rules:

* Cells in the grid can either be ON or OFF.
* If a cell is OFF, and exactly 3 of its neighbors are ON, the cell turns ON in the next generation.
* If a cell is ON, and 2 or 3 of its neighbors are ON, it continues to survive. Otherwise, it dies in the next generation.

To see this in action, enter the rule 23/3/2 in the rule box.


I created this program using Processing.js. This is a powerful JavaScript visualization engine that uses canvas in HTML5.

## How to Use

* Press Start to begin simulation. Press Stop to pause it.
* Clear World sets all cells to zero state. Randomize randomly adds pixels to about 50% of the world.
* Drag your mouse over the canvas to add more pixels. Left click to add pixels, right click to erase.
* To change the simulation rules, enter rule in the input box and press enter. Rule must in S/B/G notation.
* I have some preset rules in the dropdown: **Brian's Brain**, **Conway's Game of Life**, and my favorite, **Star Wars**.

#### Rules Notation

Each rule has three parts: Survival rule, Birth rule and # of generations (S/B/G).

* The survival rule is a list of numbers 0-8 which specify how many neighboring cells must be alive in order for a given cell to survive. Represented by "23" in The Game of Life.
* The birth rule is also a list of numbers 0-8, which specify how many neighboring cells must be alive in order for a dead cell to come alive. Represented by "3" in The Game of Life.
* The # of generations is a special rule used to create complex automata. For The Game of Life, this number is "2", because a cell can only be alive or dead.

## What I Learned

This was my first exposure to the Processing.js library, and I was very impressed by it.  The library gives you an easy way to make dynamic graphics based apps in the browser.  15 years ago, I would have had to make a Java Applet to accomplish the same thing (and I actually did build this app in Java once).
