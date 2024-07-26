import {Given, When, Then,} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";
import { Console } from "console";



When('user search for a {string}', async function (product) {
    await pageFixture.page.locator("#search-field-top-bar").fill(product);
    await pageFixture.page.locator("#search-field-top-bar").press('Enter');
    await pageFixture.page.locator("h2 > a").click();
    
  });
 
When('user add product to the cart', async function () {
    await pageFixture.page.locator("input[type=number]").clear();
    await pageFixture.page.locator("input[type=number]").fill("1");
    await pageFixture.page.locator("div.summary.entry-summary > form > button").click();
    

    
});

Then('the cart badge should get updated', async function () {
    await pageFixture.page.locator("li.top-cart").click();
    const badgeCount = await pageFixture.page.locator("input[type=number]").inputValue();
    expect(Number(badgeCount)).toBeGreaterThan(0);
    
});

//Test11
//Test22


//Test33