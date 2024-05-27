const{test, expect} = require('@playwright/test')

test.beforeEach(async()=>{

    console.log('BeforeEachHook')
})

test.describe('group 1', ()=>{

    test('First test', async({page}) => {
        await page.goto('https://ecommerce-playground.lambdatest.io/')
        await expect(page).toHaveTitle('Your Store')
        await page.getByRole('button', { name: '0' }).click();
        await page.getByRole('cell', { name: 'Sub-Total:' }).click();
        await page.getByRole('heading', { name: 'Cart close' }).getByLabel('close').click();
    
    })

    test('Second test', async({page}) => {
        await page.goto('https://ecommerce-playground.lambdatest.io/')
        await expect(page).toHaveTitle('Your Store')
        await page.getByRole('button', {name: 'Shop by Category', exact:true}).click();
        await page.getByRole('heading', { name: 'Top categories close' }).click();
    
    })
})

test.describe('group 2', ()=>{

    test('Third test', async({page}) => {
        await page.goto('https://ecommerce-playground.lambdatest.io/')
        await expect(page).toHaveTitle('Your Store')
        await page.getByRole('textbox', {name: 'Search For Products'}).fill('Salman Faiz');
        await page.getByRole('button', { name: 'SEARCH' }).click();
    })


})