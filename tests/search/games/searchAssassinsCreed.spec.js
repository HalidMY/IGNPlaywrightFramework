import { test, expect } from "@playwright/test";
import HomePage from "../../../pages/homePage";
import { prod } from "../../../data/url.json";
import Constans from "../../../utils/constans";
import SearchPage from "../../../pages/searchPage";
import ShadowsPage from "../../../pages/games/assassinsCreed/shadowsPage";
import UiUtils from "../../../utils/uiUtils";
import Strings from "../../../utils/strings";

test.describe("Select games based on the game's title", () => {
  test("Test that select Assassin's Creed Shadows", async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const shadowsPage = new ShadowsPage(page);

    // Navigate to IGN website
    await UiUtils.goToUrl(homePage.page, prod.ign_uk.baseUrl);
    await UiUtils.validatePageUrlContains(homePage.page, Constans.HOMEPAGE_URL);

    // Accept cookies
    await homePage.clickOnAcceptCookies();

    // Select the game for review
    await homePage.clickSearchButton();
    await searchPage.enterGame(Strings.ASSASSINS_CREED_SHADOWS.name);
    await searchPage.selectGame(Strings.ASSASSINS_CREED_SHADOWS.name);

    // Verify the game's page
    await page.waitForURL(`**${Constans.AC_SHADOWS_URL}`);
    await UiUtils.validatePageUrlContains(shadowsPage.page, Constans.AC_SHADOWS_URL);
    await UiUtils.validateGameTitle(shadowsPage.gameTitle, Strings.ASSASSINS_CREED_SHADOWS.name);
  });
});
