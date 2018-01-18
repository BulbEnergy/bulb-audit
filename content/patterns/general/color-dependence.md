+++
title= "Color dependence"
priorities= ["3"]
+++

## Introduction

Color makes interfaces attractive and can sometimes help to reinforce meaning. For example, red is associated with danger in many Western cultures, and may form part of a 'delete' button's design.

But dependence on color alone to communicate important information runs the risk of alienating a range of users, including those with forms of color blindness, and others with monochrome displays.

In each case color is used to differentiate items, a supplementary alternative method of differentiation should also be present. The convention of underlining inline links, for example, is considered robust. For keys that differentiate bars in bar charts or segments in pie charts by color, embedded patterns can assist comprehension.

## WCAG criteria

{{% wcag include="1.4.1" %}}

## Scope of the issue

### Inline links

The **Join site** ["Switch now" page](https://join.bulb.co.uk/join/quote-result) _"Have your bill handy? Refine your quote"_ text:

![Inline link in green on white with no underline](/images/have-bill.png)

The **Account dashboard** [Dashboard](https://my.staging.bulb.co.uk/dashboard) "Need help?" text:

![Inline link in green on blue with no underline](/images/help-page.png)

### Chart keys

Some charts included depend on color alone for differentiating bars.

* ["Switch now" page](https://join.bulb.co.uk/join/quote-result) (**Join site**)
* [My usage](https://my.staging.bulb.co.uk/dashboard/usage) (**Account dashboard**)

{{% note %}}
The "Cost of energy for a typical home" chart from the **Marketing site** [Home page](https://bulb.co.uk/) is not included because the difference in _shade_ between the colored bars is so significant that it is unlikely anyone can mistake the two types of bar.
{{% /note %}}

### Form errors

Form errors are presented differently around the three sites (see {{% pattern "Inconsistency" %}}). But, in some cases, only color is used to differentiate the error. For example: the **Join site** [Welcome page](https://join.bulb.co.uk/join/quote) (pictured).

![Red text error](/images/red.png)

Full list of affected URLs:

* [Welcome page](https://join.bulb.co.uk/join/quote) (**Join site**)
* [My information page](https://join.bulb.co.uk/join/quick-signup) (**Join site**)

Elsewhere, "✖️" symbols are used to mark errors, so there is no problem.

## Fixing the issue

### Inline links

By virtue of convention, users _expect_ links to have underlines of some form. Whether these are provided using `text-decoration`, `border`, or a linear gradient is another question. The most readable method for the font's metrics is the soundest choice.

One thing that can improve readability for `text-decoration` in supporting browsers is the use of `text-decoration-skip`, which stops the underline intersecting descenders of the font.

{{<code>}}
a {
  text-decoration: underline;
  [[[text-decoration-skip: ink]]];
}
{{</code>}}

Here is a demo (you should see the effect in Chrome, Opera, and Safari if you use the `-webkit-` prefix):

{{<demo style="background-color:#ca488d; padding: 2rem; color: #fff;">}}
<style>
a {
  color: #fff;
  font-size: 1.5rem;
  font-family: sans-serif;
  text-decoration: underline;
  -webkit-text-decoration-skip: ink;
  text-decoration-skip: ink;
}
</style>
<a href="#">Descenders are the hanging down parts</a>
{{</demo>}}

### Chart keys

It is recommended that `linear-gradient` based patterns are used to help differentiate the different bars and bar parts. Following is a demo of some gradient options for the [My usage](https://my.staging.bulb.co.uk/dashboard/usage) page:

{{<demo>}}
<style>
  [class^="pattern"] {
    width: 2rem;
    height: 2rem;
    font-size: 0.75rem;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  li span + span {
    margin-left: 0.5rem;
  }

  .pattern-1 {
    background-color: #043464;
    background-image: linear-gradient(to left, #265686 50%, #043464 50%);
    background-size:0.5em;
    background-position: 0.25rem 0.25rem;
  }

  .pattern-2 {
    background-color: #19ac58;
    background-image: linear-gradient(to bottom, #19ac58 50%, #3bce7a 50%);
    background-size: 0.5em;
  }

  .pattern-3 {
    background-color: #8c8c8c;
    background-image: radial-gradient(#aeaeae 55%, transparent 0%);
    background-size:0.66em;
  }

  .pattern-4 {
    background-color: #dddddd;
    background-image: radial-gradient(#dddddd 25%, transparent 0%), radial-gradient(#bbbbbb 60%, transparent 0%);
    background-size:0.75em;
  }
</style>
<ul>
  <li>
    <span class="pattern-1"></span>
    <span class="text">Gas usage</span>
  </li>
  <li>
    <span class="pattern-2"></span>
    <span class="text">Electricity usage</span>
  </li>
  <li>
    <span class="pattern-3"></span>
    <span class="text">Projected gas usage</span>
  </li>
  <li>
    <span class="pattern-4"></span>
    <span class="text">Projected electricity usage</span>
  </li>
</ul>
{{</demo>}}

### Form errors

Use a method to make the error text stand out, such as prefixing the message with `<strong>Error:</strong>` or providing a warning icon. Should you opt for an icon, ensure it has an accessible label in the form "Error:".

{{<code numbered="true">}}
<label for="postcode">Your postcode:</label>
<input id="postcode" name="postcode" aria-describedby="postcode-error">
<div id="postcode-error">
  <svg [[[aria-label="Error:"]]] [[[focusable="false"]]]>
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/icons/forms.svg#error"></use>
  </svg>
  Please enter a valid postcode.
</div>
{{</code>}}

1. The `aria-label` property provides the accessible label
2. `focusable="false"` stops the SVG being focusable in Internet Explorer. This should be applied to all inline SVGs in the **Bulb** sites.

{{% note %}}
It is recommended you use `currentColor` to define the `fill` property of SVG paths and/or shapes. This way, its color is mapped to the text color and changes accordingly when [Windows High Contrast Mode](https://support.microsoft.com/en-gb/help/13862/windows-use-high-contrast-mode) is switched on.
{{% /note %}}

{{% warning %}}
Note that some form errors, such as on the business page (pictured) are colored green, which is confusing. Green is usually associated with success, not failure.

![green error message](/images/green-error.png)
{{% /warning %}}
