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

let elementPage: ElementsPage;

test.describe("Home Check Box", () => {
  test.beforeEach(async ({ page }) => {
    elementPage = new ElementsPage(page);
    await elementPage.launchElementsPage(urlCheckBox);
    await expect(page).toHaveURL(urlCheckBox);
  });

  test("Home Check Box", async () => {
    await expect(elementPage.homeCheckBox).toBeVisible();
    await expect(elementPage.homeCheckBox).not.toBeChecked();
    await elementPage.homeCheckBox.check();
    await expect(elementPage.homeCheckBox).toBeChecked();
    await elementPage.homeCheckBox.uncheck();
    await expect(elementPage.homeCheckBox).not.toBeChecked();
  });

  test("Home Check Box Expand and Collapse", async () => {
    await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
    await expect(elementPage.documentCheckBox).toBeVisible();
    await expect(elementPage.desktopCheckBox).toBeVisible();
    await expect(elementPage.downloadsCheckBox).toBeVisible();
    await elementPage.expandHome.click(); //Collapsing the home checkbox to hide the child checkboxes
    await expect(elementPage.documentCheckBox).not.toBeVisible();
    await expect(elementPage.desktopCheckBox).not.toBeVisible();
    await expect(elementPage.downloadsCheckBox).not.toBeVisible();
  });

  test("Desktop Check Box Expand and Collapse", async () => {
    await elementPage.expandHome.click();
    await elementPage.expandDesktop.click();
    await expect(elementPage.notesCheckBox).toBeVisible();
    await expect(elementPage.commandsCheckBox).toBeVisible();
    await elementPage.expandDesktop.click();
    await expect(elementPage.notesCheckBox).not.toBeVisible();
    await expect(elementPage.commandsCheckBox).not.toBeVisible();

    });

  test("Documents Check Box Expand and Collapse", async () => {
    await elementPage.expandHome.click();
    await elementPage.expandDocuments.click();
    await expect(elementPage.workSpaceCheckBox).toBeVisible();
    await expect(elementPage.officeCheckBox).toBeVisible();
    await elementPage.expandDocuments.click();
    await expect(elementPage.workSpaceCheckBox).not.toBeVisible();
    await expect(elementPage.officeCheckBox).not.toBeVisible(); 
    });

    test("Downloads Check Box Expand and Collapse", async () => {
    await elementPage.expandHome.click();
    await elementPage.expandDownloads.click();
    await expect(elementPage.wordFileCheckBox).toBeVisible();
    await expect(elementPage.excelFileCheckBox).toBeVisible();
    await elementPage.expandDownloads.click();
    await expect(elementPage.wordFileCheckBox).not.toBeVisible();
    await expect(elementPage.excelFileCheckBox).not.toBeVisible();
    });

  test("Home Check Box checked and unchecked", async () => {
    
    await elementPage.homeCheckBox.check();
    await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
    await expect(elementPage.homeCheckBox).toBeChecked();
    await expect(elementPage.documentCheckBox).toBeChecked();
    await expect(elementPage.desktopCheckBox).toBeChecked();
    await expect(elementPage.downloadsCheckBox).toBeChecked();
    await elementPage.homeCheckBox.uncheck();
    await expect(elementPage.homeCheckBox).not.toBeChecked();
    await expect(elementPage.documentCheckBox).not.toBeChecked();
    await expect(elementPage.desktopCheckBox).not.toBeChecked();
    await expect(elementPage.downloadsCheckBox).not.toBeChecked();

});

test("Desktop Check checked and unchecked", async () => {
   
    await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
    //await expect(elementPage.homeCheckBox).not.toBeChecked();
    await elementPage.expandDesktop.click(); //Expanding the desktop checkbox to reveal the child checkboxes
    await elementPage.desktopCheckBox.check();
    await expect(elementPage.homeCheckBox).toHaveAttribute("aria-checked", "mixed");
    await expect(elementPage.desktopCheckBox).toBeChecked();
    await expect(elementPage.notesCheckBox).toBeChecked();
    await expect(elementPage.commandsCheckBox).toBeChecked();
    await elementPage.desktopCheckBox.uncheck();
    await expect(elementPage.homeCheckBox).not.toBeChecked();
    await expect(elementPage.desktopCheckBox).not.toBeChecked();
    await expect(elementPage.notesCheckBox).not.toBeChecked();
    await expect(elementPage.commandsCheckBox).not.toBeChecked();
    
});

//write a test case for selecting only notes /checking and unchecking the notes checkbox and verifying the state of the notes checkbox and its child checkboxes.
//write a test case for selecting only commands / checking and unchecking the commands checkbox and verifying the state of the commands checkbox and its child checkboxes.
//write a test case for selecting only notes and commands /checking and unchecking the notes and commands checkboxes and verifying the state of the notes and commands checkboxes and their child checkboxes.


test("WorkSpace Check Box checked and unchecked", async () => {
   
    await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
    await expect(elementPage.homeCheckBox).not.toBeChecked();
    await elementPage.expandDocuments.click();
    await elementPage.expandWorkSpace.click(); //Expanding the workSpace checkbox to reveal the child checkboxes
    await elementPage.workSpaceCheckBox.check();
    await expect(elementPage.workSpaceCheckBox).toBeChecked();
    await elementPage.reactCheckBox.check();
    await elementPage.angularCheckBox.check();
    await elementPage.veuCheckBox.check();
    await elementPage.workSpaceCheckBox.uncheck(); // collapsing the workSpace checkbox to hide the child checkboxes
    await expect(elementPage.workSpaceCheckBox).not.toBeChecked();
    await expect(elementPage.reactCheckBox).not.toBeChecked();
    await expect(elementPage.angularCheckBox).not.toBeChecked();
    await expect(elementPage.veuCheckBox).not.toBeChecked();
    
});

test("Office Check Box checked and unchecked", async () => {
   
    await elementPage.expandHome.click(); //Expanding the home checkbox to reveal the child checkboxes
    await expect(elementPage.homeCheckBox).not.toBeChecked();
    await elementPage.expandDocuments.click();
    await elementPage.expandOffice.click(); //Expanding the office checkbox to reveal the child checkboxes
    await elementPage.officeCheckBox.check();
    await expect(elementPage.officeCheckBox).toBeChecked();
    await expect(elementPage.publicCheckBox).toBeChecked();
    await expect(elementPage.privateCheckBox).toBeChecked();
    await expect(elementPage.classifiedCheckBox).toBeChecked();
    await expect(elementPage.generalCheckBox).toBeChecked(); 
    await elementPage.officeCheckBox.uncheck(); // collapsing the office checkbox to hide the child checkboxes
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
