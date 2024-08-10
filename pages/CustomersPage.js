class CustomersPage {
  constructor(page) {
    this.page = page;
    this.searchCustomerInput = page.locator('input[ng-model="searchCustomer"]');
    this.customersTable = page.locator("table tbody tr");
  }

  async searchCustomerByName(name) {
    await this.searchCustomerInput.fill(name);
  }

  async validateCustomerExists(firstName, lastName) {
    const customerRows = this.customersTable;
    for (let i = 0; i < (await customerRows.count()); i++) {
      const row = customerRows.nth(i);
      const firstNameCell = await row.locator("td").nth(0).textContent();
      const lastNameCell = await row.locator("td").nth(1).textContent();

      if (firstNameCell === firstName && lastNameCell === lastName) {
        return true;
      }
    }
    return false;
  }
}

module.exports = CustomersPage;
