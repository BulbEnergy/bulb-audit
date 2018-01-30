+++
title = "Component heading levels"
+++

Reusable components will appear in different contexts, at different levels in the document heading structure (see {{% pattern "Heading structure" %}}). It should therefore be possible to change the heading level of the component's main heading via a `level` prop.

The `aria-level` property/attribute can then be used to change the perceived level in assistive technologies. Note that `aria-level` only works on heading elements (`<h1>` — `<h6>`) or elements with `role="heading"`. It is recommended the default prop value is `2`, since most components will start at that level.

```html
<!-- component code -->
<h2 aria-level="{this.props.level}"></h2>

<!-- instance -->
<MyComponent level="3" />

<!-- how a screen reader perceives the MyComponent heading -->
<h3>Component name / main component heading text</h3>
```
