import LoginPage from "./pages/LoginPage";





Cypress.Commands.add("navigateToQuotesPortal", () => {
  cy.visit(Cypress.env('CUSTOMER_URL'));
  LoginPage.loginFormValidate();
});

Cypress.Commands.add("fillSignInForm", (email, password) => {
  LoginPage.typeEmailLogin(email);
  LoginPage.typePasswordLogin(password);
});

Cypress.Commands.add("clickSubmit",
  { prevSubject: "true" },
  (subject, options) => {
    subject.click();
  }
);