Test3:
const{test, expect} = require('@playwright/test')

test('My First test', async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await expect(page).toHaveTitle('Your Store')
    await page.getByRole('button', {name: 'Shop by Category', exact:true}).click();
    await page.getByRole('heading', { name: 'Top categories close' }).click();

})