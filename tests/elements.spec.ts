import { test, expect } from "@playwright/test";
import { ElementsPage } from "../pages/Elements";

const url = "https://demoqa.com";
const urlelements = "https://demoqa.com/elements";
const urlTextBox = "https://demoqa.com/text-box";
const urlCheckBox = "https://demoqa.com/checkbox";
const fullName = "John Doe";
let emailInput = "abc@gmail.com";
const currentAddress = "123 Main St, City, Country";
const permanentAddress = "123 leeds, england";

//Hooks in playwright
let elementPage: ElementsPage;

test.beforeEach(async ({ page }) => {

    elementPage = new ElementsPage(page);
    await elementPage.launchElementsPage(url);
    await page.goto(url);
    await elementPage.elements.click();
    await expect(page).toHaveURL(urlelements);

});

test.describe("Check Box", () => {
  test.beforeEach(async ({ page }) => {
    await elementPage.checkBox.click();
    await expect(page).toHaveURL(urlCheckBox);
  });

  test("Check Box", async () => {
    await expect(elementPage.homeCheckBox).toBeVisible();
    await expect(elementPage.homeCheckBox).not.toBeChecked();
    await elementPage.homeCheckBox.check();
    await expect(elementPage.homeCheckBox).toBeChecked();
    await elementPage.homeCheckBox.uncheck();
    await expect(elementPage.homeCheckBox).not.toBeChecked();
  });

  test("Check Box Expand Home", async () => {
    await elementPage.expandHome.click();
    await expect(elementPage.documentCheckBox).toBeVisible();
    await expect(elementPage.desktopCheckBox).toBeVisible();
    await expect(elementPage.downloadsCheckBox).toBeVisible();
  });

  test("Check Box Expand Desktop", async () => {
    await elementPage.expandHome.click();
    await elementPage.expandDesktop.click();
    await expect(elementPage.notesCheckBox).toBeVisible();
    await expect(elementPage.commandsCheckBox).toBeVisible();
  });

  test("Check Box Expand Documents", async () => {
    await elementPage.expandHome.click();
    await elementPage.expandDocuments.click();
    await expect(elementPage.workSpaceCheckBox).toBeVisible();
    await expect(elementPage.officeCheckBox).toBeVisible();
    });

    test("Check Box Expand Downloads", async () => {
    await elementPage.expandHome.click();
    await elementPage.expandDownloads.click();
    await expect(elementPage.wordFileCheckBox).toBeVisible();
    await expect(elementPage.excelFileCheckBox).toBeVisible();
    });

  test("Check Box checked Expand Home", async () => {
    
    await elementPage.homeCheckBox.check();
    await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
    await expect(elementPage.homeCheckBox).toBeChecked();
    await expect(elementPage.documentCheckBox).toBeChecked();
    await expect(elementPage.desktopCheckBox).toBeChecked();
    await expect(elementPage.downloadsCheckBox).toBeChecked();

});

test("Check Box checked Expand Desktop", async () => {
   
    await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
    await expect(elementPage.homeCheckBox).not.toBeChecked();
    await elementPage.expandDesktop.click(); //Expanding the desktop checkbox to reveal the child checkboxes
    await expect(elementPage.desktopCheckBox).not.toBeChecked();
    await expect(elementPage.notesCheckBox).not.toBeChecked();
    await expect(elementPage.commandsCheckBox).not.toBeChecked();
    
});

test("Check Box checked Expand WorkSpace", async () => {
   
    await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
    await expect(elementPage.homeCheckBox).not.toBeChecked();
    await elementPage.expandDocuments.click();
    await elementPage.expandWorkSpace.click(); //Expanding the workSpace checkbox to reveal the child checkboxes
    await expect(elementPage.reactCheckBox).not.toBeChecked();
    await expect(elementPage.angularCheckBox).not.toBeChecked();
    await expect(elementPage.veuCheckBox).not.toBeChecked();
    
});

test("Check Box checked Expand office", async () => {
   
    await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
    await expect(elementPage.homeCheckBox).not.toBeChecked();
    await elementPage.expandDocuments.click();
    await elementPage.expandOffice.click(); //Expanding the office checkbox to reveal the child checkboxes
    await expect(elementPage.publicCheckBox).not.toBeChecked();
    await expect(elementPage.privateCheckBox).not.toBeChecked();
    await expect(elementPage.classifiedCheckBox).not.toBeChecked();
    await expect(elementPage.generalCheckBox).not.toBeChecked();
    
});

// test("Check Box checked Expand Documents", async () => {
  
//     await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
//     await expect(elementPage.homeCheckBox).not.toBeChecked();
//     await elementPage.expandDocuments.click(); //Expanding the documents checkbox to reveal the child checkboxes
//     await expect(elementPage.documentCheckBox).not.toBeChecked();
//     await expect(elementPage.expandDocuments).toBeVisible();
//     await expect(elementPage.expandDocuments).toBeEnabled();
//     await expect(elementPage.notesCheckBox).not.toBeChecked();
//     await expect(elementPage.notesCheckBox).toBeVisible();
//     await expect(elementPage.commandsCheckBox).not.toBeChecked();
//     await expect(elementPage.commandsCheckBox).toBeVisible();

// });

// //test("Check Box Expand Downloads", async () => {
    
//     await elementPage.homeCheckBox.check();
//     await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
//     await expect(elementPage.homeCheckBox).toBeChecked();
//     await expect(elementPage.documentCheckBox).toBeChecked();
//     await expect(elementPage.desktopCheckBox).toBeChecked();
//     await expect(elementPage.downloadsCheckBox).toBeChecked();

// });
    
// test("UnCheck Box Home", async () => {
//     await elementPage.homeCheckBox.uncheck();
//     await expect(elementPage.homeCheckBox).not.toBeChecked();
//     await expect(elementPage.documentCheckBox).not.toBeChecked();
//     await expect(elementPage.desktopCheckBox).not.toBeChecked();
//     await expect(elementPage.downloadsCheckBox).not.toBeChecked();
    

// });

// });

// test("Text Box", async ({ page }) => {
//   await elementPage.textBox.click();
//   await expect(page).toHaveURL(urlTextBox);
//   await elementPage.fullName.fill(fullName);
//   await elementPage.emailInput.fill(emailInput);
//   await elementPage.currentAddress.fill(currentAddress);
//   await elementPage.permanentAddress.fill(permanentAddress);
//   await elementPage.submitButton.click();
//   await expect(elementPage.nameoutput).toContainText(fullName);
//   await expect(elementPage.emailoutput).toContainText(emailInput);
//   await expect(elementPage.currentAddressoutput).toContainText(currentAddress);
//   await expect(elementPage.permanentAddressoutput).toContainText(permanentAddress);
//   await page.screenshot({ path: "screenshot.png", fullPage: true });
});
