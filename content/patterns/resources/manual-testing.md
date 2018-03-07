+++
title = "Manual Component Testing"
+++

The following is a guide on how to manually test new components for accessibility. No new components created for the **Bulb** interfaces should reach production without passing these checks.

## Keyboard

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
    1. If a part of the component receives focus, but the component is not intended to be interactive: **Fail**
    2. If _no_ part of the component receives focus, but the component _is_ intended to be interactive: **Fail**
2. Move focus through the component, using the <kbd>Tab</kbd> key.
    1. Do any visible interactive elements lack a focus style (visual indication of focus)? **Fail**
    2. Is it possible to focus any invisible elements? **Fail**
    3. When you hit <kbd>Enter</kbd> and/or <kbd>Space</kbd> on an interactive element, does it fail to activate as it does by mouse click? **Fail**
3. Are any non-interactive elements focusable within the component (plain text elements, container elements, etc.)?
    1. Yes: **Fail**
4. At any point, is focus 'trapped' on one element or within a set of elements?
    1. Yes, I am unable to move focus away from the component: **Fail**
5. Does focusing any element change your context (e.g. reloading the page)?
    1. Yes, my focus is moved unexpectedly after focusing an element: **Fail**
6. When a popup menu is opened, is focus moved to it or — if not — is it focused next, when you press <kbd>Tab</kbd>?
    1. No: **Fail**
7. When a dialog is opened and closed, is focus moved to the dialog and back to the control that opened it respectively?
    1. No, I'm not able to reach the dialog and/or closing the dialog does not move focus back to where I started: **Fail**
{{% /expandable %}}

## Screen reader

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
    1. Is any of the visible text mispronounced? **Fail**
    2. Is anything not visible (that does not aide the screen reader user) announced? **Fail**
    3. Are important element 'roles' such as "heading" for headings, "button" for buttons, and "link" for links not announced where expected? **Fail**
2. If the component is interactive, operate it as you did when testing by keyboard (see previous section).
    1. Are any form controls not identified by their role (e.g. "input" or "checkbox")? **Fail**
    2. When you focus form controls, do any fail to announce an associated label, such as "email" (or similar) for an email input? **Fail**
    3. When focusing any invalid field, is it not identified as "invalid" or is the error message not announced? **Fail**
    4. Do buttons that affect state (such as toggle buttons) fail to communicate state ("pressed"/"unpressed" or "expanded"/"collapsed")? **Fail**
3. If, during the operation of the component, a notification appears such as an error message or a "loading" spinner...
    1. Does the notification fail to announce via the screen reader upon arrival? **Fail**
{{% /expandable %}}

## Zoom

{{% expandable label="Introduction" level="3" %}}
Low vision users and users with motor impairments tend to 'zoom' web pages so that the content easier to read and 'target' with mouse gestures and touch. There are a few different ways to zoom web pages, so a number of tests are provided.
{{% /expandable %}}
{{% expandable label="Test" level="3" %}}
1. On a Desktop or Laptop machine with a keyboard, increase 'full page zoom' to the highest level using <kbd>Cmd</kbd> + <kbd>+</kbd> (Mac) or <kbd>Ctrl</kbd> + <kbd>+</kbd> (Windows).
    1. Does any of the content go 'off screen' with no way to scroll it back into view? **Fail**
    2. Does any of the content overlap or otherwise obscure other content? **Fail**
    3. Does any text content become truncated (e.g. "Sign up" becoming "Sig")? **Fail**
    4. Does any wrapping occur that makes the interface difficult to read or understand? **Fail**
2. Reset full page zoom with <kbd>Cmd</kbd> + <kbd>0</kbd> (Mac) or <kbd>Ctrl</kbd> + <kbd>0</kbd> (Windows). Go to Chrome's `chrome://settings/` and, under **Appearance**, change **Font size** to "Very large"
    1. Does any of the content go 'off screen' with no way to scroll it back into view? **Fail**
    2. Do line heights become squashed and/or lines overlap? **Fail**
    3. Does any text content become truncated (e.g. "Sign up" becoming "Sig")? **Fail**
3. Using a touch device, such as an iPhone...
    1. Does 'pinch zoom' not work (i.e. can you not zoom by dragging your thumb and index finger apart)? **Fail**
    2. With 'auto rotate' enable, is it not possible to reorientate the content when the phone is turned on its side? **Fail**
{{% /expandable %}}
