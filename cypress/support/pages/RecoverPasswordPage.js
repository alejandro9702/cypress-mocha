///<reference types="Cypress"/>
var faker = require("faker");
const FAKE_PASSWORD = faker.internet.password();

class RecoverPasswordPage {
  elements = {
    newPasswordInput: () => cy.xpath("(//input[@name='password'])[1]"),
    newPasswordConfirmInput: () => cy.xpath("(//input[@name='password'])[2]"),
    changePasswordButton: () => cy.get(".auth0-lock-submit > span > svg"),
    recoverPasswordRules: () =>
      cy.get(".auth0-lock-password-strength .animated . fadeIn"),
    resetPasswordMessage:() =>cy.get('.auth0-lock-confirmation-content > p')
  };

  typeNewPassword(password) {
    let passwordString = password === "" ? FAKE_PASSWORD : password;
    this.elements
      .newPasswordInput()
      .should("be.visible")
      .should("have.attr", "placeholder", "your new password")
      .should("have.attr", "type", "password")
      .type(passwordString)
      .then(() => {
        this.typeConfirmNewPassword(passwordString);
      });
  }

  typeConfirmNewPassword(password) {
    this.elements
      .newPasswordConfirmInput()
      .should("be.visible")
      .should("have.attr", "placeholder", "confirm your new password")
      .should("have.attr", "type", "password")
      .type(password);
  }
}

export default RecoverPasswordPage;
