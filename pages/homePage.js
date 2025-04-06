class HomePage {
  constructor(page) {
    this.page = page;
    this.acceptAllCookiesButton = page.locator("#onetrust-accept-btn-handler");
    this.loginButton = page.locator('[data-cy="signin-button-sidebar"]');
    this.googleButton = page.locator('[data-cy="google"]');
    this.emailInput = page.locator("#identifierId");
    this.searchButton = page.locator('button[title="Search"]');
    this.nextButton = page.locator("#identifierNext");
    this.passwordInput = page.locator('input[type="password"]');
    this.passwordNextButton = page.locator("#passwordNext");
  }

  // Actions performed on the Home page

  async clickOnAcceptCookies() {
    console.log("Click on Accept all cookies");
    await this.acceptAllCookiesButton.click();
  }

  async clickOnLoginButton() {
    console.log("Click on Login button");
    await this.loginButton.click();
  }

  async clickOnGoogleButton() {
    console.log("Click on Google button");
    await this.googleButton.click();
  }

  async enterCredentials(email, password) {
    console.log(`Enter email: ${email}`);
    await this.emailInput.fill(email);
    await this.nextButton.click();
    await this.passwordInput.fill(password);
    await this.passwordNextButton.click();
  }

  async clickSearchButton() {
    console.log("Click on Search button");
    await this.searchButton.click();
  }
}

export default HomePage;
