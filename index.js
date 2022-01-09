Cypress.Commands.add("siteMapUrls", (sitemapUrl, requestOpts = {}) => {
  const actualRequestOpts = {
    ...requestOpts,
    url: sitemapUrl,
    headers: {
      ...(requestOpts.headers || {}),
      "Content-Type": "text/xml; charset=utf-8",
    },
  };

  cy.request(actualRequestOpts).then((response) => {
    const urls = Cypress.$(response.body)
      .find("loc")
      .toArray()
      .map((el) => el.innerText);

    return urls;
  });
});
