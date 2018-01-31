+++
title = "Component checklist"
+++

Before any component can be included in the pattern library, ensure it passes all of the following tests:

- [ ] Each visible interactive element can receive focus and be activated by keyboard, and no invisible elements can be focused using the keyboard
- [ ] No non-interactive elements can be focused by keyboard
- [ ] Interactive elements have focus styles and receive focus in a logical order
- [ ] Each element has the appropriate role — preferably _implicitly_ because it is the correct element (e.g. the button role, because it is a `<button>`) — or via the ARIA `role` attribute
- [ ] Where elements change state, the state is communicated semantically and not just by CSS style (examples: using `checked`, or `aria-expanded="[true|false]"`)
- [ ] Iconography is provided as inline SVG, and uses `currentColor` for `fill` so that Windows High Contrast Mode is honored when switched on
- [ ] Images that are non-decorative have appropriate alternative text (see {{% pattern "Text alternatives" %}}
- [ ] Images that are decorative (contain no useful information non-visually) have an empty `alt` attribute (`alt=""`)
- [ ] The correct heading structure is employed for the component's placement in the document outline (see {{% pattern "Component heading levels" %}} for changing heading level per instance of a component)
- [ ] Form elements are associated to their labels using `for` and `id` (see {{% pattern "Missing and placeholder labels" %}})
- [ ] Invalid form fields have `aria-invalid="true"` and error messages associated to them using `aria-describedby` (see {{% pattern "Form errors" %}})
