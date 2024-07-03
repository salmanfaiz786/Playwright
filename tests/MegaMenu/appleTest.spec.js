const {test, expect, chromium} = require ("@playwright/test");
const LoginPage = require ('../../pages/LoginPage');
const MyAccount = require ('../../pages/myAccount');
const applePage1 = require ('../../pages/applePage');

let browser;
let context;
let MegaPage;
   
    test.beforeAll(async () => {
      browser = await chromium.launch({ headless: false });
      context = await browser.newContext();
      MegaPage = await context.newPage();
      const megaLogin = new LoginPage(MegaPage);
      await megaLogin.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
      console.log("Before All");
   
   });


test.describe('Mega Menu', ()=>{

    // test.skip('login to WebSite', async()=>{
    //     const megaLogin = new LoginPage1(MegaPage);
    //     await megaLogin.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    //     // await loginPage.mouseHover();
    //     await megaLogin.emailField();
    //     await megaLogin.PassField();
    //     await megaLogin.clickLogin();


    //     const megaLogin = new LoginPage1(MegaPage);
    //     await megaLogin.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    //     // await loginPage.mouseHover();
    //     await megaLogin.emailField();
    //     await megaLogin.PassField();
    //     await megaLogin.clickLogin();
        
    // })

    test('Apple option assertions', async()=>{
        const myAccount = new MyAccount(MegaPage);
        await myAccount.mouseHover();
        await myAccount.appleAvailability();
        await myAccount.appleClick();
        })


    test('Apple Page tests', async()=>{
        const applePage = new applePage1(MegaPage);
        await applePage.titleCheck();
        await applePage.price();
        await applePage.minimumPriceCheck();
        await applePage.colorCheck();
        })


})