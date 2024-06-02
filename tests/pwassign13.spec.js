const{test, expect} = require('@playwright/test')

test.describe('User Registration Suite', (async)=>{

    test('My First test', async({page}) => {
        await page.goto('https://ecommerce-playground.lambdatest.io/')
        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByRole('link', { name: 'Register', exact: true }).click();
        await page.locator(`//input[@name = 'firstname']`).fill('Salman');
        await page.getByPlaceholder('Last Name').fill('Faiz');
        await page.getByPlaceholder('E-Mail').fill('salman.faiz123@gmail.com');
        await page.getByPlaceholder('Telephone').fill('923454088840');
        await page.getByPlaceholder('Password', { exact: true}).fill('P@ss1234');
        await page.getByPlaceholder('Password Confirm' , {exact: true}).fill('P@ss1234');
        await page.getByText('I have read and agree to the').click();
        await expect( page.getByRole('button', { name: 'Continue' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect (page.getByRole('heading', {name: 'Your Account Has Been Created!'})).toHaveText('Your Account Has Been Created!');
        console.log("test")
    })

} )



/*const { chromium } = require('playwright');

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
})();*/