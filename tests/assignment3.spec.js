const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).fill('laptops');
  await page.getByRole('textbox', { name: 'Search For Products' }).press('Enter');
  await page.getByPlaceholder('Keywords').click();
  await page.getByPlaceholder('Keywords').click({
    button: 'right'
  });

  // ---------------------
  await context.close();
  await browser.close();
})();