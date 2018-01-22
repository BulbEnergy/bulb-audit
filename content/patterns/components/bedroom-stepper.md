+++
title = "Bedrooms stepper"
+++

## Introduction

The **Join Site** provides a "stepper" component for incrementing and decrementing the number of bedrooms the user's house or flat contains (pictured).

![Stepper component with plus and minus buttons](/images/stepper.png)

There are a number of issues relating to this implementation:

* The plus and minus buttons do not have focus styles
* The plus and minus buttons do not have labels
* The purpose of the controls is not reported to screen readers
* The updating of the number of bedrooms is not reported to screen readers

It is also unintuitive that the values 'cycle'. That is, if I'm on "5+ bedrooms" and I try to add another bedroom, the value cycles back to "1". This is likely to cause confusion since it means each button does the _opposite_ of what its label claims, under certain conditions.

## WCAG criteria

{{% wcag include="3.3.2, 2.4.7, 4.1.2" %}}

## Scope of the issue

Only the **Join Site** is affected, at [https://join.bulb.co.uk/join/questions/my-bedrooms](join.bulb.co.uk/join/questions/my-bedrooms).

## Fixing the issue

The component needs to be restructured as a fieldset with a legend, as in {{% pattern "Answer choices" %}}. The other provisions are included in the below code example, with notes to follow.

{{<code numbered="true">}}
<form>
  <fieldset>
    <legend>[[[<h1>The number of bedrooms I have is</h1>]]]</legend>
    <button type="button" [[[aria-label="add a bedroom"]]] [[[aria-describedby="current"]]] id="add"></button>
    <div [[[role="status"]]] id="current">
      2 bedrooms
      [[[<span class="visually-hidden">currently chosen</span>]]]
    </div>
    <button [[[type="button"]]] aria-label="remove a bedroom" aria-describedby="current" id="remove"></button>
  </fieldset>
  <button type="submit">Continue</button>
</form>
{{</code>}}

1. The page's `<h1>` forms the legend/group label for the button controls. The wording of the `<h1>` has been changed in accordance with {{% pattern "Wording" %}}.
2. Screen reader-accessible labels are provided via `aria-label`.
3. The buttons are each described by the `#current` element, so when they are focused the screen reader user is made aware of the current number of bedrooms chosen.
4. The `#current` element is also an ARIA live region, meaning that changes to its text are announced as feedback in screen readers. See {{% pattern "Form errors" %}} for more on live regions.
5. To make the description more clear non-visually, some visually hidden text is provided to clarify. The special `.visually-hidden` class is set out in {{% pattern "Form errors" %}}.
6. Each button has `type="button"`. This prevents browsers from seeing the buttons as submit buttons and using them to submit the form.

### Demo

The following is provided for testing in screen readers. The styling is not intended to match in this case. To test the demo in VoiceOver, press <kbd>CMD</kbd> + <kbd>F5</kbd> and use the <kbd>Tab</kbd> and <kbd>Enter</kbd> keys to operate the component controls

{{<demo caption="Unlike in the current implementation, the demo does not 'cycle' the values. Pressing '+' can no longer remove bedrooms (for example)">}}
<form>
  <fieldset>
    <legend><h1>The number of bedrooms I have is</h1></legend>
    <button type="button" aria-label="add a bedroom" aria-describedby="current" id="add">+</button>
    <div role="status" id="current">
      <span id="num">2</span> bedrooms
      <span class="visually-hidden">currently chosen</span>
    </div>
    <button type="button" aria-label="remove a bedroom" aria-describedby="current" id="remove">-</button>
  </fieldset>
</form>
<script>
var form = demo.querySelector('form');
var num = demo.getElementById('num');
form.addEventListener('click', function (e) {
    var modifier = e.target.id === 'add' ? 1 : e.target.id === 'remove' ? -1 : null;
    if (modifier) {
      if (modifier === 1 && parseInt(num.textContent) === 5) {
        return;
      }

      if (modifier === -1 && parseInt(num.textContent) === 1) {
        return;
      }

      num.textContent = parseInt(num.textContent) + modifier;

      if (parseInt(num.textContent) === 5) {
        num.textContent += '+'
      }
    }
})
</script>
<style>
form {
  font-family: sans-serif;
  text-align: center;
  font-size: 1.25rem;
}

fieldset {
  border: 0;
}

form h1 {
  font-size: 1.5rem;
}

button {
  font-size: inherit;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  background: #19ac58;
  font-size: 1.25rem;
}

.visually-hidden {
  position: absolute;
  white-space: nowrap;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
{{</demo>}}
