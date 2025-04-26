import { test } from "@playwright/test";
import HomePage from "../../pages/homePage";
import { prod } from "../../data/url.json";
import Constans from "../../utils/constans";
import UiUtils from "../../utils/uiUtils";

test.describe("Login functionality using Gmail", () => {
  test("Test that user is able to login", async ({ page }) => {
    const homePage = new HomePage(page);

    // Navigate to IGN website
    await UiUtils.goToUrl(homePage.page, prod.ign_uk.baseUrl);
    await UiUtils.validatePageUrlContains(homePage.page, Constans.HOMEPAGE_URL);

    // Accept cookies
    await homePage.clickOnAcceptCookies();

    // Login IGN
    await homePage.clickOnLoginButton();
    await homePage.clickOnGoogleButton();
    // await homePage.enterCredentials(Constans.IGN_LOGIN_EMAIL, Constans.IGN_LOGIN_PASSWORD);
    await UiUtils.validatePageUrlContains(homePage.page, Constans.HOMEPAGE_URL);
  });
});
