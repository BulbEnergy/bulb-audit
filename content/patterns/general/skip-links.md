+++
title = "Skip links"
priorities = ["3"]
+++

## Introduction

**WCAG 2.0** mandates a 'bypass' mechanism to enable users that navigate web pages by keyboard to skip over introductory content and go directly to the main (unique) content of the page. Without such a provision, accessing page content can be time consuming and arduous.

With the introduction of landmark elements like [`<main>`](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/main.html), it has become easier for screen reader users to navigate between the larger sections of the page using software-specific shortcuts. However, sighted keyboard users frequently do not run screen readers, and many screen reader users are not aware of these new features.

A special same-page hyperlink (often called a 'skip link') at the beginning of the page source, and pointing to the `<main>` element, allows the user to skip over the header and navigation of the page where desired.

## WCAG criteria

{{% wcag include="2.4.1" %}}

## Scope of the issue

None of the **Bulb** sites' pages provide skip links.

## Fixing the issue

The skip link element needs an `href` that points to the `id` (document fragment) of the `<main>` element. Fortunately, a `<main>` element is already provided in some cases. Where it is not, you must provide one. It should wrap the main content of the page — the content below the header and above the footer, basically.

### HTML

{{<code numbered="true">}}
<body>
  <a href="#main">skip to content</a>
  <!-- header and navigation, etc -->
  <main id="main" [[[tabindex="-1"]]]>
    ...
  </main>
{{</code>}}

1. Note that `tabindex="-1"` has been applied. This fixes same-page focus behavior in some older browsers.

### CSS

A persistent skip link at the top of the page is considered clutter by many designers. Instead, you can hide the skip link off-screen until it is focused by keyboard.

{{<code numbered="true">}}
[href="#main"] {
  position: absolute;
  [[[right: 100%]]];
}

[href="#main"]:focus {
  [[[position: static]]];
}
{{</code>}}

1. Hiding the link off-screen can be done a number of ways, but using a `100%` positioning value is probably one of the more efficient
2. To place the link back into the flow of the page on focus, simply change the position property to `static`. If you want the link to overlay the page, keep the `absolute` positioning and change  the `left`, `right`, and `top` values to your liking.
