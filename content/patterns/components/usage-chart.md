+++
title = "My Usage chart"
priorities = ["2"]
+++

## Introduction

The **Bulb** sites use a number of charts and graphs, primarily to illustrate fairly simple concepts. However, the energy usage chart found in the **Account dashboard**'s [My usage](https://my.staging.bulb.co.uk/dashboard/usage) screen communicates critical, detailed information. It — or an alternative for it — therefore needs to communicate the information it represents in a detailed and structured way.

Commonly, complex charts are accompanied by invisible data tables, intended for blind screen reader users. This is a mistake, because not only blind users benefit from a tabular representation of the data. Instead, we should offer a choice between a chart and table view of the data and controls to switch between these views.

{{% principles include="Offer choice" descriptions="true" %}}

## WCAG criteria

{{% wcag include="1.1.1, 1.3.1, 1.3.3" %}}

## Scope of the issue

The usage chart is found on the **Account dashboard**'s [My usage](https://my.staging.bulb.co.uk/dashboard/usage) screen.

## Fixing the issue

A set of radio button controls should be provided to switch between chart and table views. With the data table option available, only a terse text alternative for the chart is necessary. The highlighted code is what I have added.

### The chart with text alternative

{{<code>}}
<svg class="recharts-surface" [[[role="img"]]] [[[aria-label="Bar chart showing electricity and gas usage over a 12 month period."]]] [[[focusable="false"]]] width="819" height="303.3333333333333" viewBox="0 0 819 303.3333333333333" version="1.1">
  <!-- SVG chart content -->
</svg>
{{</code>}}

### The data table

_(The example code just shows rows for August - October)_

{{<code numbered="true">}}
<table>
  <tr>
    <td></td>
    <[[[th]]] [[[scope="col"]]]>Electricity</th>
    <th scope="col">Gas</th>
    <th scope="col">Total</th>
  </tr>
  <tr>
    <th [[[scope="row"]]]>[[[August]]]</th>
    <td>£19</td>
    <td>£15</td>
    <td>£34</td>
  </tr>
  <tr>
    <th scope="row">September</th>
    <td>£29</td>
    <td>£19</td>
    <td>£48</td>
  </tr>
  <tr>
    <th scope="row">October</th>
    <td>£33</td>
    <td>£30</td>
    <td>£62</td>
  </tr>
</table>
{{</code>}}

1. Each table header must be a `<th>` element.
2. Column table headers need their direction explicitly set using `scope="col"`.
3. Row table headers need their direction explicitly set using `scope="row"`.
4. The data table should use full — rather than abbreviated — labels: "August" in place of "Aug".

#### Demo

<table>
  <tr>
    <td style="border: 0"></td>
    <th scope="col">Electricity</th>
    <th scope="col">Gas</th>
    <th scope="col">Total</th>
  </tr>
  <tr>
    <th scope="row">August</th>
    <td>£19</td>
    <td>£15</td>
    <td>£34</td>
  </tr>
  <tr>
    <th scope="row">September</th>
    <td>£29</td>
    <td>£19</td>
    <td>£48</td>
  </tr>
  <tr>
    <th scope="row">October</th>
    <td>£33</td>
    <td>£30</td>
    <td>£62</td>
  </tr>
</table>

### The radio buttons

The radio buttons for choosing between the two panels, chart and table, can use standard `<input>` markup. No group label is necessary, since the purpose of the controls can be inferred from the context. Styling such controls is covered in detail in {{% pattern "Answer choices" %}}. Below is a demo.

{{<demo>}}
<style>
.radios {
  margin-bottom: 0.5rem;
  border: 0;
  padding: 0;
}

.radios > * {  
  display: inline-block;
}

[type="radio"] {
  position: absolute;
  white-space: nowrap;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
}

label {
  display: block;
  padding: 0.5rem 2rem;
  border: 1px solid #666;
  border-radius: 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
}

label::before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.25rem;
  width: 1rem;
  height: 1rem;
  border: 1px solid;
  border-radius: 50%;
}

[type="radio"]:checked + label {
  border-bottom: 0.25rem solid #19ac58;
}

[type="radio"]:checked + label::before {
  background-color: #19ac58;
  box-shadow: inset 0 0 0 0.25rem #fff;
}

[type="radio"]:focus + label {
  box-shadow: 0 0 0 0.125rem #ca488d;
}

img {
    max-width: 100%;
}

table {
    font-family: sans-serif;
    text-align: left;
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 2px solid;
    padding: 0.5rem;
    line-height: 1.25;
    margin: 0;
}

th {
    font-weight: bold;
}

th:empty {
    border: 0;
}
</style>
<fieldset class="radios">
  <input type="radio" id="chart" name="view" checked>
  <label for="chart">Chart view</label>
  <input type="radio" id="table" name="view">
  <label for="table">Table view</label>
</fieldset>
<div class="panel" id="chart">
  <img alt="Bar chart showing electricity and gas usage over a 12 month period" src="/images/usage.png">
</div>
<div class="panel" id="table" hidden>
<table>
  <tr>
    <td style="border: 0"></td>
    <th scope="col">Electricity</th>
    <th scope="col">Gas</th>
    <th scope="col">Total</th>
  </tr>
  <tr>
    <th scope="row">August</th>
    <td>£19</td>
    <td>£15</td>
    <td>£34</td>
  </tr>
  <tr>
    <th scope="row">September</th>
    <td>£29</td>
    <td>£19</td>
    <td>£48</td>
  </tr>
  <tr>
    <th scope="row">October</th>
    <td>£33</td>
    <td>£30</td>
    <td>£62</td>
  </tr>
</table>
</div>
<script>
var radios = demo.querySelector('.radios');
var panels = demo.querySelectorAll('.panel');
radios.addEventListener('change', function () {
  Array.prototype.forEach.call(panels, function (panel) {
    panel.hidden = !panel.hidden;
  });
});
</script>
{{</demo>}}
