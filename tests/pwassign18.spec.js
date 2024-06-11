const { test, expect, chromium } = require("@playwright/test");
import RegData from "../data/register";
	
test.describe("Register Suite", () => {
 let browser;
 let context;
 let regPage;
 test.beforeAll(async () => {
   browser = await chromium.launch({ headless: false });
   context = await browser.newContext();
   regPage = await context.newPage();
 });


 for(let i=0; i<RegData.length; i++){
    test(`Complete Registration ${i+1}`, async() => {

        await regPage.goto(RegData[i].url);
        await regPage.getByRole('button', { name: 'My account' }).hover();
        await regPage.getByRole('link', { name: 'Register', exact: true }).click();
    
        await regPage.locator(`//input[@name = 'firstname']`).fill(RegData[i].firstName);
        await regPage.getByPlaceholder('Last Name').fill(RegData[i].lastName);
        await regPage.getByPlaceholder('E-Mail').fill(RegData[i].email);
        await regPage.getByPlaceholder('Telephone').fill(RegData[i].tPhone);
        await regPage.getByPlaceholder('Password', { exact: true}).fill(RegData[i].password);
        await regPage.getByPlaceholder('Password Confirm' , {exact: true}).fill(RegData[i].password);
        await regPage.getByText('I have read and agree to the').click();
        await expect( regPage.getByRole('button', { name: 'Continue' })).toBeVisible();
        await regPage.getByRole('button', { name: 'Continue' }).click();
        await expect (regPage.getByRole('heading', {name: 'Your Account Has Been Created!'})).toHaveText('Your Account Has Been Created!');
        
    })}

}) 
