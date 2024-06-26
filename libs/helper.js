import pdata from '../data/paginationBottomData';
import { expect } from '@playwright/test';


async function gotoApplePage(page)
 {

    await Promise.all([

        page.waitForNavigation({ waitUntil: "networkidle" }),
        
        await page.goto("https://ecommerce-playground.lambdatest.io/"),

        await page.getByRole('button', { name: 'Mega Menu' }).hover(),

        await page.
            locator("div#entry281_216477 li").
            filter({ hasText: 'Apple' }).
            getByRole('link', { name: 'Apple' }).
            click(),
    ])
}

async function nextPage(page){

    await expect(page.locator(pdata.nextPageLocator)).toBeVisible();
    await page.locator(pdata.nextPageLocator).click();
}

async function LastPage(page){

    await expect(page.locator(pdata.LastPageLocator)).toBeVisible();
    await page.locator(pdata.LastPageLocator).click();
}

async function backwardPage(page){

    for(let i=2; i<=page.locator(`//div[@id='entry_212440']//ul//li/a`).length-2; i--){
    await page.locator(`//div[@id='entry_212440']//ul//li/a[text()=${i}]`).click();
    }
}

async function forwardPage(page){

    for(let i=1; i<=page.locator(`//div[@id='entry_212440']//ul//li/a`).length-2; i++){
    await page.locator(`//div[@id='entry_212440']//ul//li/a[text()=${i}]`).click();
        }    
}

module.exports = {
    gotoApplePage,
    nextPage,
    LastPage,
    backwardPage,
    forwardPage
}