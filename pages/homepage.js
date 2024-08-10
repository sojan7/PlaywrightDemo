class HomePage {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.locator(".fontBig");
  }

  async getWelcomeMessage() {
    return await this.welcomeMessage.textContent();
  }
}

module.exports = HomePage;
