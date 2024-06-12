const {test, expect, chromium} = require ("@playwright/test");
const LoginPage1 = require ('../../pages/LoginPage');
const MyAccount = require ('../../pages/myAccount');

let browser;
let context;
let MegaPage;
   
    test.beforeAll(async () => {
      browser = await chromium.launch({ headless: false });
      context = await browser.newContext();
      MegaPage = await context.newPage();
      console.log("Before ALl");
   
   });


test.describe('Mega Menu', ()=>{

    test('login to WebSite', async()=>{
        const megaLogin = new LoginPage1(MegaPage);
        await megaLogin.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        // await loginPage.mouseHover();
        await megaLogin.emailField();
        await megaLogin.PassField();
        await megaLogin.clickLogin();
        
    })

    test('Apple option assertions', async()=>{
        const myAccount = new MyAccount(MegaPage);
        await myAccount.mouseHover();
        await myAccount.appleAvailability();
        await myAccount.appleClick();
})


})