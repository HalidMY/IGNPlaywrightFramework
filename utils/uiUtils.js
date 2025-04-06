import { expect } from '@playwright/test';

class UiUtils {
  // Actions

  // Navigate to the URL
  static async goToUrl(page, url) {
    console.log('Navigating to URL:', url);
    await page.goto(url);
  };

  // Validations

  // Validate the page URL
  static async validatePageUrlContains(page, pageUrlContains) {
    console.log('Validating the URL');
    const currentUrl = await page.url();
    expect(currentUrl).toContain(pageUrlContains);
  };

  // Validate the title of the game
  static async validateGameTitle(title, expectedTitle) {
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
