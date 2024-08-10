const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const ManagerHomePage = require("../pages/ManagerHomePage");
const CustomersPage = require("../pages/CustomersPage");
const customerData = require("../fixtures/customerData.json");

test.describe("Banking Project Tests", () => {
  test("Verify customer add, account add and customer verification.", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const managerHomePage = new ManagerHomePage(page);
    const customerPage = new CustomersPage(page);
    const customer = customerData.customer;

    await loginPage.navigate();
    await loginPage.clickManagerLogin();

    await managerHomePage.addCustomer(
      customer.firstName,
      customer.lastName,
      customer.postcode
    );
    await managerHomePage.openAccount(
      `${customer.firstName} ${customer.lastName}`,
      "Dollar"
    );
    await loginPage.navigate();
    await loginPage.clickManagerLogin();

    await managerHomePage.goToCustomersPage();

    await customerPage.searchCustomerByName(customer.firstName);

    const customerExists = await customerPage.validateCustomerExists(
      customer.firstName,
      customer.lastName
    );
    expect(customerExists).toBe(true);
  });
});
