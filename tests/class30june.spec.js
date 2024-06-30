const{test, expect} = require('@playwright/test')

test ('Page Navigation', async ({page}) =>{
 
    await page.goto(`https://ecommerce-playground.lambdatest.io/index.php?route=account/login`);
    //await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
    await page.waitForTimeout(3000);
    await expect(page.getByRole('link', { name: /Edit your account/ })).toBeVisible();
})


test ('Page Navigation 2', async ({page}) =>{
 
    await page.goto(`https://ecommerce-playground.lambdatest.io/index.php?route=account/login`);
    //await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
    await page.waitForTimeout(3000);
    await expect(page.getByRole('link', { name: /Edit your account/ })).toBeVisible();
})

test ('Page Navigation 3', async ({page , context}) =>{
    
    await context.clearCookies();
    await page.goto(`https://ecommerce-playground.lambdatest.io/index.php?route=account/login`);
    //await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
    await page.waitForTimeout(3000);
    await expect(page.getByRole('link', { name: /Edit your account/ })).toBeVisible();
})