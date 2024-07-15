import {Given, When, Then} from "@cucumber/cucumber"
import {chromium, Page, Browser, expect } from "@playwright/test";

let page: Page;

When('user search for a {string}', async function (product) {
    await page.locator("#search-field-top-bar").fill(product);
    await page.locator("#search-top-bar-submit").click;
    await page.locator("h2 > a").click;
  });
 
When('user add product to the cart', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the cart badge should get updated', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});