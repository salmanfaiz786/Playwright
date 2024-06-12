const{test, expect} = require('@playwright/test')

test('My First test', async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await expect(page).toHaveTitle('Your Store')
    await page.getByRole('textbox', {name: 'Search For Products'}).fill('Salman Faiz');
    await page.getByRole('button', { name: 'SEARCH' }).click();
    await page.waitForTimeout(5000);
    //headless = false;
})