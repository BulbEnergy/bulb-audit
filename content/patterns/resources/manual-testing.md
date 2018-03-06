+++
title = "Manual Component Testing"
+++

The following is a guide on how to manually test new components for accessibility. No new components created for the **Bulb** interfaces should reach production without passing these checks.

## 1. Keyboard

{{% expandable label="Introduction" level="3" %}}
All functionality that is available by mouse or touch should also be available by keyboard. Keyboard operation is possible by moving to ('focusing') interactive elements and activating them using keystrokes.

The important keys for testing are:

* <kbd>Tab</kbd> for moving focus to the next interactive element
* <kbd>Shift</kbd> + <kbd>Tab</kbd> for moving focus to the previous interactive element
* <kbd>Enter</kbd> and/or <knd>Space</kbd> for activating (i.e. pressing/clicking) the interactive element
* <kbd>←</kbd> and/or <kbd>→</kbd> for moving focus within tabs and some other custom controls
* <kbd>Esc</kbd> for closing menus, dialogs, and popups
{{% /expandable %}}
{{% expandable label="Tests" level="3" %}}
1. When you move to the component using your <kbd>Tab</kbd>, does a part of the component become focused?
    * If a part of the component receives focus, but the component is not intended to be interactive: **Fail**
    * If _no_ part of the component receives focus, but the component _is_ intended to be interactive: **Fail**
2. Can you see an indication of focus for each interactive element you move to?
    * No, there are no focus styles: **Fail**
    * Yes, but the focus styles are very faint: **Fail**
3. When you hit <kbd>Enter</kbd> and/or <kbd>Space</kbd> on each interactive element, does it activate as it does by mouse?
    * No: **Fail**
4. Are interactive elements focusable in a logical order (from top to bottom, left to right)?
    * No, the focus order through the component does not correspond to the visual layout: **Fail**
5. Are any invisible elements focusable, at any point during interaction?
    * Yes, I can focus invisible elements: **Fail**
6. Are any non-interactive elements focusable within the component (plain text elements, container elements, etc.)?
    * Yes: **Fail**
7. At any point, is focus 'trapped' on one element or within a set of elements?
    * Yes, I am unable to move focus away from the component: **Fail**
8. Does focusing an element change your context (e.g. reloading the page)?
    * Yes, my focus is moved unexpectedly after focusing an element: **Fail**
9. When a popup menu is opened, is focus moved to it or, otherwise, is it next in the order of focus?
    * No: **Fail**
10. When a dialog is opened and closed, is focus moved to the dialog and back to the control that opened it respectively?
    * No, I'm not able to reach the dialog and/or closing the dialog does not move focus back to where I started: **Fail**
{{% /expandable %}}

## 2. Screen reader

{{% expandable label="Introduction" level="3" %}}
Many types of users, including blind users, dyslexic users, and users with low literacy, use screen reader software to help them perceive and operate digital interfaces. Screen readers offer an array of keyboard shortcuts not available to keyboard users _not_ running screen reader software. Manual testing is therefore different.

Screen reader software varies greatly. The following tests are designed for use with OSX's in-built VoiceOver screen reader. To get set up:

* Open Safari
* Navigate to the page with the component for testing
* Plug in your headphones ;-)
* Activate VoiceOver with <kbd>Cmd</kbd> + <kbd>F5</kbd>
{{% /expandable %}}
{{% expandable label="Tests" level="3" %}}
1. Hold down <kbd>Ctrl</kbd> + <kbd>Alt</kbd> and use the right arrow key to move towards the component, then through each element within it (a black outline should show you where you are on the page).
    * Is any of the visible text mispronounced? **Fail**
    * Is anything not visible (that does not aide the screen reader user) announced? **Fail**
    * Are important element 'roles' such as "heading" for headings, "button" for buttons, and "link" for links not announced where expected? **Fail**
2. If the component is interactive, operate it as you did when testing by keyboard (see previous section).
    * Are any form controls not identified by their role (e.g. "input" or "checkbox")? **Fail**
    * When you focus form controls, do any fail to announce an associated label, such as "email" (or similar) for an email input? **Fail**
    * When focusing any invalid field, is it not identified as "invalid" or is the error message not announced? **Fail**
    * Do buttons that affect state (such as toggle buttons) fail to communicate state ("pressed"/"unpressed" or "expanded"/"collapsed")? **Fail**
3. If, during the operation of the component, a notification appears such as an error message or a "loading" spinner...
    * Does the notification fail to announce via the screen reader upon arrival? **Fail**
{{% /expandable %}}
