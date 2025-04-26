class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[aria-label="Search"]');
    this.searchResults = page.locator('a[title="Go to game"] [data-cy="text-content-title"]');
  }

  // Actions performed on the Search

  async enterGame(gameName) {
    console.log(`Enter game name: ${gameName}`);
    await this.searchInput.fill(gameName);
  }

  async selectGame(gameName) {
    console.log(`Selecting the game: ${gameName}`);
    await this.searchResults
      .first()
      .waitFor({ state: "visible", timeout: 20000 });
  
    const gameTitles = await this.searchResults.allTextContents();
    console.log(gameTitles);
  
    for (let i = 0; i < gameTitles.length; i++) {
      const gameTitle = gameTitles[i];
      if (!gameTitle) continue;
      if (gameTitle.trim() === gameName.trim()) {
        await this.searchResults.nth(i).click();
        console.log(`Clicked on game: ${gameName}`);
        return;
      }
    }
    
  
    throw new Error(`Game "${gameName}" not found in search results.`);
  }  
}

export default SearchPage;
