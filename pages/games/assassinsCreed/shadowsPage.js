class ShadowsPage {
  constructor(page) {
    this.page = page;
    this.gameTitle = page.locator('h1[data-cy="object-header-display-title"]');
  }

  // Actions performed on the Assassin's Creed Shadows page

  // Validations
  async validateGameTitle(expectedTitle) {
    console.log("Validate the game title");
    const actualTitle = await this.gameTitle.textContent();

    if (actualTitle.trim() !== expectedTitle) {
      throw new Error(
        `Game title mismatch! Expected: "${expectedTitle}", but got: "${actualTitle.trim()}"`
      );
    }

    console.log(`✅ Game title validated: "${expectedTitle}"`);
  }
}

export default ShadowsPage;
