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

Instead of disabling the submit button until the form is valid, we should allow users to attempt submission and tell them there are errors where they arise.

## Before submission

For each field, ensure that:

1. `aria-invalid` is not present on any fields (this should be automatic using the `<FormGroup>` component)
2. `aria-required` is set to `true` if applicable (set it on the parent `fieldset` for radio groups where no default radio is selected)
3. Complex input requirements are handled with a description _inside_ the `<label>` (this should be automatic using the `<FormGroup>` component)
4. A live region is present in the page, directly above the submit (and cancel) button (see **General error message**, below)

### Instant error handling

Some forms provide validation for inputs as the user types. This should generally be avoided since incomplete input is typically considered as invalid, which is discouraging. It can also be distracting to screen reader users where the error message is implemented as an ARIA live region.

It is permissible to validate on `blur`, but this should be done in conjunction with a "general" message alerting that their are errors present on `submit` (see below).

## On submission (with errors)

### General error message

Just revealing error messages for individual fields is not enough here. Firstly, a general message announcing the presence of errors needs to be included, as a screen reader accessible live region. The `<FormErrors>` component is designed for this already.

Be sure to place the `<FormErrors>` component directly above the submit (and cancel) buttons so that the user does not need to scroll in order to see it. See the example from the [marketing business page]() below.

![The red error message appears above the Request A Quote button](/images/general-error.png)

### Individual fields

After attempted submission, for each field ensure the following:

* Where the field is **valid**:
    1. The field element/input has `aria-invalid="false"` (this should be automatic using the `<FormGroup>` component)
* Where the field is **invalid**:
    1. The field element/input has `aria-invalid="true"` (this should be automatic using the `<FormGroup>` component)
    2. An error message is associated to their input/field using `aria-describedby` with a value of the field/input's `id` (this should be automatic using the `<FormGroup>` component)
    3. The error message appears directly below the input in question (this should be automatic using the `<FormGroup>` component)
    4. The error message should be accompanied by an error symbol (see the illustration of `<FormGroup>` below)

![Form Group component showing an input with an error message and error symbol](/images/form_group_error.png)

## After submission (no errors)

If submission was successful, this needs to be clear. There are a few things to consider depending on the circumstances.

1. **Does the form itself disappear (is it removed from the DOM)?** You should programmatically focus a success message such as "Password successfully updated" (using a React `ref` and `focus()`, typically)
2. **Is the user redirected to a new page?** Make sure that page includes some kind of success message. The easiest way is to probably include it in the page `<title>` (e.g. `<title>Your account settings (you successfully changed your password)</title>`). An additional flash message in the page (below the main title) is recommended.
