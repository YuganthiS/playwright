import { Locator } from '@playwright/test';

//Locators and methods for elements page
export class ElementsPage {
  readonly page: any;
  readonly elements: Locator;
  readonly textBox: Locator;
  readonly fullName: Locator;
  readonly emailInput: Locator;
  readonly currentAddress: Locator;
  readonly permanentAddress: Locator;
  readonly submitButton: Locator;
  readonly nameoutput: Locator;
  readonly emailoutput: Locator;
  readonly currentAddressoutput: Locator;
  readonly permanentAddressoutput: Locator;
  readonly checkBox: Locator;

//Constructor to initialize locators
  constructor(page: any) {
    this.page = page;
    this.elements = this.page.getByText('Elements', { exact: true });
    this.textBox = this.page.getByText('Text Box', { exact: true });
    this.fullName = this.page.locator('#userName');   //id locator
    this.emailInput = this.page.getByPlaceholder('name@example.com');  
    this.currentAddress = this.page.locator('#currentAddress'); //id locator
    this.permanentAddress = this.page.locator('#permanentAddress'); //id locator
    this.submitButton = this.page.locator('.btn.btn-primary');  //class locator
    this.nameoutput = this.page.locator('#name');  //id locator
    this.emailoutput = this.page.locator('#email');  //id locator
    this.currentAddressoutput = this.page.locator('#output #currentAddress');  //x-path locator //*[@id="currentAddress"]/text()[2]
    this.permanentAddressoutput = this.page.locator('#output #permanentAddress');  //id locator
    this.checkBox = this.page.getByText('Check Box', { exact: true });

  }

  //Method to perform login action

  async launchElementsPage(url: string) {
    await this.page.goto(url);
  }

  async elemenstPage(email: string, fullName: string, currentAddress: string, permanentAddress: string) {
    await this.fullName.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddress.fill(currentAddress);
    await this.permanentAddress.fill(permanentAddress);
    await this.submitButton.click();
  }
}
