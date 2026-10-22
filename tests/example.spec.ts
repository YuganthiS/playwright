import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test("login", async ({page})=>{
    await page.goto("https://www.qapractice.com/practice-login-form")
    await page.getByTestId('login-email').fill('user@premiumbank.com')
    await expect(page.getByTestId('login-email')).toHaveValue('user@premiumbank.com')
    await page.getByTestId('login-password').fill("Bank@123")
    await expect(page.getByTestId('login-password')).toHaveValue('Bank@123')
    await page.getByLabel('Remember me').click()
    await page.getByTestId('login-submit').click()
    await expect(page).toHaveURL("https://www.qapractice.com/practice-login-form")
    await expect(page.getByTestId('login-success')).toContainText("Login Successful! Welcome to Premium Banking.")
})