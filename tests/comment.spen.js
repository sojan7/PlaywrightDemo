/* test("Demo", async ({ page }) => {
  // Locate by placeholder
  await page.getByPlaceholder("name@email.com").fill("sojan@email.com");

  // Locate by text
  await expect(page.getByText("Welcome, John")).toBeVisible();
  await expect(page.getByText("Welcome, John", { exact: true })).toBeVisible();
  await expect(page.getByText(/welcome,[A-Za-z]+$/i)).toBeVisible();

  // Locate by Xpath or CSS
  await page.locator("css=button").click();
  await page.locator("Xpath=//button").click();

  //CheckBox
  await page.getByLabel("I agree to the terms aboce").check();
  expect(await page.getByLabel("I agree").isChecked()).toBeTruthy();

  //Radio
  await page.getByLabel("XL").check();

  //MOUSE
  await page.getByText("Item").dblclick();
  await page.getByText("Item").hover();
  await page.getByText("Item").click();
  await page.getByText("Item").click({ button: "right" });

  //Negarting Match
  expect(await page.locator("xpath=button")).not.toHaveText("cancel");

  //Soft Asser
  await expect.soft(page.getByText("Submit")).toHaveText("Cancel");

  //Retrying
  await expect(async () => {
    const response = await page.request.get("https://api.example.com");
    expect(response.status()).toBe(200);
  }).toPass();

  //Retring with timeout
  await expect(async () => {
    const response = await page.request.get("https://api.example.com");
    expect(response.status()).toBe(200);
  }).toPass({
    intervals: [1_000, 2_000, 10_000],
    timeout: 60_000,
  });
});
*/
