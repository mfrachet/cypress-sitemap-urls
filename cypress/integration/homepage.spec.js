/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example mfrachet.github.io", () => {
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
});
