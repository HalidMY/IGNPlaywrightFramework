class ShadowsPage {
  constructor(page) {
    this.page = page;
    this.gameTitle = page.locator('h1[data-cy="object-header-display-title"]');
  }

  url = '/games/assassins-creed-shadows';
  // Actions performed on the Assassin's Creed Shadows page

}

export default ShadowsPage;
