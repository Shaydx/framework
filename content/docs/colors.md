---
title: "Colors"
date: 2018-02-01T08:53:16+01:00
---
## Changing colors in Splash
<p>To change the colors of the gradient in the splash section of the frontpage, go to <strong>style.css</strong> and find: </p>
        <pre><code>.splash {
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    -moz-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
    height: 100vh;
}</code></pre>
<p>and change the value to any color you like. the <strong>-45deg</strong> can also be changed to change how the gradient is displayed.</p>
<pre><code>background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);</code></pre>
