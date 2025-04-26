import { test } from "@playwright/test";
import HomePage from "../../../pages/homePage";
import { prod } from "../../../data/url.json";
import Constans from "../../../utils/constans";
import SearchPage from "../../../pages/searchPage";
import BasePage from "../../../pages/games/assassinsCreed/basePage";
import UiUtils from "../../../utils/uiUtils";
import Strings from "../../../utils/strings";


async function testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl) {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  const basePage = new BasePage(page);

  // Navigate to IGN website
  await UiUtils.goToUrl(homePage.page, prod.ign_uk.baseUrl);
  await UiUtils.validatePageUrlContains(homePage.page, Constans.HOMEPAGE_URL);

  // Accept cookies
  await homePage.clickOnAcceptCookies();

  // Select the game for review
  await homePage.clickSearchButton();
  await searchPage.enterGame(gameName);
  await searchPage.selectGame(gameName);

  // Verify the game's page
  await page.waitForURL(`**${gameUrl}`);
  await UiUtils.validatePageUrlContains(basePage.page, gameUrl);
  await UiUtils.validateGameTitle(basePage.gameTitle, gameTitle);
}

test.describe("Select games based on the game's title", () => {
  test("Test that select Assassin's Creed Shadows", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_SHADOWS.name;
    const gameUrl = Constans.AC_SHADOWS_URL;
    const gameTitle = Strings.ASSASSINS_CREED_SHADOWS.pageTitle;
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });

  test("Test that select Assassin's Creed Mirage", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_MIRAGE.name;
    const gameUrl = Constans.AC_MIRAGE_URL;
    const gameTitle = Strings.ASSASSINS_CREED_MIRAGE.pageTitle;
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });

  test("Test that select Assassin's Creed Valhalla", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_VALHALLA.name;
    const gameUrl = Constans.AC_VALHALLA_URL;
    const gameTitle = Strings.ASSASSINS_CREED_VALHALLA.pageTitle;
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });

  test("Test that select Assassin's Creed Odyssey", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_ODYSSEY.name;
    const gameUrl = Constans.AC_ODYSSEY_URL;
    const gameTitle = Strings.ASSASSINS_CREED_ODYSSEY.pageTitle;
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });

  test("Test that select Assassin's Creed Origins", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_ORIGINS.name;
    const gameUrl = Constans.AC_ORIGINS_URL;
    const gameTitle = Strings.ASSASSINS_CREED_ORIGINS.pageTitle;
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });

  test("Test that select Assassin's Creed Syndicate", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_SYNDICATE.name;
    const gameUrl = Constans.AC_SYNDICATE_URL;
    const gameTitle = Strings.ASSASSINS_CREED_SYNDICATE.pageTitle;
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });

  test("Test that select Assassin's Creed Unity", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_UNITY.name;
    const gameUrl = Constans.AC_UNITY_URL;
    const gameTitle = Strings.ASSASSINS_CREED_UNITY.pageTitle;
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });

  test("Test that select Assassin's Creed Rogue", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_ROGUE.name;
    const gameUrl = Constans.AC_ROGUE_URL;
    const gameTitle = Strings.ASSASSINS_CREED_ROGUE.pageTitle;
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });

  test("Test that select Assassin's Creed 4", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_BLACK_FLAG.name;
    const gameUrl = Constans.AC_BLACK_FLAG_URL;
    const gameTitle = Strings.ASSASSINS_CREED_BLACK_FLAG.pageTitle;
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });

  test("Test that select Assassin's Creed III", async ({ page }) => {
    const gameName = Strings.ASSASSINS_CREED_THIRD.name;
    const gameUrl = Constans.AC_THIRD_URL;
    const gameTitle = Strings.ASSASSINS_CREED_THIRD.pageTitle; 
    await testAssassinsCreedGamePage(page, gameName, gameTitle, gameUrl);
  });
});
