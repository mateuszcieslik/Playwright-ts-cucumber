import {Given, When, Then,} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";


When('user search for a {string}', async function (product) {
    await pageFixture.page.locator("#search-field-top-bar").fill(product);
    await pageFixture.page.locator("#search-field-top-bar").press('Enter');
    await pageFixture.page.locator("h2 > a").click();
    
  });
 
When('user add product to the cart', async function () {
    await pageFixture.page.locator("#quantity_66a0c4851b88b").fill('');
    await pageFixture.page.locator("#quantity_66a0c4851b88b").fill("1");
    await pageFixture.page.locator("div.summary.entry-summary > form > button").click();
    /*await pageFixture.page.keyboard.press('Backspace');
    await pageFixture.page.locator("div.summary.entry-summary > form > button").click();*/

    
});

Then('the cart badge should get updated', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});