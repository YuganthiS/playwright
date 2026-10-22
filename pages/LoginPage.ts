import { Locator } from '@playwright/test';

//Locators and methods for login page
export class LoginPage {
  readonly page: any;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly loginButton: Locator;
  readonly loginSuccessMessage: Locator;
  readonly errorMessage: Locator;

//Constructor to initialize locators
  constructor(page: any) {
    this.page = page;
    this.emailInput = this.page.getByTestId('login-email');
    this.passwordInput = this.page.getByTestId('login-password');
    this.rememberMeCheckbox = this.page.getByLabel('Remember me');
    this.loginButton = this.page.getByTestId('login-submit');
    this.loginSuccessMessage = this.page.getByTestId('login-success');
    this.errorMessage = this.page.getByTestId('login-error');
  }
  
//Method to perform login action

  async launchLoginPage(url: string) {
    await this.page.goto(url);
  }

  async validlogin(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.rememberMeCheckbox.click();
    await this.loginButton.click();
  }

  async invalidlogin(invalidEmail: string, invalidPassword: string) {
    await this.emailInput.fill(invalidEmail);
    await this.passwordInput.fill(invalidPassword);
    await this.rememberMeCheckbox.click();
    await this.loginButton.click();
  }
}