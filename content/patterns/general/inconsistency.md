+++
title = "Inconsistency"
+++

## Introduction

An important inclusive design principle, is ["Be consistent"](http://inclusivedesignprinciples.org/#be-consistent). Interfaces that fail to do so present unnecessay burdens of comprehension to users — especially those who consume HTML semantics, such as screen reader users. In particular, inconsistent navigation schema and page structure can make the user feel disoriented and unsure.

It is appreciated that a consistent experience can be difficult to achieve  when managing three separate projects, built on separate technologies, and it is noted that a design system is currently being developed to help diminish the issue.

## WCAG criteria

{{% wcag include="3.2.3, 3.2.4" %}}

## Scope of the issue

### Navigation

The main navigation differs across the three properties. The **Marketing site** offers a number of options (pictured), the **Join site** excludes navigation altogether, and the **Account dashboard** (also pictured) offers just three navigation options: "Community", "Help", and "Sign out".

![Marketing site navigation region, with several links](/images/nav-marketing.png)

![Account dashboard navigation region, with three links](/images/nav-dash.png)

Note that, while these sites are built and managed separately, users do not necessarily access them separately or consider them autonomous. The severity of this issue of consistency depends on user journeys and behavior.

In general, every [landmark region](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page) _except_ the `<main>` (or `role="main"`) region is expected to have consistent content between pages. The `<main>` region defines the unique content of the page.

### Forms
