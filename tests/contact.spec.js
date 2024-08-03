import { test, expect } from "@playwright/test";

test("Verify Form Submitting", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await page.getByRole("heading", { name: "Elements" }).click();
  await page.getByText("Forms").click();
  await page.getByText("Practice Form").click();
  await page.getByPlaceholder("First Name").fill("Sojan");
  await page.getByPlaceholder("Last Name").fill("Somarajan");
  await page
    .getByPlaceholder("name@example.com")
    .fill("sojan_somarajan@epam.com");
  await page.getByText("Male", { exact: true }).click();
  await page.getByPlaceholder("Mobile Number").fill("4444444444");
  await page.locator("#dateOfBirthInput").fill("30 08 1995");
  await page.locator("#subjectsInput").fill("Test Subject");
  await page.getByText("Sports").click();
  await page
    .getByPlaceholder("Current Address")
    .fill("Test Address 1\nTest Address 2\nTest Address 3");
  await page
    .locator("div")
    .filter({ hasText: /^Select State$/ })
    .nth(3)
    .click();
  await page.getByText("NCR", { exact: true }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select City$/ })
    .nth(3)
    .click();
  await page.getByText("Delhi", { exact: true }).click();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("Thanks for submitting the form")).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Sojan Somarajan" })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "sojan_somarajan@epam.com" })
  ).toBeVisible();
  await expect(page.locator("tbody")).toContainText(
    "Test Address 1 Test Address 2 Test Address 3"
  );
  await expect(page.locator("tbody")).toContainText("NCR Delhi");
});
