///<reference types="Cypress"/>
var faker = require("faker");

const FAKE_EMAIL = faker.internet.exampleEmail();
const FAKE_PASSWORD = faker.internet.password();

const TITLE_WELCOME = "Welcome!";
const ERROR_MESSAGE_FAILED_LOGIN = "Wrong email or password.";
const ERROR_EMAIL_REQUIRED = "Email is required";
const ERROR_PASSWORD_REQUIRED = "Password is required";
const TEXT_INFO_RECOVER_PASSWORD =
  "Please enter your email address.We will send you an email to reset your password.";


class LoginPage {
  elements = {
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    signInButton: () => cy.xpath("//button[text()='Login']"),
    passwordEye: () => cy.xpath("//button[@aria-label='toggle password visibility']"),
    welcomeTitle: () => cy.xpath("//h1[contains(text(),'Welcome!')]"),
    forgotPasswordLink: () => cy.xpath("//a[text()='Forgot password']"),
    forgotPasswordTitleForm: () =>
      cy.xpath("//h1[contains(text(),'Recovery Account')]"),
    forgotPasswordInfoForm: () =>
      cy.xpath("//p[contains(text(),'Please type account's email')]"),
    recoverPasswordInput: () =>
      cy.xpath("//input[@id='forgotPasswordEmailInput']"),
    recoverPasswordButton: () =>
      cy.xpath("//button//span[text()='Recover password']"),
    cancelRecoverPasswordButton: () =>
      cy.xpath("//button//span[text()='Cancel']"),
    needHelpLink: () => cy.xpath("//button[text()='Need help?']"),
    alertMessageLogin: () =>
      cy.xpath("//div[@id='snackbar']//div[@class='MuiAlert-message']"),
    supportSubtitle: () => cy.get('[title="Please contact us at"]'),
    supportTitle: () => cy.get('[title="Need Help?"]'),
    emailIsRequiredMessage: () =>
      cy.xpath("//p[contains(text(),'Username is required')]"),
    passwrodIsRequiredMessage: () =>
      cy.xpath("//p[contains(text(),'Password is required')]"),
  };

  /**login form validation before start the tests */
  loginFormValidate() {
    this.elements.welcomeTitle().contains(TITLE_WELCOME).should("be.visible");
    this.elements.emailInput().should("be.visible");
    this.elements.passwordInput().should("be.visible");
    this.elements.signInButton().should("be.visible");
    this.elements.passwordEye().should("be.visible");
    this.elements.forgotPasswordLink().should("be.visible");
    this.elements.needHelpLink().should("be.visible");
  }

  typeEmailLogin(email) {
    let emailString = email === "" ? FAKE_EMAIL : email;
    this.elements
      .emailInput()
      .should("have.attr", "placeholder", "Username")
      .type(emailString);
  }

  typePasswordLogin(password) {
    let passwordString = password === "" ? FAKE_PASSWORD : password;
    this.elements
      .passwordInput()
      .should("have.attr", "placeholder", "Password")
      .type(passwordString);
    this.elements.passwordEye().click();
  }

  clickNeedHelpLink() {
    this.elements
      .needHelpLink()
      .should("be.visible")
      .should("contain", "Need help?")
      .click();
  }

  blockAccount() {
    let email = FAKE_EMAIL;
    let password = FAKE_PASSWORD;

    for (let i = 0; i < 6; i++) {
      cy.fillSignInForm(email, password)
        .clickSingIn()
        .then(() => {
          if (i < 5) {
            this.elements
              .alertMessageLogin()
              .should("be.visible")
              .and("contain", ERROR_MESSAGE_FAILED_LOGIN);
            this.elements.emailInput().clear();
            this.elements.passwordInput().clear();
            this.elements
              .emailIsRequiredMessage()
              .should("be.visible")
              .and("contain", ERROR_EMAIL_REQUIRED);
            this.elements
              .passwrodIsRequiredMessage()
              .should("be.visible")
              .and("contain", ERROR_PASSWORD_REQUIRED);
          }
        });
    }
  }

  typeRecoverPasswordForm(email) {
    this.elements.forgotPasswordTitleForm().should("be.visible");
    this.elements.forgotPasswordInfoForm()
      .should("be.visible")
      .and("contain", TEXT_INFO_RECOVER_PASSWORD);
    this.elements.forgotPasswordInfoForm()
      .should("be.visible")
      .and("contain", TEXT_INFO_RECOVER_PASSWORD);
    this.elements
      .recoverPasswordInput()
      .should("have.attr", "placeholder", "Email")
      .type(email);
    this.elements
      .recoverPasswordButton()
      .click()
      .then(() => {
        cy.waitLoading();
      });
  }
}

export default LoginPage = new LoginPage();
