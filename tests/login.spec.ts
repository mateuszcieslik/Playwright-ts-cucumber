import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";




test.describe("Login page", () => {
  test.beforeEach( async ({page}) => {
    const url = "https://demo-bank.vercel.app/";
    await page.goto (url);
  });
 

  test("successful login with correct credentials", async ({ page }) => {
    //Arrange
    const userId = "test1234";
    const userPassword = "Yolo1234";
    const expectedUserName = "Jan Demobankowy";
    //Act
    
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(userPassword);
    await page.getByTestId("login-button").click();
    //Assert
    await expect(page.getByTestId("user-name")).toHaveText(expectedUserName);
  });

  test("unsuccessful login with incorrect credentials", async ({ page }) => { 
    await page.getByTestId("login-input").fill("tes");
    await page.getByTestId("password-input").fill("Yolo1234");

    await expect(page.getByTestId("error-login-id")).toHaveText("identyfikator ma min. 8 znaków");
  });

  test("unsuccessful login with too short username", async ({ page }) => { 
    await page.getByTestId("login-input").fill("te");
    await page.getByTestId("password-input").click();

    await expect(page.getByTestId("error-login-id")).toHaveText("identyfikator ma min. 8 znaków");
  });

  test("unsuccessful login with too short password", async ({ page }) => {
    
    await page.getByTestId("login-input").fill("test1234");
    await page.getByTestId("password-input").fill("Yo");
    await page.getByTestId("password-input").blur();
    
    await expect(page.getByTestId("error-login-password")).toHaveText("hasło ma min. 8 znaków");
  });
});
