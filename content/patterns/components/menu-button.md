+++
title = "Menu buttons"
priorities = ["1"]
+++

## Introduction

A mainstay in responsive design, the "hamburger" menu button secretes a menu of navigation options that can be revealed on click, press, or — more likely — tap. There is some [concern over the usability of hamburger menus](https://www.nngroup.com/articles/hamburger-menus/) meaning they should only be employed where absolutely necessary. If only a few navigation items are provided, simply rearranging them for small screens is probably preferable.

![Hamburger style menu on MyBulb account dashboard](/images/ham.png)

Where menu buttons _are_ included, they need to conform to accessibility standards like any other control. Be aware that not all users of small screens are operating by touch. Keyboard accessibility is still important.

In the case of the **Bulb** menu buttons (found in both the **Marketing site** and **Account dashboard**), there are multiple problems. These are detailed in the [**Scope of the issue**](#scope-of-the-issue) section to follow.

## WCAG criteria

{{% wcag include="1.3.1, 2.1.1, 2.4.3, 2.4.7, 3.3.2, 4.1.2" %}}

## Scope of the issue

### Marketing site

* The menu button has no label; it is simply announced as "button" in screen readers.
* The menu button does not include `aria-haspopup`, telling the assistive technology user that the menu is a popup menu.
* Focus is not moved to the menu upon opening it, meaning its presence is not announced.
* Focus is not trapped within the popup menu while it is open, meaning users can focus hidden content on the page
* The menu's close button has no label either

### Account dashboard

The problems are much the same as the version on the **Marketing site**, with the following additional issues:

* The menu button uses the incorrect element/role (`<a>` / link)
* The close button inside the menu uses the incorrect element/role (`<a>` / link)
* Neither the menu button or close button include an `href`, making them unfocusable by keyboard

## Fixing the issue

Neither of the two implementations conform to a standard (WAI-ARIA) pattern. They are, functionally, a hybrid between an ARIA menu button / menu, a dialog, and a basic collapsible region. Therefore, a custom solution is in order. It is recommended the same solution / markup is used for both the **Marketing site** and **Account dashboard**.

### HTML

To begin, a basic HTML template is provided below, with notes to follow.

{{<code numbered="true">}}
<button [[[aria-label="navigation menu"]]] [[[aria-haspopup="true"]]]>☰</button>
<div [[[hidden]]]>
  <ul [[[role="menu"]]]>
    <li><a href="[url]">[link text]</a></li>
    <li><a href="[url]">[link text]</a></li>
    <li><a href="[url]">[link text]</a></li>
  </ul>
  [[[<button aria-label="close menu">✖️</button>]]]
</div>
{{</code>}}

1. The menu button and close button are labeled with `aria-label`.
2. The `aria-haspopup` property tells screen reader users that the button will move focus into a popup when clicked.
3. The `role="menu"` attribute on the list, announces the list as a menu in assistive software. The items are enumerated, just as when using a standard `<ul>`.
4. The close button comes after the menu in the source order.

### Behavior

The behavior of the menu is paramount, with focus being carefully managed. Here are the steps you need to follow:

1. When the user clicks the menu button, focus is moved to the _first_ link element within the menu.
2. When the user _unfocuses_ the close button, focus moves back to the first menu item, trapping focus within the menu until the user closes it.
3. When the user clicks the close button _or_ presses the <kbd>ESC</kbd> key, the menu is hidden and focus is returned to the menu button. It is important the user is returned to their starting point, before the menu was activated.

Below is a [codePen demo](https://codepen.io/heydon/pen/59b9e0007e15c9d71b0664a344c0c27e/) which implements this markup and behavior. The JavaScript is written in vanilla ES6 and is commented. It will need to be converted into a React component for the **Account dashboard**.

{{% codePen 59b9e0007e15c9d71b0664a344c0c27e %}}
