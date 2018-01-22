+++
title = "Answer choices"
priorities = ["1"]
+++

## Introduction

The **Join site**'s question screens include custom radio button-like components for selecting an answer. For example, the "My home uses" page offers a choice between "Gas & Electricity" and "Electricity only" (pictured).

![Radio button choices with one selected](/images/radios.png)

Despite having the appearance of radio buttons (the familiar encircled dot design is used), these are custom components, built in Angular from `<div>` and `<span>` elements. A number of issues emerge:

* The controls do not offer any semantic information (role, state etc.) to be consumed by assistive technologies
* The controls are not keyboard accessible (they cannot be focused or activated)
* The controls are inefficiently designed and dependent on CSS

## WCAG criteria

{{% wcag include="2.1.1, 4.1.2, 2.4.7" %}}

## Scope of the issue

These controls only appear on the **Join site**:

* https://join.bulb.co.uk/join/questions/my-energy
* https://join.bulb.co.uk/join/questions/my-home
* https://join.bulb.co.uk/join/questions/my-bedrooms

## Fixing the issue

There is no reason why these controls should depart with standard radio button (`<input type="radio" />`) markup. With the help of some CSS, it is possible to create a simplified solution which communicates role and state, and is keyboard operable.

I wrote about this in [Replacing Radio Buttons Without Replacing Radio Buttons](https://www.sitepoint.com/replacing-radio-buttons-without-replacing-radio-buttons/). A demo that approximates the current design but using true radio buttons is provided below. Note that the arrow keys switch between selected radio button, and the <kbd>Tab</kbd> key focuses the selected radio button, as standard.

{{<demo>}}
<form>
  <fieldset>
    <legend><h1>My home uses</h1></legend>
    <div class="radios">
      <div class="radio">
        <input type="radio" name="energy" id="gas-and-elec" checked />
        <label for="gas-and-elec">
          Gas & Electricity
        </label>
      </div>
      <div class="radio">
        <input type="radio" name="energy" id="elec" />
        <label for="elec">
          Electricity only
        </label>
      </div>
    </div>
  </fieldset>
  <button type="submit">Continue</button>
</form>
  <style>
    form {
      text-align: center;
    }

    fieldset {
      border: 0;
      text-align: center;
    }

    .radios {
      display: flex;
      justify-content: center;
      font-family: sans-serif;
    }

    legend {
      font-family: sans-serif;
      color: #ca488d;
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
      padding: 2rem;
      border: 1px solid #666;
      border-radius: 0.5rem;
      margin: 0.5rem;
      cursor: pointer;
    }

    label::after {
      content: '';
      display: block;
      margin: 0.25rem auto 0;
      width: 1rem;
      height: 1rem;
      border: 1px solid;
      border-radius: 50%;
    }

    [type="radio"]:checked + label {
      border-bottom: 0.25rem solid #19ac58;
    }

    [type="radio"]:checked + label::after {
      background-color: #19ac58;
      box-shadow: inset 0 0 0 0.25rem #fff;
    }

    [type="radio"]:focus + label {
      box-shadow: 0 0 0 0.125rem #ca488d;
    }

    [type="submit"] {
      color: #fff;
      padding: 0.5rem 1.5rem;
      border: 0;
      border-radius: 0.25rem;
      background: #19ac58;
      font-size: 1.25rem;
    }
  </style>
</form>
{{</demo>}}

{{% note %}}
Illustrations are omitted. They should be included inside the `<label>`, above the label text and have empty `alt` attributes (`alt=""`). See {{% pattern "Text alternatives" %}}.
{{% /note %}}

### HTML

{{<code numbered="true">}}
<fieldset>
  <legend>[[[<h1>My home uses</h1>]]]</legend>
  <div class="radios">
    <div class="radio">
      <input type="radio" name="energy" [[[id="gas-and-elec"]]] checked />
      <label [[[for="gas-and-elec"]]]>
        Gas & Electricity
      </label>
    </div>
    <div class="radio">
      [[[<input type="radio" name="energy" id="elec" />]]]
      <label for="elec">
        Electricity only
      </label>
    </div>
  </div>
</fieldset>
</form>
{{</code>}}

1. The page's heading should be an `<h1>`, not an `<h2>`. It is used to form the `<legend>`.
2. The radio must be associated to the...
3. ...label using `for` and `id`
4. The input must come directly before the label in the markup for the CSS adjacent sibling combinator to work (see below)

### CSS

_(Only the key CSS is included here.)_

{{<code numbered="true">}}
[[[[type="radio"]]]] {
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
  padding: 2rem;
  border: 1px solid #666;
  border-radius: 0.5rem;
  margin: 0.5rem;
  [[[cursor: pointer;]]]
}

[[[label::after]]] {
  content: '';
  display: block;
  margin: 0.25rem auto 0;
  width: 1rem;
  height: 1rem;
  border: 1px solid;
  border-radius: 50%;
}

[[[[type="radio"]:checked + label]]] {
  border-bottom: 0.25rem solid #19ac58;
}

[type="radio"]:checked + label::after {
  background-color: #19ac58;
  box-shadow: inset 0 0 0 0.25rem #fff;
}

[[[[type="radio"]:focus + label]]] {
  box-shadow: 0 0 0 0.125rem #ca488d;
}
{{</code>}}

1. The radio button is hidden from view using an accessible technique (this is moved to a `class` in {{% pattern "Missing and placeholder labels" %}})
2. The `pointer` cursor indicates to mouse users that the whole box can be clicked, avoiding potential cognition issues
3. A proxy radio button design is included using pseudo-content
4. Clear `checked`...
5. ...and `focus` styling is provided. See {{% pattern "Focus styles" %}}
