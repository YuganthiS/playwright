import { test, expect } from "@playwright/test";
import { ElementsPage } from "../pages/Elements";

const url = "https://demoqa.com/text-box";
const fullName = "John Doe";
let emailInput = "abc@gmail.com";
const currentAddress = "123 Main St, City, Country";
const permanentAddress = "123 leeds, england";

//Hooks in playwright
let elementPage: ElementsPage;

test.beforeEach(async ({page})=>{
    elementPage = new ElementsPage(page);
    await elementPage.launchElementsPage(url);
    
    await page.goto(url);
});

test("Text Box", async ({ page }) => {
    await elementPage.fullName.fill(fullName);
    await elementPage.emailInput.fill(emailInput);
    await elementPage.currentAddress.fill(currentAddress);
    await elementPage.permanentAddress.fill(permanentAddress);
    await elementPage.submitButton.click();
    await expect(page).toHaveURL(url);
    await expect(elementPage.nameoutput).toContainText(fullName);
    await expect(elementPage.emailoutput).toContainText(emailInput);
    await expect(elementPage.currentAddressoutput).toContainText(currentAddress);
    await expect(elementPage.permanentAddressoutput).toContainText(permanentAddress);
    //await expect(page.locator('//*[@id="currentAddress"]/text()[2]')).toContainText(currentAddress);
    //await expect(page.locator('//*[@id="permanentAddress"]/text()[2]')).toContainText(permanentAddress);
    await page.screenshot({ path: "screenshot.png", fullPage: true });

});