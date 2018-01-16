+++
title = "Text alternatives"
+++

## Introduction

For blind users, textual alternatives of important visual information must be provided. Composing that text effectively is a question of context.

For example, a logo that is intended as a study in logo design should include a textual alternative — typically via an `<img>` tag's `alt` attribute — that describes the features of the logo, such as the colors and typography. For **Bulb**'s logo this might read something like, _" expressive, hand written text, in white, and featuring hooped ascenders"_.

On the other hand, where the logo is used as the content of a link to the site's home page, _"Bulb home page"_ would suffice. That is, the action of the link is pertinent to the user, not the design of the lettering.

Decorative images, which include no salient information, are obstructive to non-visual users and must be removed from screen reader output. The only reliable way to do this is by providing `alt=""` (empty value). Omitting the `alt` attribute altogether will result in browsers and screen readers falling back to reading the `src` value, which is rarely helpful.

## WCAG criteria

{{% wcag include="1.1.1" %}}

## Scope of the issue

## Fixing the issue
