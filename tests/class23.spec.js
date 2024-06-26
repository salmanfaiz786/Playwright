import { expect, test } from "@playwright/test";


test.describe.serial("Drop Down Test Suite", () => {
 test("Basic Drag and drop", async ({ page }) => {
   await page.goto("https://commitquality.com/practice-drag-and-drop");

   if (expect (page.getByTestId('large-box')).toHaveText("Drag the small box here.")){
    await page.locator("#small-box").dragTo(page.locator(".large-box "));
    await page.waitForTimeout(5000);
    await expect.soft(page.locator(".large-box")).toBeVisible();
    await page.waitForTimeout(5000);
    await expect(page.getByTestId('large-box')).toHaveText("Success!");
    await page.waitForTimeout(5000);
   }
      

 })


 test("Advance Drag and drop1", async ({ page }) => {
   await page.goto("https://commitquality.com/practice-drag-and-drop");


   await page.locator("#small-box").hover();
   await page.waitForTimeout(5000);
   await page.mouse.down();
   await page.waitForTimeout(5000);
   await page.locator(".large-box ").hover();
   await page.waitForTimeout(5000);
   await page.mouse.up();
   await page.waitForTimeout(5000);
  
 })

 test("Advance Drag and drop2", async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");
 
 
    await page.locator("#small-box").hover();
    await page.waitForTimeout(5000);
    await page.mouse.down();
    await page.waitForTimeout(5000);
    await page.locator(".large-box ").hover();
    await page.waitForTimeout(5000);
    await page.mouse.up();
    await page.waitForTimeout(5000);
   
  })


  test("Advance Drag and drop3", async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");
 
 
    await page.locator("#small-box").hover();
    await page.waitForTimeout(5000);
    await page.mouse.down();
    await page.waitForTimeout(5000);
    await page.locator(".large-box ").hover();
    await page.waitForTimeout(5000);
    await page.mouse.up();
    await page.waitForTimeout(5000);
   
  })

})