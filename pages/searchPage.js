class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[aria-label="Search"]');
    this.searchResults = page.locator('[title="Go to game"]');
  }

  // Actions performed on the Search

  async enterGame(gameName) {
    console.log(`Enter game name: ${gameName}`);
    await this.searchInput.fill(gameName);
  }

  async selectGame(gameName) {
    console.log(`Game is selected: ${gameName}`);
    await this.searchResults
      .first()
      .waitFor({ state: "visible", timeout: 5000 });

    const gameElements = await this.searchResults.elementHandles();

    for (const gameElement of gameElements) {
      const text = await gameElement.textContent();

      if (text.includes(gameName)) {
        await gameElement.click();
        console.log(`Clicked on game: ${gameName}`);
        return;
      }
    }

    throw new Error(`Game "${gameName}" not found in search results.`);
  }
}

export default SearchPage;
