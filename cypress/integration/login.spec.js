/// <reference types="cypress" />


describe("Customer portal Login", () => {
  context("succsessful Login", () => {
    it.only("Given the user navigates to the quotes portal", () => {
        cy.navigateToQuotesPortal();
    });

    it.skip("Then try to browse to another url", () => {
        cy.visit.only("https://www.google.com/")
    })
  });

  context("facebook", () => {
    it.skip("Given the user navigates to facebook", () => {
        cy.visit.only("https://www.facebook.com")
    });

    it.skip("Then try to browse to another url", () => {
        cy.visit.only("https://www.google.com/")
    })
  });

  context("facebook", () => {
    it.skip("Given the user navigates to facebook", () => {
        cy.visit.skip("https://www.facebook.com")
    });

    it.skip("Then try to browse to another url", () => {
        cy.visit.skip("https://www.google.com/")
    })
  });
});
