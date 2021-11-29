import LoginPage from "./pages/LoginPage";



const loginPage = new LoginPage();

Cypress.Commands.add("navigateToQuotesPortal", () => {
  cy.visit(Cypress.env('CUSTOMER_URL'));
  loginPage.loginFormValidate();
});

Cypress.Commands.add("fillSignInForm", (email, password) => {
  loginPage.typeEmailLogin(email);
  loginPage.typePasswordLogin(password);
});

Cypress.Commands.add("clickSubmit",
  { prevSubject: "true" },
  (subject, options) => {
    subject.click();
  }
);