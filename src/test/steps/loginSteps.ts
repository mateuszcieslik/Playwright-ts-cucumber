import {Given, When, Then} from "@cucumber/cucumber"
import {chromium, Page, Browser, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

       
Given('User navigates to the application', async function () {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();
  await page.goto("https://www.way2automation.com/angularjs-protractor/registeration/#/login")
});
   
Given('User enter the username as {string}', async function (username) {
  await page.locator("#username").fill(username);
});
  
Given('User enter the password as {string}', async function (password) {
  await page.locator("#password").fill(password);
});

Given('User enter the username2 as {string}', async function (username) {
  await page.locator("#formly_1_input_username_0").fill(username);
});
  
When('User click on the login button', async function () {
  await page.locator("button.btn").click();
});

Then('Login should be success', async function () {
  await page.locator("p:last-child a").isVisible;
  await browser.close();
});

Then('Login should fail', async function () {
  await page.locator("alert-danger").isVisible;
  
  await browser.close();
});      