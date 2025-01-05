import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe('Pulpit tests', () => {
  test.beforeEach( async ({ page }) => {
      await page.goto("https://demo-bank.vercel.app/");
      await page.getByTestId("login-input").fill("test1234");
      await page.getByTestId("password-input").fill("password");
      await page.getByTestId("login-button").click();
  });
    test.only('quick payment with correct data', async ({ page }) => {
      //Arrange
      const receiverId = '2';
      const transferAmount = '150';
      const transferTitle = 'Zwrot środków';
      const expectedTransferReceiver = "Chuck Demobankowy"
      //Act
      await page.locator('#widget_1_transfer_receiver').selectOption(receiverId);
      await page.locator('#widget_1_transfer_amount').fill(transferAmount);
      await page.locator('#widget_1_transfer_title').fill(transferTitle);

      
      await page.locator('#execute_btn').click();
      await page.getByTestId('close-button').click();
      //Assert
      await expect.soft(page.locator('#show_messages')).toHaveText(`Przelew wykonany! ${expectedTransferReceiver} - ${transferAmount},00PLN - ${transferTitle}`)
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