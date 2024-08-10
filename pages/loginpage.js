const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.customerLoginButton = page.locator('button[ng-click="customer()"]');
    this.managerLoginButton = page.locator('button[ng-click="manager()"]');
  }

  async navigate() {
    await this.page.goto(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
  }

  async clickCustomerLogin() {
    await this.customerLoginButton.click();
  }

  async clickManagerLogin() {
    await this.managerLoginButton.click();
  }
}

module.exports = LoginPage;
