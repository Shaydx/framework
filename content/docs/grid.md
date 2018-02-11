---
title: "Grid"
date: 2018-02-06T02:57:57+01:00
---
## Grid
Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md &amp; lg viewport widths.
    <div class="row">
        <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1">
            <div class="box-row"></div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-8 col-lg-10">
            <div class="box-row"></div>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-2 col-lg-1">
            <div class="box-row"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1">
            <div class="box-row"></div>
        </div>
        <div class="col-xs-12 col-sm-9 col-md-10 col-lg-11">
            <div class="box-row"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-10 col-sm-6 col-md-8 col-lg-10">
            <div class="box-row"></div>
        </div>
        <div class="col-xs-2 col-sm-6 col-md-4 col-lg-2">
            <div class="box-row"></div>
        </div>
    </div>
    <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4"&gt;
        &lt;div class="box"&gt;Responsive&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>

- col-xs: under 768px
- col-sm: between 768 & 1024px
- col-md; between 1024 & 1200
- col-lg: over 1200px