+++
title= "Color dependence"
+++

## Introduction

Color makes interfaces attractive and can sometimes help to reinforce meaning. For example, red is associated with danger in many Western cultures, and may form part of a 'delete' button's design.

But dependence on color alone to communicate important information runs the risk of alienating a range of users, including those with forms of color blindness, and others with monochrome displays.

In each case color is used to differentiate items, a supplementary alternative method of differentiation should also be present. The convention of underlining inline links, for example, is considered robust. For keys that differentiate bars in bar charts or segments in pie charts by color, embedded patterns can assist comprehension.

## WCAG criteria

{{% wcag include="1.4.1" %}}

## Scope of the issue

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
