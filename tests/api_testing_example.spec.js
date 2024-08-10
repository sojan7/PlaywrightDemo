import { test, expect } from "@playwright/test";

test("Get Users", async ({ request }) => {
  const response = await request.get("https://gorest.co.in");
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(response);
});
