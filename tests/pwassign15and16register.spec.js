import logindata from "../data/register"
const{test, expect} = require('@playwright/test')
test.describe('User Registration Suite New', (async)=>{

    test('Complete Registration', async({page}) => {
        await page.goto(logindata[0].websiteURLR)
        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByRole('link', { name: 'Register', exact: true }).click();
        await page.locator(`//input[@name = 'firstname']`).fill(logindata[0].firstusernameR);
        await page.getByPlaceholder('Last Name').fill(logindata[0].LastusernameR);
        await page.getByPlaceholder('E-Mail').fill(logindata[0].emailR);
        await page.getByPlaceholder('Telephone').fill('923454088840');
        await page.getByPlaceholder('Password', { exact: true}).fill(logindata[0].userpasswordR);
        await page.getByPlaceholder('Password Confirm' , {exact: true}).fill(logindata[0].userConfirmPasswordR);
        await page.getByText('I have read and agree to the').click();
        await expect( page.getByRole('button', { name: 'Continue' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect (page.getByRole('heading', {name: 'Your Account Has Been Created!'})).toHaveText('Your Account Has Been Created!');
        await page.waitForTimeout(5000);
    })

} )
