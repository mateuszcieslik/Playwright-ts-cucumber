import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe('Pulpit tests', () => {
  test.beforeEach( async ({ page }) => {
      await page.goto("https://demo-bank.vercel.app/");
      await page.getByTestId("login-input").fill("test1234");
      await page.getByTestId("password-input").fill("password");
      await page.getByTestId("login-button").click();
  });
    test('quick payment with correct data', async ({ page }) => {
        await page.locator('#widget_1_transfer_receiver').selectOption('2');
        await page.locator('#widget_1_transfer_amount').fill('150');
        await page.locator('#widget_1_transfer_title').fill('pizza');

        //await page.getByRole('button', { name: 'wykonaj' }).click();
        await page.locator('#execute_btn').click();
        await page.getByTestId('close-button').click();
        await expect.soft(page.locator('#show_messages')).toHaveText("Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot środków")
      });

      test('successful phone top-up', async ({ page }) => {
        await page.selectOption('#widget_1_topup_receiver',{label:'500 xxx xxx'});
        await page.locator('#widget_1_topup_amount').fill('40');
        await page.locator('#widget_1_topup_agreement').check();
        await page.locator('#execute_phone_btn').click();
        await page.getByTestId("close-button").click();
        await expect.soft(page.locator("#show_messages")).toHaveText("Doładowanie wykonane! 40,00PLN na numer 500 xxx xxx");
      });
  });