+++
title = "Visually hidden class"
+++

In some circumstances, you will want to provide clarifying text to screen reader users which is not necessary for sighted users. The following `.visually-hidden` class hides text visually without silencing its element's content in screen readers.

Use it judiciously, since in most cases sighted and unsighted users should be able to read the same content, as part of the same experience.

```css
.visually-hidden {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

## Example usage

```html
<p class="visually-hidden">This text is not visible but will be read out in screen reader software</p>
```
