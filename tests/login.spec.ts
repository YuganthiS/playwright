import {test,expect} from "playwright/test"
import { LoginPage } from "../pages/LoginPage";

//Test data
let url = "https://www.qapractice.com/practice-login-form"
let email = "user@premiumbank.com"
let password = "Bank@123"
let invalidEmail = "user1@premiumbank.com"
let invalidPassword = "Invalid@123"
let loginPage: LoginPage;

//Hooks in playwright
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.launchLoginPage(url);
})

//test case and assertions
test("Valid login test", async ({page})=>{
    await loginPage.emailInput.fill(email);
    await loginPage.passwordInput.fill(password);
    await loginPage.loginButton.click();
    await expect(page).toHaveURL("https://www.qapractice.com/practice-login-form");
    await expect(loginPage.loginSuccessMessage).toContainText("Login Successful! Welcome to Premium Banking.");
} )

test("Invalid login test", async ({page})=>{
    
    await loginPage.emailInput.fill(invalidEmail);
    await loginPage.passwordInput.fill(invalidPassword);
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toContainText("Invalid email id and password");
} )

