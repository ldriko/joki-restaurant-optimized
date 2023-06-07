import puppeteer from 'puppeteer';

describe('like', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: 'new'
    });
    page = await browser.newPage();
    await page.goto('http://localhost:9000');
  }, 60 * 1000);

  it('can like', async () => {
    const element = await page.waitForSelector(
      '#restaurantList li button.btn.btn-secondary'
    );
    await element.click();
    await page.waitForSelector('#restaurantList li button.btn.btn-primary');
    const text = await page.$eval(
      '#restaurantList li button.btn.btn-primary',
      (e) => e.innerHTML
    );
    expect(text).toContain('Disukai ♥');
  });

  it('can unlike', async () => {
    const element = await page.waitForSelector(
      '#restaurantList li button.btn.btn-primary'
    );
    await element.click();
    await page.waitForSelector('#restaurantList li button.btn.btn-secondary');
    const text = await page.$eval(
      '#restaurantList li button.btn.btn-secondary',
      (e) => e.innerHTML
    );
    expect(text).toContain('Suka');
  });

  afterAll(() => browser.close());
});
