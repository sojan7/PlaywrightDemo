import { test, expect } from "@playwright/test";
import LoginPage from "./pages/LoginPage";
import ManagerHomePage from "./pages/ManagerHomePage";
import CustomersPage from "./pages/CustomersPage";
import { customer as _customer } from "../fixtures/customerData.json";

test.describe("Banking Project Tests", () => {
  let loginPage;
  let managerHomePage;
  let customerPage;
  const customer = _customer;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    managerHomePage = new ManagerHomePage(page);
    customerPage = new CustomersPage(page);
    await loginPage.navigate();
    await loginPage.clickManagerLogin();
  });

  test("Verify customer add, account add, and customer verification", async () => {
    // Add customer
    await managerHomePage.addCustomer(
      customer.firstName,
      customer.lastName,
      customer.postcode
    );

    // Open account for the customer
    await managerHomePage.openAccount(
      `${customer.firstName} ${customer.lastName}`,
      "Dollar"
    );

    // Go to Customers page and verify customer
    await managerHomePage.goToCustomersPage();
    await customerPage.searchCustomerByName(customer.firstName);
    const customerExists = await customerPage.validateCustomerExists(
      customer.firstName,
      customer.lastName
    );

    expect(customerExists).toBe(true);
  });
});
