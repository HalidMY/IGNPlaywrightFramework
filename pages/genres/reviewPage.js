class ReviewPage {
    constructor(page) {
        this.page = page;
        this.reviewPageTitle = page.locator('h1[data-cy="article-headline"]');
    }
}
export default ReviewPage;