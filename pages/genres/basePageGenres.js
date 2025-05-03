class BasePageGenres {
  constructor(page) {
    this.page = page;
    this.genreTitle = page.locator('h1[data-cy="object-header-display-title"]');
    this.readReviewButton = page.locator('a[data-cy="article-review-link"]');
  }

  // Actions performed on the Assassin's Creed Shadows page

}

export default BasePageGenres;
