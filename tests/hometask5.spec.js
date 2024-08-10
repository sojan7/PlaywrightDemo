const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginpage");
const HomePage = require("../pages/homepage");
const ManagerPage = require("../pages/ManagerPage");
const CustomersPage = require("../pages/CustomersPage");
const customerData = require("../fixtures/customerData.json");

test.describe("Banking Project Tests", () => {
  test("Verify customer add, account add and customer verification.", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const managerPage = new ManagerPage(page);
    const customerPage = new CustomersPage(page);
    const customer = customerData.customer;

    await loginPage.navigate();
    await loginPage.clickManagerLogin();

    await managerPage.addCustomer(
      customer.firstName,
      customer.lastName,
      customer.postcode
    );
    await managerPage.openAccount(
      `${customer.firstName} ${customer.lastName}`,
      "Dollar"
    );
    await loginPage.navigate();
    await loginPage.clickManagerLogin();

    await managerPage.goToCustomersPage();

    await customerPage.searchCustomerByName(customer.firstName);

    const customerExists = await customerPage.validateCustomerExists(
      customer.firstName,
      customer.lastName
    );
    expect(customerExists).toBe(true);
    await page.waitForTimeout(10000);
  });
});
