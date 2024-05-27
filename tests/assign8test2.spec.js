const{test, expect} = require('@playwright/test')

test('My First test', async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await expect(page).toHaveTitle('Your Store')
    await page.getByRole('link', {name: 'Special Hot', exact:true}).click();
})