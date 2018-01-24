+++
title = "Collapsible sections"
priorities = ["2"]
+++

## Introduction

Collapsible sections are one of the simpler interaction design primitives. All they do is toggle the appearance of the flow content they introduce. The advantage of having collapsed section in the first place is that the user is afforded an overview of the page structure without necessitating scrolling through large quantities of content.

Despite the simplicity, there are a number of provisions to ensure collapsible sections are accessible:

* The toggle button must behave as a `<button>` and have the button role (either implicitly, from the element, or via `role="button"`)
* The button must not override the heading semantics; typically, it is provided as a child of the section's main heading.
* The toggle button must toggle the `aria-expanded` state between `true` (expanded) and `false` (collapsed)
* The content in its collapsed state must not be available to screen readers and interactive content within it must not be focusable (`display: none` or the `hidden` property takes care of both of these)

## WCAG criteria

{{% wcag include="1.3.1, 4.1.2" %}}

## Scope of the issue

Of the samples in the {{% pattern "Scope" %}}, only the **Marketing site**'s [About → Careers](https://bulb.co.uk/careers) page appears to be affected. However, collapsibles are a common interaction primitive and the advice to follow should be (broadly speaking) incorporated for any similar pattern.

![Open roles collapsible sections](/images/open_roles.png)

## Fixing the issue

### HTML

The following represents the HTML expected in the collapsible section's _collapsed state_.

{{<code>}}
<li class="collapsible">
  <h3>
    <button [[[aria-expanded="false"]]]>
      <span>Graduate Energy Specialist</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" focusable="false">
        <path fill="currentColor" d="m1 3 4 5 4-5z"/>
      </svg>
    </button>
  </h3>
  <div class="section-content" [[[hidden]]]>
    <!-- section content -->
  </div>
</li>
{{</code>}}

{{% note %}}
The SVG icon has `focusable="false"` to prevent it from receiving focus in Internet Explorer and `fill="currentColor"` so that the SVG adopts the font color, even as it changes according to Windows High Contrast Mode.
{{% /note %}}

In the expanded state, `aria-expanded` is switched to `true` and the `hidden` property is removed:

{{<code>}}
<li class="collapsible">
  <h3>
    <button [[[aria-expanded="true"]]]>
      <span>Graduate Energy Specialist</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
        <path fill="currentColor" d="m1 3 4 5 4-5z"/>
      </svg>
    </button>
  </h3>
  <div class="section-content">
    <!-- section content -->
  </div>
</li>
{{</code>}}

{{% warning %}}
The `hidden` property is not supported in older browsers. But you can polyfill it with the following CSS:
{{<code>}}
[hidden] {
  display: none;
}
{{</code>}}
{{% /warning %}}

### Demo

The following demo uses a simple bit of vanilla JavaScript, in ES5. It is believed that this would be most efficient on a static information site such as the **Marketing site**. It can, however, be converted as desired.

{{<demo>}}
<li class="collapsible">
  <h3>
    <button aria-expanded="false">
      <span>Graduate Energy Specialist</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" focusable="false">
        <path fill="currentColor" d="m1 3 4 5 4-5z"/>
      </svg>      
    </button>
  </h3>
  <div class="section-content" hidden>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</li>
<style>
li {
  font-family: sans-serif;
  list-style: none;
  font-size: 1.25rem;
  border-radius: 0.25rem;
  background-color: #ddd;
  margin-bottom: 1rem;
}

h3 {
  margin-bottom: 0;
}

[aria-expanded] {
  font-size: inherit;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  color: #fff;
  background-color: #19ac58;
  border-radius: 0.25rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

[aria-expanded] svg {
  width: 0.85rem;
  height: 0.85rem;
  display: inline-block;
  transform: rotate(180deg);
  transition: transform 0.25s ease-out;
}

[aria-expanded="true"] svg {
  transform: rotate(0deg);
}

.section-content {
  padding: 1rem;
}

/* just for the demo */
.section-content p {
  margin: 0;
}
</style>
<script>
var collapsibles = demo.querySelectorAll('.collapsible');

Array.prototype.forEach.call(collapsibles, function(collapsible) {
  var btn = collapsible.querySelector('[aria-expanded]');
  var content = collapsible.querySelector('.section-content');
  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('aria-expanded') === 'true' || false;
    btn.setAttribute('aria-expanded', !expanded);
    content.hidden = !content.hidden;
  });
});
</script>
{{</demo>}}
