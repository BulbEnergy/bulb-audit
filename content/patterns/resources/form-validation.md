+++
title = "Form Validation"
+++

The Bulb sites should each conform to the same set of prescribed form validation behaviors as set out below. These behaviors are optimized for usability and accessibility and should be implemented consistently.

## Let users submit

There are a number of usability issues associated with disabled (submit) buttons.

* Difficult to discern as disabled (especially when color blind)
* Do not tend to explain why they are disabled
* Not focusable, therefore not easily discoverable using a screen reader
* [More here](https://axesslab.com/disabled-buttons-suck/)

Instead of disabling the submit button until the form is valid, we should allow users to attempt submission and tell them there are errors where they arise. By using instant error handling (see below) few users should reach the end of the form with invalid fields.

## Before submission

For each field, ensure that:

1. `aria-invalid` is not present on any fields (this should be automatic using the `<FormGroup>` component)
2. `aria-required` is set to `true` if applicable (set it on the parent `fieldset` for radio groups where no default radio is selected)
3. Complex input requirements are handled with a description _inside_ the `<label>`, or `<legend>` for radio button fieldsets  (this should be automatic using the `<FormGroup>` component)
4. A live region is present in the page, directly above the submit (and cancel) button (see **General error message**, below)

Also ensure the parent form has the `novalidate` attribute. We are using our own validation process and do not want inconsistently implemented HTML5 validation messages to appear.

### Instant error handling

* When you show the error message as the user types, make sure `aria-invalid` is simultaneously switched over to `false`.
* Do not immediately invalidate inputs that do not expect a specific form of input. Names, for example, should only take `aria-invalid="true"` and display an error message _after_ the user has attempted submission (see below).
* Always debounce input so that users get a chance to write out (for example) their whole email, or most of it, before the error message appears.
* Instantly indicate where the input becomes valid (green tick) but _only_ where a specific form of input is required (such as email). Only show a green tick for inputs which are simply required _after_ submission (see below)

## On submission (with errors)

### General error message

On submission, if there are still individual errors present, a general message announcing the presence of errors needs to be included, as a screen reader accessible live region. The `<FormErrors>` component is designed for this already.

Be sure to place the `<FormErrors>` component directly above the submit (and cancel) buttons so that the user does not need to scroll in order to see it. See the example from the marketing business page below.

![The red error message appears above the Request A Quote button](/images/general-error.png)

### Individual fields

After attempted submission, for each field ensure the following. Note that empty required fields would now be considered as invalid, and display error messages.

* Where the field is **valid**:
    1. The field element/input, or `<fieldset>` for radio buttons, takes (or keeps) `aria-invalid="false"` (this should be automatic using the `<FormGroup>` component, and will show a green tick)
* Where the field is **invalid** or **required** (including for radio button sets):
    1. The field element/input, or `<fieldset>` for radio buttons, has `aria-invalid="true"` (this should be automatic using the `<FormGroup>` component)
    2. An error message is associated to their input/field, or `<fieldset>` for radio buttons, using `aria-describedby` with a value of the error message element's `id` (this should be automatic using the `<FormGroup>` component)
    3. The error message appears directly below the input or `<fieldset>` in question (this should be automatic using the `<FormGroup>` component)
    4. The error message should be accompanied by an error symbol (see the illustration of `<FormGroup>` below)

#### Invalid radio buttons example

This is the pattern needed for invalid — because a choice is required — radio button `<fieldset>`s.

```html
<fieldset aria-describedby="error" aria-required="true" aria-invalid="true">
  <legend>Output format</legend>
  <div>
    <input type="radio" name="format" id="txt" value="txt">
    <label for="txt">Text file</label>
  </div>
  <div>
    <input type="radio" name="format" id="csv" value="csv">
    <label for="csv">CSV file</label>
  </div>
  <div>
    <input type="radio" name="format" id="html" value="HTML">
    <label for="html">HTML file</label>
  </div>
  <p id="error">You must choose one option</p>
</fieldset>
```

![Form Group component showing an input with an error message and error symbol](/images/form_group_error.png)

## After submission (no errors)

If submission was successful, this needs to be clear. There are a few things to consider depending on the circumstances.

1. **Does the form itself disappear (is it removed from the DOM)?** You should programmatically focus a success message such as "Password successfully updated" (using a React `ref` and `focus()`, typically)
2. **Is the user redirected to a new page?** Make sure that page includes some kind of success message. The easiest way is to probably include it in the page `<title>` (e.g. `<title>Your account settings (you successfully changed your password)</title>`). An additional flash message in the page (below the main title) is recommended.
