import { test } from "@playwright/test";
import HomePage from "../../../../pages/homePage";
import SearchPage from "../../../../pages/searchPage";
import UiUtils from "../../../../utils/uiUtils";
import { prod } from "../../../../data/url.json";
import Constans from "../../../../utils/constans";
import Strings from "../../../../utils/strings";
import BasePageGenres from "../../../../pages/genres/basePageGenres";
import ReviewPage from "../../../../pages/genres/reviewPage";

test.describe("Search and read review for Batman Dark Knight", () => {
  test("Test that search and read review for Batman Dark Knight", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const basePageGenres = new BasePageGenres(page);
    const reviewPage = new ReviewPage(page);

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

    // Verify the movie's page
    await page.waitForURL(`**${Constans.DARK_KNIGHT_URL}`);
    await UiUtils.validatePageUrlContains(basePageGenres.page,Constans.DARK_KNIGHT_URL);
    await UiUtils.validateGenreTitle(basePageGenres.genreTitle, Strings.DARK_KNIGHT.pageTitle);

    // Click on the review link
    await basePageGenres.readReviewButton.click();

    // Verify the review page
    await page.waitForURL(`**${Constans.DARK_KNIGHT_REVIEW_URL}`);
    await UiUtils.validatePageUrlContains(reviewPage.page, Constans.DARK_KNIGHT_REVIEW_URL);
    await UiUtils.validateGenreTitle(reviewPage.reviewPageTitle, Strings.DARK_KNIGHT_REVIEW.pageTitle);
  });
});
