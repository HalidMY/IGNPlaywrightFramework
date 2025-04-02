const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homePage').default;
const URL = require('../../data/url.json');
const { default: CONSTANTS } = require('../../utils/constans');

test.describe('Login functionality using Gmail', () => {
    test('Test that user is able to login', async ({ page }) => {
        const homePage = new HomePage(page);
        
        // Navigate to IGN website
        await page.goto(URL.prod.ign_uk.baseUrl);
        expect(page.url()).toContain('ign.com');
        
        // Accept cookies
        await homePage.clickOnAcceptCookies();

        // Login IGN
        await homePage.clickOnLoginButton();
        await homePage.clickOnGoogleButton();
        await homePage.enterCredentials(CONSTANTS.IGN_LOGIN.EMAIL);

      });
})
