class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchBar = page.locator('input[aria-label="Search"]');
    this.searchResults = page.locator('a[data-cy="object-row"] [data-cy="text-content-title"]');
    this.movieFilterButton = page.locator('[data-cy="modalWindow"] button[id="filter1"]');
  }

  // Actions performed on the Search

  /**
   * * Click on the Movies filter button
   * @description This method clicks on the Movies filter button.
   */
  async clickMovieFilter() {
    console.log("Click on Movies filter");
    await this.movieFilterButton.click();
  }

  /**
   * 
   * @param {String} input - The input to search for
   * @description This method fills the search input with the provided value of game, movie, tv show, comics or tech.
   */
  async searchInput(input) {
    console.log(`Searching the input: ${input}`);
    await this.searchBar.fill(input);
  }

  /**
   * 
   * @param {String} input  - The input to select for
   * @description This method selects the game, movie, tv show, comics or tech from the search results based on the provided input.
   * @returns 
   */
  async selectInput(input) {
    console.log(`Selecting the input: ${input}`);
    await this.searchResults
      .first()
      .waitFor({ state: "visible", timeout: 20000 });
  
    const gameTitles = await this.searchResults.allTextContents();
    console.log(gameTitles);
  
    for (let i = 0; i < gameTitles.length; i++) {
      const gameTitle = gameTitles[i];
      if (!gameTitle) continue;
      if (gameTitle.trim() === input.trim()) {
        await this.searchResults.nth(i).click();
        console.log(`Clicked on game: ${input}`);
        return;
      }
    }
    
  
    throw new Error(`Game "${input}" not found in search results.`);
  }  
}

export default SearchPage;
