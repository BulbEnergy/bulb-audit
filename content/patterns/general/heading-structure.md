+++
title = "Heading structure"
+++

## Introduction

Heading elements are often chosen according to the perceived importance of the text they contain and the sections they introduce. The more 'important' the heading, the higher the heading level and — typically — the larger the font size. An `<h3>` might be `1.5rem` and an `<h1>` `3rem`.

However, headings levels do not simply denote importance, but a hierarchy of page subsections. There are certain rules to creating a hierarchy (or 'document outline') that should not be broken:

* Levels should not be skipped. A section introduced by an `<h2>` must use `<h3>` headings to introduce immediate subsections — no matter how 'important' you feel those subsections are, in terms of content.
* Each page should have a single `<h1>` which introduces the unique topic of the page.
* Any element that is used visually to denote a heading must use a heading element (`<h1> → <h6>`)

Here is an example outline, starting with an `<h1>` heading and using heading levels to denote a nested section/subsection structure:

{{% fileTree %}}
* Main heading (`<h1>`)
    * A subheading (`<h2>`)
    * Another subheading (`<h2>`)
      * A nested subheading (`<h3>`)
    * A final subheading (`<h2>`)
{{% /fileTree %}}

Headings are relied upon by assistive technology users such as screen reader users. They both create a map of the page structure and provide shortcuts to traverse that structure. For example, the JAWS screen reader allows you to skip between headings using the <kbd>h</kbd> key, and between specific headings by level using numeric keys (<kbd>3</kbd> for `<h3>` headings, for example).

## WCAG criteria

{{% wcag include="1.3.1" %}}

## Scope of the issue

### Marketing site

* [About → Our energy](https://bulb.co.uk/energy) (✖️ An `<h2>` for the main heading followed by further `<h2>` elements)
* [About → Careers](https://bulb.co.uk/careers) (✖️ Multiple `<h1>` elements)
* [About → Business](https://bulb.co.uk/business) (✖️ An `<h2>` for the main heading followed by further `<h2>` elements)
* Footer (✖️ The footer on each page has headings starting at the `<h3>` level, but this is not thematically correct, since the content here does not belong to the `<h2>` introduced section that typically resides above the footer in the main content.)

### Join site

* [Welcome page](https://join.bulb.co.uk/join/quote) (✖️ An `<h2>` subheading used as the main and only heading on the page)
* [Questions](https://join.bulb.co.uk/join/questions/my-energy) (✖️ `<h2>` headings are used as the main and only heading of each question page)
* ["Switch Now" page](https://join.bulb.co.uk/join/quote-result) (✖️ Heading structure, though correctly nested, begins at the `<h2>` rather than `<h1>` level)
* [My information page](https://join.bulb.co.uk/join/quick-signup) (✖️ An `<h2>` subheading used as the main and only heading on the page, and the "My address" heading is marked up not as a heading, but a `<div>`)
* [My payment details page](https://join.bulb.co.uk/join/quick-signup) (✖️ An `<h2>` subheading used as the main and only heading on the page)

### Account dashboard

* [Login page](https://my.bulb.co.uk/login/password) (✖️ There is no `<h1>`; "Sign into your Bulb account" acts as the `<h1>` but is marked up as a `<p>`.)
* [Dashboard](https://my.staging.bulb.co.uk/dashboard) (✖️ There is a lack of heading structure past the main `<h1>` heading, despite a number of subsections — the green boxes — being included)
* [My usage](https://my.staging.bulb.co.uk/dashboard/usage) (✖️ The main `<h1>` contains the "Back to Bulb" link, breaking its label; the "Meter readings" heading is an `<h4>`, when it should be an `<h2>`)
* [Tariff info](https://my.staging.bulb.co.uk/dashboard/statements) (✖️ The main `<h1>` contains the "Back to Bulb" link, breaking its label)
* [Submit an electricity meter reading](https://my.staging.bulb.co.uk/dashboard/meters/give-reading/electricity) (✖️ The main `<h1>` contains the "Back to Bulb" link, breaking its label; the previous and new reading headings skip two levels to be `<h4>` when they must be `<h2>`)

## Fixing the issue

* Each page should have a singular `<h1>` heading, at the start of the main content.
* Each subsection should take a heading level that reflects its nesting level in the document outline.
* Each element that is used as a heading visually should use the correct heading element (of the appropriate level) to mark it up.
* Make sure only content that forms the heading text is found inside the heading element (place the "Back to Bulb" links outside and above the `<h1>` headings to which they currently belong).
* The **Marketing site** footer must either replace the `<h3>` headings with `<h2>`s _or_ provide an introductory `<h2>` heading to which the `<h3>`s can belong.

Where you wish to use a smaller font size for a heading (such as for the "Meter readings" heading, pictured) do not choose a different level. Instead, adjust the heading style with a `class`.

It may help to pair classes and element selectors like so:

{{<code>}}
h4, .h4 {
  font-size: 1.3rem;
}
{{</code>}}

You can then apply the (higher specificity) class to the heading and change its appearance without breaking the hierarchy:

{{<code>}}
<h2 class="h4">Meter readings</h2>
{{</code>}}
