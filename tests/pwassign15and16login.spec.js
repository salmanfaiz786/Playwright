import logindata from "../data/login"
const{test, expect} = require('@playwright/test')

test.describe('User AccountLogin Suite', (async)=>{

    test.beforeEach(async({page})=>{
    
            await page.goto(logindata[0].websiteURL);
            await page.getByRole('button', { name: 'My account' }).hover();
            await page.getByRole('link', { name: 'Login', exact: true }).click();
            }
        )

    
        test.skip('login with valid creds', async({page}) =>{

        await page.getByPlaceholder('E-Mail Address').fill(logindata[0].email);
        await page.getByPlaceholder('Password', { exact: true}).fill(logindata[1].userpassword);
        await page.getByRole('button', { name: 'Login' }).click()
        await page.waitForLoadState();
        await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
        await page.waitForTimeout(1000)

    })



        test.skip('login with username and without password', async({page})=>{

            await page.getByPlaceholder('E-Mail Address').fill(logindata[0].email);;
            await page.getByPlaceholder('Password', { exact: true}).fill('');
            await page.getByRole('button', { name: 'Login' }).click()
            await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();
            await page.waitForTimeout(3000);
            
   })

        test.skip('login without username and with password', async({page})=>{

            await page.getByPlaceholder('E-Mail Address').fill('');
            await page.getByPlaceholder('Password', { exact: true}).fill(logindata[0].userpassword);
            await page.getByRole('button', { name: 'Login' }).click()
            await expect(page.getByText('Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour')).toBeVisible();
            await page.waitForTimeout(3000);


   })

         test('login without username and password', async({page})=>{

           await page.getByPlaceholder('E-Mail Address').fill('');
           await page.getByPlaceholder('Password', { exact: true}).fill('');
           await page.getByRole('button', { name: 'Login' }).click()
           await expect(page.getByText('Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour')).toBeVisible();
           await page.waitForTimeout(3000);

        

   })

})