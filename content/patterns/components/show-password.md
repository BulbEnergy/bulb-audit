+++
title = "Show password"
priorities = ["3"]
+++

## Introduction

The option to "show password" when one is writing it is a sound inclusive design feature, helping users to compose or check their writing of passwords. However, a "show password" button that is not technically accessible fails some of the users who may want to take advantage of it.

![Show password designed as a link, above the password input](/images/show.png)

The pictured show password control ahs a number of problems that need addressing:

* It functions as a button, but is marked up as a link
* It is not focusable by keyboard (because, as a link, it is missing an `href`)
* Were it focusable, upon clicking it, focus would be lost — because it is actually two controls, with one always hidden
* It appears _before_ the field to which it relates, which is somewhat confusing visually and represents a backwards reading order non-visually.

## WCAG criteria

{{% wcag include="2.1.1, 4.1.2, 1.3.2" %}}

## Scope of the issue

* [**Join site** My Information page](https://join.bulb.co.uk/join/quick-signup)

## Fixing the issue

Fundamentally, a toggle control should not use link semantics, or be styled as a link. Links are expected to perform linking/navigation behavior. Instead, supply the control as a checkbox, which communicates state (checked/on and unchecked/off) implicitly. This removes the necessity of managing two controls, and solves the dropped focus problem.

In the demo provided below, the checkbox is above the form field and a persistently visible label is provided above the input — see {{% pattern "Missing and placeholder labels" %}}.

{{<demo>}}
<div class="password-field">
  <label for="password">Choose a password:</label>
  <input type="password" id="password" />
  <label class="right">
    <input type="checkbox" id="show">
    Show password
  </label>
</div>
<style>
.password-field {
  font-family: sans-serif;
  font-size: 1.25rem;
  padding: 1.5rem 0;
}

.password-field * {
  font-size: inherit;
}

label {
  display: block;
}

label + input {
  display: block;
  width: 100%;
  border: 2px solid;
  margin: 0.25rem 0;
  padding: 0.25rem;
  box-sizing: border-box;
}

.right {
  text-align: right;
  font-size: 0.75rem;
}

.right * {
  vertical-align: middle;
}
</style>
<script>
var checkbox = demo.getElementById('show');
var input = demo.getElementById('password');

checkbox.addEventListener('change', function () {
    var type = input.getAttribute('type');
    input.setAttribute('type', type === 'password' ? 'text' : 'password');
})
</script>
{{</demo>}}

{{% warning %}}
The current design of form fields with just a bottom border is likely to cause confusion among users, especially when they become accompanied by persistent labels, as prescribed in {{% pattern "Missing and placeholder labels" %}}. A conventional 'box' style — as in the above demo — is recommended.
{{% /warning %}}
