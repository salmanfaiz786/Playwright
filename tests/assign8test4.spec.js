const{test, expect} = require('@playwright/test')

test('My First test', async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await expect(page).toHaveTitle('Your Store')
    await page.getByRole('button', { name: '0' }).click();
    await page.getByRole('cell', { name: 'Sub-Total:' }).click();
    await page.getByRole('heading', { name: 'Cart close' }).getByLabel('close').click();
    


})