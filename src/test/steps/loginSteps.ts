import {Given, When, Then} from "@cucumber/cucumber"
import {expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";



       
Given('User navigates to the application', async function () {
  await pageFixture.page.goto("https://skleptest.pl/")
});
Given('User click on the login link', async function () {
pageFixture.page.locator("li.top-account > a").click();
});
   
Given('User enter the username as {string}', async function (username) {
  await pageFixture.page.locator("#username").fill(username);
});
  
Given('User enter the password as {string}', async function (password) {
  await pageFixture.page.locator("#password").fill(password);
});
  
When('User click on the login button', async function () {
  await pageFixture.page.locator("div.u-column1.col-1 > form > p:nth-child(3) > input.woocommerce-Button.button").click();
});

Then('Login should be success', async function () {
  await pageFixture.page.locator("div.woocommerce-MyAccount-content > p:nth-child(1)").isVisible;
  
});

Then('Login should fail', async function () {
  await pageFixture.page.locator("ul.woocommerce-error").isVisible;
  
});      


