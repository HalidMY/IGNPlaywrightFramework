class SearchPage{
    constructor(page){
        this.page = page;
        this.searchInput = 'input[aria-label="Search"]';
        this.searchResults = 'div[data-cy="search-results"]  a';
    }

    // Actions performed on the

    async enterGame(gameName){
        console.log(`Enter game name: ${gameName}`);
        await this.page.fill(this.searchInput, gameName);
    }

}

export default SearchPage;