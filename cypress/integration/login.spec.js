/// <reference types="cypress" />

import LoginPage from "../support/pages/LoginPage";
const loginPage = new LoginPage();
import { LOGIN_MESSAGES,PATHS } from '../support/constants';


describe("Customer portal Login", () => {

  before(function () {
    cy.fixture('adminUser').as("data");
    
  })

  context("succsessful Login as admin", () => {
    it.only("Given the user navigates to the quotes portal", () => {
        cy.navigateToQuotesPortal();
    }); 
    it.only("When the user tries to signin to customer portal as a admin user", function (){
      cy.fillSignInForm(this.data[0].email, this.data[0].password).clickSubmit(loginPage.elements.signInButton());
    });
    it.only("Then the user should navigate to home page",() => {
      cy.url().should("include", PATHS.PATH_DASBOARD_CUSTOMER);
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
