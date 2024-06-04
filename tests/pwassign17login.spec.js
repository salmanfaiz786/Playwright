import logindata from "../data/login"
const{test, expect} = require('@playwright/test')

test.describe('User AccountLogin Suite', (async)=>{

    test.beforeEach(async({page})=>{
    
            await page.goto(`https://ecommerce-playground.lambdatest.io/index.php?route=common/home`);
            await page.getByRole('button', { name: 'My account' }).hover();
            await page.getByRole('link', { name: 'Login', exact: true }).click();
            }
        )

    for (let l=0; l<5; l++){
        test(`login ${l}`, async({page}) =>{

        await page.getByPlaceholder('E-Mail Address').fill(logindata[l].loginEmail);
        await page.getByPlaceholder('Password', { exact: true}).fill(logindata[l].loginPassword);
        await page.getByRole('button', { name: 'Login' }).click()
        await page.waitForLoadState();
        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByRole('link', { name: 'Logout', exact: true }).click()
        await expect(page.getByText('You have been logged off your')).toBeVisible();

    })}
})