import { test, expect } from "@playwright/test";
import HomePage from "../../pages/homePage";
import { prod } from "../../data/url.json";
import { default as CONSTANTS } from "../../utils/constans";

test.describe("Login functionality using Gmail", () => {
  test("Test that user is able to login", async ({ page }) => {
    const homePage = new HomePage(page);

    // Navigate to IGN website
    await page.goto(prod.ign_uk.baseUrl);
    expect(page.url()).toContain("ign.com");

    // Accept cookies
    await homePage.clickOnAcceptCookies();

    // Login IGN
    await homePage.clickOnLoginButton();
    await homePage.clickOnGoogleButton();
    await homePage.enterCredentials(CONSTANTS.IGN_LOGIN.EMAIL);
  });
});
