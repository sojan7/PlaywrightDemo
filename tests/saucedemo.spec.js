import { test, expect, devices } from "@playwright/test";

const devicesToTest = [
  { name: "iPhone 14", config: devices["iPhone 14"] },
  { name: "Samsung Galaxy S23", config: devices["Galaxy S23"] },
  { name: "Google Pixel 6", config: devices["Pixel 7"] },
];

for (const { name, config } of devicesToTest) {
  test.use({
    ...config,
  });

  test(`Verify Sauce Demo Checkout Process on ${name}`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill("Sojan");
    await page.locator('[data-test="lastName"]').fill("Somarajan");
    await page.locator('[data-test="postalCode"]').fill("454545");
    await page.locator('[data-test="continue"]').click();
    await expect(
      page.locator(
        '[data-test="item-4-title-link"] [data-test="inventory-item-name"]'
      )
    ).toContainText("Sauce Labs Backpack");
    await expect(
      page.locator(
        '[data-test="item-0-title-link"] [data-test="inventory-item-name"]'
      )
    ).toContainText("Sauce Labs Bike Light");
    await expect(
      page.locator(
        '[data-test="item-1-title-link"] [data-test="inventory-item-name"]'
      )
    ).toContainText("Sauce Labs Bolt T-Shirt");
    await expect(page.locator('[data-test="total-label"]')).toContainText(
      "Total: $60.45"
    );
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="pony-express"]')).toBeVisible();
    await expect(page.locator('[data-test="complete-header"]')).toContainText(
      "Thank you for your order!"
    );
    await expect(page.locator('[data-test="complete-text"]')).toContainText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
    await page.locator('[data-test="back-to-products"]').click();
    await expect(page.getByText("Swag Labs")).toBeVisible();
  });
}
