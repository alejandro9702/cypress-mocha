import LoginPage from "./pages/LoginPage";

// const { MailSlurp } = require("mailslurp-client");

const apiKey = Cypress.env("CYPRESS_MAILSLURP_API_KEY");
// const mailslurp = new MailSlurp({ apiKey });

const loginPage = new LoginPage();

Cypress.Commands.add("navigateToQuotesPortal", () => {
  cy.visit(Cypress.env('CUSTOMER_URL'));
//   loginPage.loginFormValidate();
});