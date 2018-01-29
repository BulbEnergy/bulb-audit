+++
title = "Marketing site homepage HTML"
+++

The following is a template for the marketing site's HTML documents, using the homepage content to describe an example structure. Each page in the marketing site should follow the prescribed `<title>` pattern, include `lang` on the HTML element, and a skip link etc.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>[Site name] | [Page name]</title>
  </head>
  <body>
    <a href="#main">skip to content</a>
    <header>
      <a href="/" aria-label="Bulb homepage">
        <svg><!-- Path data --></svg>
      </a>

      <nav>
        <!--
          Site naviagtion (get a quote, about etc)
          Needs to be an unordered list of links!
        -->
      </nav>
    </header>

    <main id="main" tabindex="-1">
      <div class="component page-leader">
        <h1>Making energy simpler, cheaper, greener</h1>
        <p>Switch now and save up to £350</p>
      </div>

      <div class="component get-a-quote-form">
        <label for="postcode">Enter postcode</label>
        <input type="text" id="postcode" aria-invalid="false">
        <div class="error" id="error-postcode">
          <!-- Enter error text here on error -->
        </div>
      </div>

      <div class="component image-and-text">
        <div class="image">
          <img src="[src]" alt="[empty if decorative, descriptive/evocative if not]">
        </div>
        <div class="text">
          <h2>The most trusted energy supplier in the UK</h2>
          <p>For us, <a href="[url]">customer service</a></p>
          <!--
            Start Trust Pilot image example
            (see https://heydon.github.io/bulb-audit/patterns/general/textual-alternatives/#trust-pilot-instances)
          -->
          <a href="[url]"
            <img src="[src]" alt="Bulb on Trust Pilot (9.8 out of 10)">
          </a>
          <!-- End Trust Pilot image example -->
        </div>
      </div>

      <!--
        Further text/image sections here.
        Charts covered in https://heydon.github.io/bulb-audit/patterns/general/textual-alternatives/
      -->
    </main>

    <aside aria-labelledby="press-heading">
      <h2 id="press-heading" class="visually-hidden">Bulb in the press</h2>
      <!-- Unordered list of images with descriptive alt texts (names of papers) and quotes -->
    </aside>
    <footer>
      <!--
      Pink headings should be <h2>.
      Social media icons should be a list and images should have text alternatives
      (see https://heydon.github.io/bulb-audit/patterns/general/textual-alternatives/#home-page-https-bulb-co-uk and https://heydon.github.io/bulb-audit/patterns/general/list-structure/)
      -->
    </footer>
  </body>
</html>
```
