+++
title = "Missing and placeholder labels"
+++

## Introduction

The `placeholder` attribute is intended for providing supplemental hints and examples for completing a form. It should be used in conjunction with a standard and persistent label, conventionally placed above the input in question.

Where `placeholder`s are used as primary labels, a number of accessibility and usability issues emerge.

Firstly, the `placeholder` is not supported as an accessible label in legacy browsers and assistive technologies, meaning those users will not hear a label as they focus the control.

For sighted users, there are cognitive challenges with the intermittent nature of the `placeholder` label, resulting in some getting confused and frustrated as they try to remember what it was they were supposed to be entering. Others mistake the `placeholder` text as content and think the field is already complete.

## WCAG criteria

{{% wcag include="3.3.2" %}}

## Scope of the issue

### Marketing site & Join site

Placeholders-as-labels are found wherever there is a "Get A Quote" / "Get My Quote" form.

* [Home page](https://bulb.co.uk/)
* [About → Our energy](https://bulb.co.uk/energy)
* [Welcome page](https://join.bulb.co.uk/join/quote) (**Join site**)

In addition, the **Join site's** ["My Information" form](https://join.bulb.co.uk/join/quick-signup) has no visible and persistent labels:

![The My Information form](/images/my-info-form.png)

In the **Join site's** [Payment details page](https://join.bulb.co.uk/join/quick-signup), persistent visual labels accompany placeholders. The issue here is that the `<label>`s are actually `<div>`s and are not associated accessibly with the form inputs.

![Payment details form](/images/debit.png)

### Account dashboard

The [Submit an electricity meter reading](https://my.staging.bulb.co.uk/dashboard/meters/give-reading/electricity) page's inputs (pictured) each have a missing label and no placeholder as a substitute.

## Fixing the issue

In some cases, such as search fields where the label of the submit button, "search", acts as a visible label, a persistent visual label is not really necessary and an invisible textual label need only be provided for assistive technology users. However, on the **Bulb** sites the "Get a quote" (or "Get my quote") label for the submit button does not match the "Your postcode" `placeholder` label.

A label that is both visually persistent _and_ forms the accessible label for the field is therefore recommended.

{{<code numbered="true">}}
<label [[[for="postcode"]]]>Your postcode</label>
<input [[[id="postcode"]]] name="postcode" [[[placeholder="E.g. NR9 5NF"]]]>
<button type="submit">Get my quote</button>
{{</code>}}

1. The `<label>` element should be associated with the&hellip;
2. &hellip;`<input>` by matching the values of the respective `for` and `id` attributes.
3. The `placeholder` is now optional, but should be clearly marked as an example/hint to be replaced, such as by prefixing with "E.g." if included.

{{% note %}}
To maintain an attractive design for the "Get A Quote"/"Get My Quote" forms, it might help to center align the label, input, and submit button along a vertical axis. ["My Information" form](https://join.bulb.co.uk/join/quick-signup) should left-align its labels as other forms do across the sites.
{{% /note %}}

### Payment details page

For the [Payment details page](https://join.bulb.co.uk/join/quick-signup), ensure a proper `<label>` element is used, and is associated to the `<input>` using `for` and `id` as in the above code example.

### Submit an electricity meter reading

In this case, both a group label and individual labels are missing.

For the [Submit an electricity meter reading](https://my.staging.bulb.co.uk/dashboard/meters/give-reading/electricity), include invisible but accessible labels in the form "First number", "Second number" etc for each input/number. In addition, put the `<h4>` (which ought to be an `<h2>` — see {{% pattern "Heading structure" %}}) and description inside a `<legend>` and group all the controls inside a `<fieldset>` as in the following code example:

{{<code numbered="true">}}
<fieldset>
  <legend>
    <h2>New electricity reading</h2>
    <p>Enter all the numbers you see on your meter</p>
  </legend>
  <!-- each loop -->
  <label for="number-1" [[[class="visually-hidden"]]]>First number</label>
  <input type="number" id="number-1" class="sc-RefOD cAjWea" name="number-1" value="0" required="">
  <!-- end each loop -->
</fieldset>
{{</code>}}

1. A special class must be used to hide the label visually, but not from assistive technologies (screen readers). The class is defined below.

{{<code>}}
.visually-hidden {
  position: absolute;
  white-space: nowrap;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
}
{{</code>}}

{{% note %}}
The above advice also applies to the previous meter reading, even though the inputs are inactive. It is important that the two alike widgets are presented in the same way.
{{% /note %}}
