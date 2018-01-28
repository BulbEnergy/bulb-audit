+++
title = "Dialogs"
priorities = ["1"]
+++

## Introduction

Dialogs typically serve one of two purposes:

1. To give the user a choice at a critical juncture
2. To alert the user to important information without (entirely) changing their context

Custom dialogs are common, and commonly marked up inaccessibly. For a maximal number of users to be able to perceive and operate dialogs, the following must be catered for:

* The dialog must have the `dialog` or `alertdialog` role (on its container).
* The `role="dialog"`/`role="alertdialog"` element must have a label, usually provided by the dialog's heading via `aria-labelledby`.
* Focus must be moved inside the dialog when it is opened.
* Focus must be moved back to the element that invoked the dialog when it is closed.
* The close button has an accessible label in addition to its "✖️" symbol
* The dialog's content/message can form the `role="dialog"` element's description, using `aria-describedby`. A basic template is provided below.

{{<code>}}
<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-content">
  <h2 id="dialog-title">Dialog title</h2>
  <div id="dialog-content" role="document">
    <p>The body of the dialog / its message</p>
  </div>
  <button aria-label="close">x</button>
</div>
{{</code>}}

{{% note %}}
In this example, the dialog is purely informational. However, you could add interactive form content within the `#dialog-content` element and/or replace the close button with "Okay" and "Cancel" buttons or similar.
{{% /note %}}

## WCAG criteria

{{% wcag include="2.1.1, 2.4.3, 2.4.7, 4.1.2" %}}

## Scope of the issue

### Join site

* ["Switch now" page](https://join.bulb.co.uk/join/quote-result) (✖️ The "See tariff details" link/button invokes a dialog that has no semantic information and cannot be closed using the keyboard.)
* [My information page](https://join.bulb.co.uk/join/quick-signup) (✖️ The "Is your email address correct" dialog omits necessary semantic information and does not have focus sent to it when opened.)

## Fixing the issue

It is recommended that a drop-in component for dialogs is used across the sites. The [A11y Dialog](https://github.com/edenspiekermann/a11y-dialog) by Hugo Giraudel is a good example, and has no dependencies, so should be relatively easy to port between sites.

For purely informational dialogs, like the tariff information dialog (pictured) a close button must be supplied and focused when the dialog is opened.

![Tariff information dialog, currently with no close button](/images/tariff-dialog.png)
