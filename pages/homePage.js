class HomePage {
    constructor(page) {
      this.page = page;
      this.acceptAllCookiesButton = '#onetrust-accept-btn-handler';
      this.loginButton = '[data-cy="signin-button-sidebar"]';
      this.googleButton = '[data-cy="google"]';
      this.emailInput = '#identifierId';
      this.searchButton = 'button[title="Search"]';
    }
  
    // Actions performed on the home page

    async clickOnAcceptCookies() {
      console.log('Click on Accept all cookies');
      await this.page.click(this.acceptAllCookiesButton);
    }

    async clickOnLoginButton(){
      console.log('Click on Login button');
      await this.page.click(this.loginButton);
    }

    async clickOnGoogleButton(){
      console.log('Click on Google button');
      await this.page.click(this.googleButton);
    }

    
    async enterCredentials(email){
      console.log(`Enter email: ${email}`);
      await this.page.fill(this.emailInput, email);
      await this.page.keyboard.press('Enter');
    }

    async clickSearchButton(){
      console.log('Click on Search button');
      await this.page.click(this.searchButton);
    }
  }
  
  export default HomePage;
  