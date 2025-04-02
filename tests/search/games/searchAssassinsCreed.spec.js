import { test, expect } from "@playwright/test";
import HomePage from "../../../pages/homePage";
import { prod } from "../../../data/url.json";
import { default as CONSTANTS } from "../../../utils/constans";
import SearchPage from "../../../pages/searchPage";
import ShadowsPage from "../../../pages/games/assassinsCreed/shadowsPage";

test.describe("Select games based on the game's title", () => {
  test.only("Test that select Assassin's Creed Shadows", async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const shadowsPage = new ShadowsPage(page);

    // Navigate to IGN website
    await page.goto(prod.ign_uk.baseUrl);
    expect(page.url()).toContain("ign.com");

    // Accept cookies
    await homePage.clickOnAcceptCookies();

    // Select the game for review
    await homePage.clickSearchButton();
    await searchPage.enterGame(CONSTANTS.GAME_NAMES.ASSASSINS_CREED.SHADOWS);
    await searchPage.selectGame(CONSTANTS.GAME_NAMES.ASSASSINS_CREED.SHADOWS);

    // Verify the game's page
    await shadowsPage.validateGameTitle(
      CONSTANTS.GAME_NAMES.ASSASSINS_CREED.SHADOWS
    );
  });
});
