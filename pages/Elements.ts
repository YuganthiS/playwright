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
  readonly homeCheckBox: Locator;
  readonly expandHome: Locator;
  readonly documentCheckBox: Locator;
  readonly desktopCheckBox: Locator;
  readonly downloadsCheckBox: Locator;
  readonly expandDesktop: Locator;
  readonly expandDocuments: Locator;
  readonly expandDownloads: Locator;
  readonly notesCheckBox: Locator;
  readonly commandsCheckBox: Locator;
  readonly workSpaceCheckBox: Locator;
  readonly officeCheckBox: Locator;
  readonly wordFileCheckBox: Locator;
  readonly excelFileCheckBox: Locator;  
  readonly expandWorkSpace: Locator;
  readonly reactCheckBox: Locator;
  readonly angularCheckBox: Locator;
  readonly veuCheckBox: Locator;
  readonly expandOffice: Locator;
  readonly publicCheckBox: Locator;
  readonly privateCheckBox: Locator;
  readonly classifiedCheckBox: Locator;
  readonly generalCheckBox: Locator;
  readonly radioButton: Locator;
  readonly yesRadioButton: Locator;
  readonly impressiveRadioButton: Locator;
  readonly noRadioButton: Locator;
  readonly radioButtonLabel: Locator;
  readonly radioButtonMessage: Locator;
  readonly checkBoxLabel: Locator;
  readonly textBoxLabel: Locator;

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
    this.homeCheckBox = this.page.getByRole('checkbox', { name: 'Select Home' });
    this.expandHome = this.page.getByRole("treeitem", { name: /Select Home/ })  .locator(".rc-tree-switcher");
    this.documentCheckBox = this.page.getByRole("checkbox", {  name: "Select Documents", });
    this.desktopCheckBox = this.page.getByRole("checkbox", {  name: "Select Desktop", });
    this.downloadsCheckBox = this.page.getByRole("checkbox", {  name: "Select Downloads", });
    this.expandHome = this.page.getByRole("treeitem", { name: /Select Home/ })  .locator(".rc-tree-switcher");
    this.expandDesktop = this.page.getByRole("treeitem").filter({ has: this.page.getByRole("checkbox", { name: "Select Desktop" }) }).locator(".rc-tree-switcher");
    this.expandDocuments = this.page.getByRole("treeitem").filter({ has: this.page.getByRole("checkbox", { name: "Select Documents" }) }).locator(".rc-tree-switcher");
    this.expandDownloads = this.page.getByRole("treeitem").filter({ has: this.page.getByRole("checkbox", { name: "Select Downloads" }) }).locator(".rc-tree-switcher");
    this.notesCheckBox = this.page.getByRole("checkbox", {  name: "Select Notes", });
    this.commandsCheckBox = this.page.getByRole("checkbox", {  name: "Select Commands", });
    this.workSpaceCheckBox = this.page.getByRole("checkbox", {  name: "Select WorkSpace", });
    this.officeCheckBox = this.page.getByRole("checkbox", {  name: "Select Office", });
    this.wordFileCheckBox = this.page.getByRole("checkbox", {  name: "Select Word File.doc", });
    this.excelFileCheckBox = this.page.getByRole("checkbox", {  name: "Select Excel File.doc", });
    this.expandWorkSpace = this.page.getByRole("treeitem").filter({ has: this.page.locator('.rc-tree-node-content-wrapper[title="WorkSpace"]') }).locator(".rc-tree-switcher");
    this.reactCheckBox = this.page.getByRole("checkbox", {  name: "Select React", });
    this.angularCheckBox = this.page.getByRole("checkbox", {  name: "Select Angular", });
    this.veuCheckBox = this.page.getByRole("checkbox", {  name: "Select Veu", });
    this.expandOffice = this.page.getByRole("treeitem").filter({ has: this.page.locator('.rc-tree-node-content-wrapper[title="Office"]') }).locator(".rc-tree-switcher");
    this.publicCheckBox = this.page.getByRole("checkbox", {  name: "Select Public", });
    this.privateCheckBox = this.page.getByRole("checkbox", {  name: "Select Private", });
    this.classifiedCheckBox = this.page.getByRole("checkbox", {  name: "Select Classified", });
    this.generalCheckBox = this.page.getByRole("checkbox", {  name: "Select General", });
    this.radioButton = this.page.getByText('Radio Button', { exact: true });
    this.yesRadioButton = this.page.getByRole("radio", {  name: "Yes", }); //#yesRadio
    this.impressiveRadioButton = this.page.getByRole("radio", {  name: "Impressive", });
    this.noRadioButton = this.page.getByRole("radio", {  name: "No", });
    this.radioButtonLabel = this.page.locator('.col-12.mt-4.col-md-6.col-xl-7 h1');
    this.radioButtonMessage = this.page.locator('.mt-3');
    this.checkBoxLabel = this.page.locator('.col-12.mt-4.col-md-6.col-xl-7 h1');
    this.textBoxLabel = this.page.locator('.col-12.mt-4.col-md-6.col-xl-7 h1');

  }
  async launchElementsPage(url: string) {
    await this.page.goto(url);
  }

  async elementsPage(email: string, fullName: string, currentAddress: string, permanentAddress: string) {
    await this.fullName.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddress.fill(currentAddress);
    await this.permanentAddress.fill(permanentAddress);
    await this.submitButton.click();
    await this.homeCheckBox.check();
    await this.expandHome.click();
    await this.expandDesktop.click();
    await this.expandDocuments.click();
    await this.expandDownloads.click();
    await this.notesCheckBox.check();
    await this.commandsCheckBox.check();
    await this.workSpaceCheckBox.check();
    await this.officeCheckBox.check();
    await this.wordFileCheckBox.check();
    await this.excelFileCheckBox.check();
    await this.expandWorkSpace.click();
    await this.reactCheckBox.check();
    await this.angularCheckBox.check();
    await this.veuCheckBox.check();
    await this.expandOffice.click();
    await this.publicCheckBox.check();
    await this.privateCheckBox.check();
    await this.classifiedCheckBox.check();
    await this.generalCheckBox.check();
    await this.yesRadioButton.check();
    await this.impressiveRadioButton.check(); 

  }
}
