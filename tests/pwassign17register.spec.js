import login from "../data/login"
import logindata from "../data/register"
const{test, expect} = require('@playwright/test')
test.describe('User Registration Suite New', (async)=>{

    for(let i=0; i<5; i++){
    test(`Complete Registration ${i}`, async({page}) => {
        await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home")
        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByRole('link', { name: 'Register', exact: true }).click();
        await page.locator(`//input[@name = 'firstname']`).fill(logindata[i].firstusernameR);
        await page.getByPlaceholder('Last Name').fill(logindata[i].LastusernameR);
        await page.getByPlaceholder('E-Mail').fill(logindata[i].emailR);
        await page.getByPlaceholder('Telephone').fill(logindata[i].phoneR);
        await page.getByPlaceholder('Password', { exact: true}).fill(logindata[i].userpasswordR);
        await page.getByPlaceholder('Password Confirm' , {exact: true}).fill(logindata[i].userConfirmPasswordR);
        await page.getByText('I have read and agree to the').click();
        await expect( page.getByRole('button', { name: 'Continue' })).toBeVisible();
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect (page.getByRole('heading', {name: 'Your Account Has Been Created!'})).toHaveText('Your Account Has Been Created!');
        await page.waitForTimeout(5000);
    })}

} )
