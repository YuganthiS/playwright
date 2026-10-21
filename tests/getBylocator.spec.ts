import {test,expect} from "playwright/test";

test("getBylocator", async ({page})=>{
    await page.goto("https://www.qapractice.com/practice-login-form");
    const searchBox = page.getByLabel("textbox",{name:"Search"});