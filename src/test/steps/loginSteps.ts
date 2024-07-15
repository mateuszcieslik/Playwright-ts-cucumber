import {Given, When, Then} from "@cucumber/cucumber"
import {chromium, Page, Browser, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

       
Given('User navigates to the application', async function () {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();
  await page.goto("https://skleptest.pl/")
});
Given('User click on the login link', async function () {
  await page.locator("li.top-account > a").click();
});
   
Given('User enter the username as {string}', async function (username) {
  await page.locator("#username").fill(username);
});
  
Given('User enter the password as {string}', async function (password) {
  await page.locator("#password").fill(password);
});
  
When('User click on the login button', async function () {
  await page.locator("div.u-column1.col-1 > form > p:nth-child(3) > input.woocommerce-Button.button").click();
});

Then('Login should be success', async function () {
  await page.locator("div.woocommerce-MyAccount-content > p:nth-child(1)").isVisible;
  await browser.close();
});

Then('Login should fail', async function () {
  await page.locator("ul.woocommerce-error").isVisible;
  await browser.close();
});      


