import { test } from "@playwright/test";
import HomePage from "../../../../pages/homePage";
import SearchPage from "../../../../pages/searchPage";
import UiUtils from "../../../../utils/uiUtils";
import { prod } from "../../../../data/url.json";
import Constans from "../../../../utils/constans";
import Strings from "../../../../utils/strings";

test.describe("Search and read review for Batman Dark Knight", () => {
  test("Test that search and read review for Batman Dark Knight", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    // Navigate to IGN website
    await UiUtils.goToUrl(homePage.page, prod.ign_uk.baseUrl);
    await UiUtils.validatePageUrlContains(homePage.page, Constans.HOMEPAGE_URL);

    // Accept cookies
    await homePage.clickOnAcceptCookies();

    // Select the game for review
    await homePage.clickSearchButton();
    await searchPage.clickMovieFilter();
    await searchPage.searchInput(Strings.DARK_KNIGHT.name);
    await searchPage.selectInput(Strings.DARK_KNIGHT.name);
  });
});
