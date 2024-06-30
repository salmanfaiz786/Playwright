const{test, expect, chromium} = require('@playwright/test');

async function globalSetup(){

const browser = await chromium.launch({headless:true});
const context = await browser.newContext();
const myPage = await context.newPage();

await myPage.goto(`https://ecommerce-playground.lambdatest.io/index.php?route=account/login`);
await myPage.getByPlaceholder('E-Mail Address').fill(`salman.faiz777@gmail.com`);
await myPage.getByPlaceholder('Password', { exact: true}).fill(`P@ss1234`);
await myPage.getByRole('button', { name: 'Login' }).click()
await myPage.waitForLoadState();
await expect(myPage.getByRole('link', { name: /Edit your account/ })).toBeVisible();
await myPage.context().storageState({path:"./LoginAuth.json"});

}
export default globalSetup;
