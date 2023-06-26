import puppeteer from 'puppeteer';

describe('favorite', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
    });
    page = await browser.newPage();
    await page.goto('http://localhost:9000');
  }, 60 * 1000);

  it('can favorite', async () => {
    const element = await page.waitForSelector(
      '#restaurantList li button.btn.btn-secondary',
    );
    await element.click();
    await page.waitForSelector(
      '#restaurantList li button.btn.btn-primary.btn-favorite',
    );
    const text = await page.$eval(
      '#restaurantList li button.btn.btn-primary.btn-favorite',
      (e) => e.innerHTML,
    );
    expect(text).toContain('Favorit ♥');
  });

  it('can unlike', async () => {
    const element = await page.waitForSelector(
      '#restaurantList li button.btn.btn-primary',
    );
    await element.click();
    await page.waitForSelector(
      '#restaurantList li button.btn.btn-secondary.btn-favorite',
    );
    const text = await page.$eval(
      '#restaurantList li button.btn.btn-secondary.btn-favorite',
      (e) => e.innerHTML,
    );
    expect(text).toContain('Tambahkan Favorit');
  });

  afterAll(() => browser.close());
});
