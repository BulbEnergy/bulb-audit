+++
title = "Form errors"
priorities = ["2"]
+++

## Introduction

As users attempt to complete forms, it is important they are notified promptly and clearly when they make errors, and are provided with assistance in fixing those errors.

For assistive technology users, completing forms can be especially arduous where one or more of the following are true.

* The invalid state of a field is not communicated
* The error message is not associated with the field
* The presence of errors is not communicated on submission

The careful wording of error messages and descriptions is also important, as well as indicating which text is error text without relying entirely on color (see {{% pattern "Color dependence" %}}).

## WCAG criteria

{{% wcag include="3.3.1, 3.3.3" %}}

## Scope of the issue

### Marketing site

* [Home page](https://bulb.co.uk) (✖️ The "Get A Quote" form's error is not associated to the form element and is not announced on form submission.)
* [About → Our energy](https://bulb.co.uk/energy) (✖️ The "Get A Quote" form's error is not associated to the form element and is not announced on form submission. Note that, because the field here uses `required`, a browser error message appears if the field is empty.)
* [About → Business](https://bulb.co.uk/business) (✖️ Presence of errors not announced on submission; individual errors not associated with their fields; Descriptions not part of field labels.)

### Join site

* [Welcome page](https://join.bulb.co.uk/join/quote) (✖️ The "Get My Quote" form's error is not associated to the form element and is not announced on form submission.)
* [My information page](https://join.bulb.co.uk/join/quick-signup) (✖️ Individual errors not associated with their fields; form cannot be submitted until fields are corrected, so the presence of errors is not clear.)

### Accounts dashboard

* [Login page](https://my.staging.bulb.co.uk/login) (✖️ Individual errors not associated with their fields; generic "Wrong email or password" error not announced on attempted submission.)
* [Select an electricity meter reading](https://my.staging.bulb.co.uk/dashboard/meters/give-reading/electricity) (✖️ The page relies on browser validation, which is inconsistent with the bespoke implementation elsewhere.)
* [Tariff info](https://my.staging.bulb.co.uk/dashboard/personal-details) (✖️ See image below — a message is provided to alert users of errors, but not as an accessible live region; the fields that have errors are not indicated at all, let alone accessibly with `aria-invalid="true"`. Note that the "Okay" button is not necessary for any users. The error can simply disappear when the form successfully submits. Remove this button.)

![Tariff page error message](/images/tariff-error.png)

## Fixing the issue

Form error messages must be included consistently and accessibly across the sites.

### Individual form errors

The following code example exemplifies a typical form field in its invalid/errored state, with notes to follow:

{{<code numbered="true">}}
<label for="name">
  Your name:
  [[[<div class="description">Including your forename and surname</span>]]]
</label>
<input id="name" name="postcode" [[[aria-describedby="name-error"]]] [[[aria-invalid="true"]]]>
<div [[[id="name-error"]]]>
  [[[<strong>Error:</strong>]]] Please enter a valid post code.
</div>
{{</code>}}

1. If present, a description should be part of the label, so _inside_ the label element (see [About → Business](https://bulb.co.uk/business) where it is currently adjacent).
2. The `aria-describedby` attribute associates the input field to the error message element using the shared "`name-error`" cipher, in this case.
3. The `aria-invalid` property sets the state and tells assistive technology users who have focused the field that it is invalid. Note that you must explicitly write `="true"`. Just including `aria-invalid` (boolean) is not reliable.
4. The `id` value matches the `aria-describedby` value
5. To identify the error _as_ an error, use _spell it out_ (or use an icon, as described in {{% pattern "Color dependence" %}}).

### Announcing the presence of errors

You should let users attempt form submission and alert them to errors if they are present.

In the case of forms with multiple fields, a generic message should appear. This is the case on the [About → Business](https://bulb.co.uk/business) page already. However, the message is not announced in screen readers because it does not belong to a [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).

If you are not familiar with live regions, they announce (in screen readers) content as it is  added with JavaScript. The basic markup for an alert live region is as follows.

{{<code>}}
<div role="alert" aria-live="assertive">
  <!-- add anything here to have it announced in screen reader software -->
</div>
{{</code>}}

{{% note %}}
In the case of the [Login page](https://my.staging.bulb.co.uk/login), the non-field-specific "Wrong email or password" error should belong to a live region so that it is announced on attempted submission.
{{% /note %}}

Here is a little demo, showing you how your form errors live region would work. If you are using a Macbook, simply press <kbd>CMD</kbd> + <kbd>F5</kbd> to activate the Voiceover screen reader, then press "submit" to both reveal and announce the message.

{{<demo>}}
<form>
  <button type="submit">Submit</button>
  <div role="alert"></div>
</form>
<style>
button, div {
  font-family: sans-serif;
  font-size: 1.25rem;
  border-radius: 0.25rem;
}

button {
  background: #01cb81;
  padding: 0.5rem 1rem;
}

[role="alert"] {
  padding: 0.5rem;
  border: 2px solid #f55;
  margin-top: 0.5rem;
}

[role="alert"]:empty {
  display: none;
}
</style>
<script>
demo.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  demo.querySelector('[role="alert"]').innerHTML = '<strong>Errors:</strong> Please fix the form errors and submit again.'
});
</script>
{{</demo>}}

#### "Get A Quote" / "Get My Quote"

These simple, one input forms do not need a separate announcement for invoked errors. Instead, the individual post code error message can be made a live region.

{{<code numbered="true">}}
<label for="postcode">Your postcode:</label>
<input id="postcode" name="postcode" aria-describedby="postcode-error">
<div id="postcode-error" role="alert">
  <svg aria-label="Error:" focusable="false">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/images/icons/forms.svg#error"></use>
  </svg>
  Please enter a valid post code.
</div>
{{</code>}}

{{% warning %}}
It is not reliable to add a live region _with_ its content to the page and expect immediate announcement. Instead, you must add the live region element first, then add the content you wish announced to it. One exception is on page load: If the page loads with a live region present, it will announce the live region in many browser / assistive technology combinations.
{{% /warning %}}

### Suppressing browser validation

Make sure your bespoke error notification system is consistent across the forms and sites, to reduce confusion. Where forms, such as the [Select an electricity meter reading](https://my.staging.bulb.co.uk/dashboard/meters/give-reading/electricity) form (pictured) include automatic browser validation, suppress it by applying `novalidate` to the `<form>` element.

The **Marketing site** [Home page](https://bulb.co.uk) quote form differs from the **Join site** [Welcome page](https://join.bulb.co.uk/join/quote) quote form in that browser validation is used for an empty field. Browser validation is not consistent between browsers, so each quote form should use the bespoke/JavaScript validation.

See {{% pattern "Inconsistency" %}} for more.
