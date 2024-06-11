const {test, expect} = require ("@playwright/test");
const LoginPage = require ('../pages/LoginPage');
const BasePage = require ('../pages/BasePage')


test.describe('login Suite', ()=>{

    test('login test using POM', async({page})=>{

        // const basePage = new BasePage (page);
        const loginPage = new LoginPage(page);
        await loginPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        // await loginPage.mouseHover();
        await loginPage.emailField();
        await loginPage.PassField();
        await loginPage.clickLogin();


    }
    

    
    )



})
