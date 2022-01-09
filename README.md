A Cypress command allowing to retrieve all the URLs of a `sitemap.xml` document. Widely inspired by [the according Cypress example](https://github.com/riccardogiorato/cypress-for-everything/blob/main/examples/sitemap/cypress/integration/sitemap-fast.ts).

## Why?

When building websites that are highly dynamic because of the use of a CMS to generate pages, it may be complex to define how to test them. This plugin allows to retrieve all the urls available in the website's `sitemap.xml` in order to run tests on them. For instance, it can be used to run an `axe` audit on every single page inside the `sitemap.xml` file.

## Installation

```sh
$ yarn add cypress-sitemap-urls

# or

$ npm i cypress-sitemap-urls
```

## In your code

Inside the `cypress/support/commands.js` file, add the following at the top:

```js
import "cypress-sitemap-urls";
```

And then, in your cypress tests:

```js
it("shoots axe on every page in the sitemap", () => {
  cy.siteMapUrls("https://mfrachet.github.io/sitemap/sitemap-0.xml").then(
    (urls) => {
      urls.forEach((url) => {
        cy.visit(url);
        cy.injectAxe();
        cy.checkA11y();
      });
    }
  );
});
```
