+++
title = "Navigation markup"
+++

The navigation portion of the pattern library header needs to conform to a certain markup structure for accessibility and efficiency. Here is some code to get you started, with comments to follow.

The following shows the navigation system in the desktop configuration, with the Menu button hidden and the "About us" dropdown hidden also.

{{<code numbered="true">}}
<header>
  <!-- skip link here (see `<SkipLink/>`) -->
  [[[<div class="navigation">]]]
    <div class="logo">
      <a href="/">
        <img src="path/to/logo.svg" [[[alt="Bulb homepage"]]] />
      </a>
    </div>
    [[[<div class="button-and-links">]]]
      [[[<button hidden aria-expanded="false" aria-haspopup="true">Menu</button>]]]
      [[[<nav>]]]
        <ul>
          <li><a href="[url]">Get a quote</a></li>
          <li>
            <a href="[url]" [[[role="button" aria-expanded="false"]]]>About Bulb</a>
            [[[<ul aria-label="sub menu" hidden>]]]
              <li><a href="[url]">About us</a></li>
              <li><a href="[url]">Press</a></li>
              <li><a href="[url]">Our energy</a></li>
              <li><a href="[url]">Our service</a></li>
              <li><a href="[url]">Careers</a></li>
              <li><a href="[url]">Our tariff</a></li>
              <li><a href="[url]">Bulb for business</a></li>
            </ul>
          </li>
          <li><a href="[url]">Help</a></li>
          <li><a href="[url]">Sign in</a></li>
        </ul>
        [[[<button aria-label="close" hidden>✖️</button>]]]
      </nav>
    </div>
  </div>
</header>
{{</code>}}

1. A `<div>` is used to group the logo and navigation landmark. This should be the child of a `<header>` element (as shown) which wraps all of the header content (including the `<h1>`).
2. The `alt` for the logo needs to describe the purpose of the parent link
3. This `<div>` is the second of two siblings that should be placed alongside eachother (Flexbox can push them to either side with `justify-content: space-between` on the parent `class="navigation"` `<div>`)
4. The Menu `<button>` is hidden on desktop.
5. The `<nav>` is visible on desktop, and is important because `<nav>` is a discoverable region for screen reader users. **IMPORTANT:** there is no need to manage two `<nav>` regions/lists for desktop and mobile. We can just change the styling of this list at different breakpoints.
6. The link that opens and sends focus to the mobile version of the menu needs these attributes for accessibility. `aria-expanded` needs to be toggled along with `open` (between `true` and `false`)
7. The sub menu must be a nested list, and takes `aria-label="sub menu"` to help screen reader users identify its purpose. On mobile this list would be expanded by default.
8. The close button is not needed on desktop, so is hidden here.

## Mobile configuration (open state)

With comments to follow.

{{<code numbered="true">}}
<header>
  <!-- skip link here (see `<SkipLink/>`) -->
  <div class="navigation">
    <div class="logo">
      <a href="/">
        <img src="path/to/logo.svg" alt="Bulb homepage" />
      </a>
    </div>
    <div class="button-and-links">
      <button hidden [[[aria-expanded="true"]]] aria-haspopup="true">Menu</button>
      <nav>
        <ul>
          <li><a href="[url]">Get a quote</a></li>
          <li>
            <a href="[url]" role="button" aria-expanded="false" [[[hidden]]]>About Bulb</a>
            [[[<ul aria-label="sub menu">]]]
              <li><a href="[url]">About us</a></li>
              <li><a href="[url]">Press</a></li>
              <li><a href="[url]">Our energy</a></li>
              <li><a href="[url]">Our service</a></li>
              <li><a href="[url]">Careers</a></li>
              <li><a href="[url]">Our tariff</a></li>
              <li><a href="[url]">Bulb for business</a></li>
            </ul>
          </li>
          <li><a href="[url]">Help</a></li>
          <li><a href="[url]">Sign in</a></li>
        </ul>
        [[[<button aria-label="close">✖️</button>]]]
      </nav>
    </div>
  </div>
</header>
{{</code>}}

1. In the open state, the Menu button is set to `aria-expanded="true"`
2. The `About Bulb` dropdown button is _not needed_ for mobile. The user can just enter directly into the list below it
3. The list therefore is not `hidden` by default
4. The close button is also unhidden, because it is now needed.

{{% warning %}}
The mobile navigation needs certain behaviors, particularly regarding programmatic focus management, to work. They are described and demoed here: {{% pattern "Menu buttons" %}}.
{{% /warning %}}
