+++
title = "Elements cannot be focused"
priorities = ["1"]
+++

## Introduction

All interactive elements — buttons, links, form controls — need to be focusable by keyboard. If they cannot be focused they cannot be activated, meaning users who depend on the keyboard for navigation will miss out on functionality.

Common mistakes include using `<div>` or `<span>` elements as substitutes for `<button>`s and links. Or using a link _as_ a button and omitting its `href` which makes it a 'placeholder link' that does not receive focus.

## WCAG criteria

{{% wcag include="2.1.1, 2.4.3" %}}

## Scope of the issue

### Join site

There are instances of links being used to trigger JavaScript events, with their `href` omitted. Critically, the "Switch now" button (found on the ["Switch now" page](https://join.bulb.co.uk/join/quote-result), and pictured below) cannot be focused.

![Switch now button in green](/images/switch-now.png)

The "See tariff details" control below it suffers the same issue. Here is the code (note the lack of `href`):

{{<code>}}
<a ng-click="QuoteResultCtrl.showModal('tariff')" class="quote-result-switch-now-box__link">See tariff details</a>
{{</code>}}

In addition, the "Continue to the next step" control in the "Is your email address correct?" dialog (pictured) is a `<span>` with a `ng-click` handler, meaning it is not focusable and not communicated as an interactive element in assistive technologies.

![Is your email address correct dialog](/images/email-correct.png)

## Fixing the issue

### Join site

The ["Switch now" button](https://join.bulb.co.uk/join/quote-result) should remain a link, because it navigates the user to a new screen. It is recommended the `href` provided is the URL of the page to which the JavaScript transports the user. The "See tariff details" control below it should be a `<button>` since it invokes an in-page dialog screen.

The "Continue to the next step" control in the "Is your email address correct?" dialog should be a link with an `href` pointing to the "next step". See {{% pattern "Routing" %}} for the related issue about different screens in the **Join site** using the same URL.
