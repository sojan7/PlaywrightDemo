class ManagerPage {
  constructor(page) {
    this.page = page;
    this.addCustomerButton = page.locator('button[ng-click="addCust()"]');
    this.openAccountButton = page.locator('button[ng-click="openAccount()"]');
    this.customersButton = page.locator('button[ng-click="showCust()"]');
    this.firstNameInput = page.locator('input[ng-model="fName"]');
    this.lastNameInput = page.locator('input[ng-model="lName"]');
    this.postcodeInput = page.locator('input[ng-model="postCd"]');
    this.addCustomerSubmitButton = page.locator('button[type="submit"]');
    this.customerSelect = page.locator("select#userSelect");
    this.currencySelect = page.locator("select#currency");
    this.processButton = page.locator('button[type="submit"]');
  }

  async addCustomer(firstName, lastName, postcode) {
    await this.addCustomerButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postcodeInput.fill(postcode);
    await this.addCustomerSubmitButton.click();
  }

  async openAccount(customerName, currency) {
    await this.openAccountButton.click();
    await this.customerSelect.selectOption({ label: customerName });
    await this.currencySelect.selectOption({ label: currency });
    await this.processButton.click();
  }

  async goToCustomersPage() {
    await this.customersButton.click();
  }
}

module.exports = ManagerPage;
