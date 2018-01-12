+++
title = "Focus styles"
+++

## Introduction

Focus styling, provided by user agents by default, is used to indicate which element is currently being focused by keyboard. Typically, focus is achieved by pressing the <kbd>Tab</kbd> key. Pressing <kbd>Tab</kbd> should focus the next interactive element in the source, invoking the focus style.

Users who rely on the keyboard for page navigation include those with motor impairments due to long term ailments (such as rheumatism) or temporary injuries (like a broken wrist). Where focus styles are not provided, it is left for them to guess which element they have under focus, and is therefore ready to be activated. Their experience of using the interface will be confusing and frustrating, and they may give up on trying to achieve some tasks.

## WCAG Criteria

{{% wcag include="2.4.7" %}}

## Scope of the issue

Most of the **Marketing site** is missing focus styles. The **Join site** has a mixture of missing focus styles and somewhat inadequate default focus styles, and the **Account dashboard** relies almost entirely on default user agent styles.

## Fixing the issue

Contrary to popular belief, it is possible to provide clear but attractive focus styles without JavaScript and without adversely affecting mouse users. On the **Bulb** sites, I recommend an animated `outline` property. Press the <kbd>Tab</kbd> key to invoke the focus style on the example link provided:

{{<demo style="background-color:#ca488d; padding: 2rem; color: #fff;">}}
<style>
a, button, input, textarea {
  color: #fff;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  outline: 0.125em solid transparent;
  outline-offset: 0.5em;
}

:focus {
  outline-color: currentColor;
  outline-offset: 0.125em;
  transition: all 0.25s ease-out;
}

:hover:focus {
  outline: none;
}
</style>
<a href="#">A link element</a>
{{</demo>}}

### Code

{{<code numbered="true">}}
a, button, input, textarea /* etc */ {
  outline: 0.125em solid [[[transparent]]];
  [[[outline-offset: 0.5em]]];  
}

:focus {
  outline-color: [[[currentColor]]];
  outline-offset: [[[0.125em]]];
  transition: all 0.25s ease-out;
}

[[[:hover:focus]]] {
  outline: none;
}
{{</code>}}

1. The initial outline is invisible...
2. ... and has a wide offset.
3. On focus, the outline takes the font color. In most cases this will be the correct (visible against the background) color for the context.
4. The `outline-offset` is shrunk via a transition, drawing the eye.
5. (_optional_) By concatenating `:hover` and `:focus`, the focus style is partially suppressed for mouse users who may find it distracting.


{{% warning %}}
Buttons, such as the "Get My Quote" button for the join site (pictured), have a white font color. In which case, using `currentColor` will not work because the white outline will be invisible against the page background, which is also white.

![Get my quote green button](/images/get_quote_button.png)

To fit a style around the button's curved corners, a `box-shadow` would be more suitable than an `outline`.
{{% /warning %}}
