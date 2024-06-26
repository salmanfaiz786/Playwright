import { test, expect } from '@playwright/test';
import pdata, { nextPageLocator } from '../../data/paginationBottomData';
const  method= require( '../../libs/helper')

test.describe.serial('Bottom Pagination suite', () => {


    test ('Page Navigation', async ({page}) =>{
    
        await method.gotoApplePage(page);
        let txt = await page.locator(pdata.Page1Locator).textContent();
        

        if(txt === "Showing 1 to 15 of 42 (3 Pages)" ){
    
            await expect (page.locator(pdata.page2Locator)).toBeVisible();
            await expect (page.locator(pdata.page3Locator)).toBeVisible();
            await expect (page.locator(pdata.nextPageLocator)).toBeVisible();
            await expect (page.locator(pdata.LastPageLocator)).toBeVisible();
            await method.nextPage(page);
            await page.waitForTimeout(3000);
            await method.LastPage(page);
            await page.waitForTimeout(3000);
            await method.backwardPage(page);
            await page.waitForTimeout(3000);
            await method.forwardPage(page);
            await page.waitForTimeout(3000);
            
        }
        

    })


})


