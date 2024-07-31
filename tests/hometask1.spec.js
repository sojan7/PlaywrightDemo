// @ts-check
import { test, expect } from "@playwright/test";

test("Verify is the title is correct", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("Verify is the get started link working", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("Verify is the Writing tests link working", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Get started" }).click();
  await page.getByRole("link", { name: "Writing tests", exact: true }).click();

  await expect(
    page.getByRole("heading", { name: "Writing tests" })
  ).toBeVisible();
});
