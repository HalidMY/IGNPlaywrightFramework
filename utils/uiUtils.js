import { expect } from '@playwright/test';

class UiUtils {
  // Actions

  /**
   * 
   * @param {Object} page 
   * @param {String} url 
   * * @description This method navigates to a specific URL.
   */
  static async goToUrl(page, url) {
    console.log('Navigating to URL:', url);
    await page.goto(url);
  };

  // Validations

  /**
   *
   * @param {Object} page 
   * @param {String} pageUrlContains 
   * * @description This method validates that the current page URL contains a specific string.
   */
  static async validatePageUrlContains(page, pageUrlContains) {
    console.log('Validating the URL');
    const currentUrl = await page.url();
    expect(currentUrl).toContain(pageUrlContains);
  };

  /**
   * 
   * @param {String} title 
   * @param {String} expectedTitle 
   * * @description This method validates the game title on the page.
   */
  static async validateGenreTitle(title, expectedTitle) {
    console.log(`Validating the game ${title.textContent()}`);
    const actualTitle = await title.textContent();

    if (actualTitle.trim() !== expectedTitle) {
      throw new Error(
        `Game title mismatch! Expected: "${expectedTitle}", but got: "${actualTitle.trim()}"`
      );
    }

    console.log(`✅ Game title validated: "${expectedTitle}"`);
  }
}
export default UiUtils;
