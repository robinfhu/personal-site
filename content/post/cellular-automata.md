---
title: "Cellular Automata"
date: 2017-08-29T23:01:54-04:00
categories:
- projects
thumbnailImage: /projects/cellular/cellular-project.png
---

Let me show you a cool project I wrote using Processing.js.
If you love Conway's Game of Life, this will definitely interest you!

<!--more-->

<div class='cellular-program'>
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
            <option value='23/3/2'>Conway's Game of Life</option>
            <option value='3467/2678/6'>Rake</option>
            <option value='45678/25678/4'>SediMental</option>
        </select>
        <input type='text' class="input--large" placeholder='Enter rule(i.e."345/2/4")...' id='txt_rule' value='345/2/4'>
    </div>
    <br/>
    <canvas id='main_canvas' data-processing-sources="/projects/cellular/cellular.pde"></canvas>
</div>
<script src="/projects/cellular/processing-1.4.1.js"></script>
<script src="/projects/cellular/cellular_main.js"></script>