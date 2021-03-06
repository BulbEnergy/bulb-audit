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

## Types, descriptions, and placeholders

Ideally, we don't want to be throwing and communicating errors at all. So it is important to guide the user from the outset and help them not make mistakes. Using correct input types, descriptions, and placeholders should mitigate error handling.

* **Types:** Using an appropriate type has benefits such as suppressing the entry of incorrect characters, and displaying an appropriate virtual keyboard configuration. Use `type="number"` for fields expecting numbers only.
* **Descriptions:** These should appear inside the `<label>` element, below the main label text and above the input itself. Use a sentence or two to explain what input is expected. Not necessary for common fields such as name or email. The `<TextInput>` component in the pattern library comes with a `description` prop.
* **Placeholder:** Avoid using the `placeholder` element as a substitute for the `<label>`. Instead, where appropriate, provide an example of valid entry. For example: `e.g. Heydon666` for a username field. The "e.g." prefix is important because it makes it explicit that it is a suggestion only, and not a prepopulated value.

### Example

By making the description part of the `<label>` it is available to assistive technologies upon focusing the field. In the following example, the description is demarcated using a `<small>` element. This would most likely be set to `display: block`.

```html
<label for="discount-code">
  Discount code
  <small>The five digit code sent to you by email.</small>
</label>
<input type="number" id="discount-code" name="discount-code" placeholder="e.g. 56291" />
```

Note that the least important part of the above example is the `placeholder` which can be omitted in most cases. The `description` takes precedence for inputs that need explaining.

## Before submission

For each field, ensure that:

1. `aria-invalid` is not present on any fields
2. `aria-required` is set to `true` if applicable (set it on the parent `fieldset` for radio groups where no default radio is selected). In some circumstances, you may want to append the label with an asterisk; a conventional way to show it is required. However, since optional fields are less common, it is more important to pick them out, by appending _"(optional)"_.
3. Complex input requirements are handled with a description _inside_ the `<label>`, or `<legend>` for radio button fieldsets
4. A live region is present in the page, directly above the submit (and cancel) button (see **General error message**, below)

Also ensure the parent form has the `novalidate` attribute. We are using our own validation process and do not want inconsistently implemented HTML5 validation messages to appear.

### No instant error handling

We have deemed instant error handling — as the user types — aggressive and distracting. In some cases, such as positive validation on a name field after one character has been typed, it can also be confusing (especially to users with cognitive impairments).

Instead, fields that are set to validate and display error (and/or) success messages/icons should only do so when the field is blurred. As standard, no positive validation should occur on `blur`; only mistakes should be highlighted. In some cases, where a very specific form of input is required, positive validation _can be_ performed on `blur`. Usually this is where a number of fields need to match up mutually, such as a password and password confirmation fields, or a set of bank details.

![positive validation of card number and sort code, showing ticks](/images/positive_val.png)

See [the design kit](https://www.figma.com/file/QVXX2E8G1IXhduyMhrnIMTvQ/V02_Bulb-Design-Kit?node-id=0%3A768) for the standard and positive validation flows illustrated.

While screen reader users will not be aware of the validation error until they refocus the field, they will know to do so having received the **general error message** after attempted submission (defined below).

## On submission (with errors)

### General error message

On submission, if there are still individual errors present, a general message announcing the presence of errors needs to be included, as a screen reader accessible live region.

Be sure to place this message component directly above the submit (and cancel) buttons so that the user does not need to scroll in order to see it. See the example from the marketing business page below.

![The red error message appears above the Request A Quote button](/images/general-error.png)

Note that the live region that makes this message accessible should already exist in the page. The message is inserted _inside_ the live region for it to announce correctly in screen readers. If you include the live region _with_ the message, it will not work.

```html
<!-- before insertion -->
<div role="alert" aria-live="assertive">
</div>

<!-- after triggering -->
<div role="alert" aria-live="assertive">
  <p class="message">
    <svg aria-label="error">...</svg>
    Oops! Your form has some errors. Please fix them before continuing.
  </p>
</div>
```

### Individual fields

After attempted submission, for each field ensure the following. Note that empty required fields would now be considered as invalid, and display error messages.

* Where the field is **valid**:
    1. The field element/input, or `<fieldset>` for radio buttons, has no `aria-invalid` attribute
* Where the field is **invalid** or empty but **required** (including for radio button sets):
    1. The field element/input, or `<fieldset>` for radio buttons, has `aria-invalid="true"`
    2. An error message is associated to their input/field, or `<fieldset>` for radio buttons, using `aria-describedby` with a value of the error message element's `id`
    3. The error message appears directly below the input or `<fieldset>` in question
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

## Validation flow in pictures

The following diagram steps though eight steps of a typical form validation flow. Each numbered step is described below the diagram.

![six steps to validation, described below](/images/form-process.svg)

1. The first (required) field is focused, showing the blue focus style.
2. When the field is blurred after the user has not entered input, the error style and message appears. `aria-invalid="true"` is applied to the input, and the error message is associated with the input's `id` using `aria-describedby="[the id]"`.
3. The user could go back up straight away to fix the field, but in this case continues to fill out the second field which has now been focused.
4. When this **Last name** field (which is simply required and has been filled out) is blurred, showing no successful message as it is not needed, and the user begins to type into the email field.
5. The field is filled out correctly (a valid email format is used).
6. When the submit button is pressed, there are still errors in the form. In which case, the **general error message** (inserted in an ARIA live region, see above) appears. This alerts sighted and blind users to move back up the form to fix the errors.
7. The user moves focus up through the successfully completed fields and focuses the first, invalid field. The focus style overrides the error style _but_ the message remains to help instruct the user in fixing the error. This is particularly important for fields expecting a certain format and requiring specific instructions.
8. When the corrected field is blurred, the error style is removed, as well as `aria-invalid="true"`. The **general error message** disappears because it is no longer applicable. The user is free to submit. Pictured: the second field is focused on the (keyboard) user's way down to the submit button.

## After submission (no errors)

If submission was successful, this needs to be clear. There are a few things to consider depending on the circumstances.

1. **Does the form itself disappear (is it removed from the DOM)?** You should programmatically focus a success message such as "Password successfully updated" (using a React `ref` and `focus()`, typically)
2. **Is the user redirected to a new page?** Make sure that page includes some kind of success message. The easiest way is to probably include it in the page `<title>` (e.g. `<title>Your account settings (you successfully changed your password)</title>`). An additional flash message in the page (below the main title) is recommended.
