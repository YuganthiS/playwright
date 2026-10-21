import {test,expect} from "playwright/test"

test("login", async ({page})=>{
    await page.goto("https://www.qapractice.com/practice-login-form")
    await page.getByTestId('login-email').fill('user@premiumbank.com')
    await expect(page.getByTestId('login-email')).toHaveValue('user@premiumbank.com')
    await page.getByTestId('login-password').fill("Bank@123")
    await expect(page.getByTestId('login-password')).toHaveValue('Bank@123')
    await page.getByLabel('Remember me').click()
    await page.getByTestId('login-submit').click()
    await expect(page).toHaveURL("https://www.qapractice.com/practice-login-form")
    await expect(page.locator('div.fade.alert.alert-success.show')).toHaveText("Login Successful! Welcome to Premium Banking.")
})