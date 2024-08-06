import { test, expect } from "@playwright/test";

test.use({
  video: "retain-on-failure",
  screenshot: "only-on-failure",
});

test("Verify Transcation Failure", async ({ page }) => {
  await page.goto(
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
  );
  await page.getByRole("button", { name: "Customer Login" }).click();
  await page.locator("#userSelect").selectOption("1");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Transactions" }).click();
  await page.getByRole("button", { name: "Reset" }).click();
  await expect(page.locator("xpath=//tbody//td")).not.toBeVisible();
  await page.getByRole("button", { name: "Back" }).click();
  await page.getByRole("button", { name: "Withdrawl" }).click();
  await page.getByPlaceholder("amount").fill("100");
  await page.getByRole("button", { name: "Withdraw", exact: true }).click();
  await expect(page.locator("body")).toContainText(
    "Transaction Failed. You cannot withdraw amount more than the balance."
  );
});

test("Verify Account Deposit", async ({ page }) => {
  await page.goto(
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
  );
  await page.getByRole("button", { name: "Customer Login" }).click();
  await page.locator("#userSelect").selectOption("2");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Deposit" }).click();
  await page.getByPlaceholder("amount").fill("1000");
  await page.getByRole("form").getByRole("button", { name: "Deposit" }).click();
  await expect(page.locator("body")).toContainText("Deposit Successful");
  await expect(page.locator("body")).toContainText("Balance : 1000");
});
