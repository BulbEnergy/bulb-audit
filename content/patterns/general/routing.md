+++
title = "Routing"
priorities = ["2"]
+++

## Introduction

Single-page applications present some unique challenges for accessibility, particularly in regard to routing and the navigation of views.

Views (or 'screens') in single-page applications attempt to emulate pages in more traditional multi-page sites. Visually, the experience is similar (some content is replace with some other content). However, when replacing content by manipulating the DOM _in situ_, the experience for screen reader and keyboard users is lacking. Unlike when a page is loaded, a switch in views does not announce the page's `<title>`.

Keyboard focus is also problematic, since the link focused in the previous view will have been removed from the DOM. When a true page is loaded, focus is moved to the top of the document. Between views, it becomes lost somewhere in the middle of the document.

There are a few basic provisions for accessible routing:

* The URL should change, to reflect the new location
* The back button behavior should be intact
* The `<title>` should change, to reflect the new location
* Focus should be moved to a convenient location after the new DOM structure is in place

## WCAG criteria

{{% wcag include="2.4.2, 2.4.3, 2.4.5" %}}

## Scope of the issue

Both the **Join site** and **Account dashboard** are affected, since they are built in Angular and React respectively.

The **Join site** in particular, has some issues between the 'question' pages, in that the URL and `<title>` do not change.

## Fixing the issue

The outer element for each view component should either be a `<main>` or a wrapper `<div>` within `<main>`.

When the component that represents the content of the chosen view is mounted (`componentDidMount()` in React), augment the page in the following ways:

* Update the `document.title` (based on a `prop` value is probably most efficient).
* Update the URL (this is automatic using `React-Router`, but this is not taking place on the **Join site**, using Angular),
* Move focus to the `<h1>` heading within the `<main>` element. This will announce the heading and place the keyboard user at the start of the view's content. Setting "h1" as a ref will help.

### Code

{{<code numbered="true">}}
componentDidMount() {
  document.title = this.props.title
  [[[this.refs.h1.setAttribute('tabindex', '-1')]]]
  this.refs.h1.focus()
}
{{</code>}}

1. Before being able to focus the heading, a `tabindex` value of `-1` is applied. This value allows elements to be focused programmatically (with the `focus()` method) but does not place the non-interactive element into 'focus order', which would be confusing to the user.
