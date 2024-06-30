import { expect, test } from "@playwright/test";
import moment from "moment";


test("Calendar - Date selection using fill function", async ({ page }) => {
 await page.goto(
   "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
 );
 let date = "1994-12-04";


 await page.fill("id=birthday", date);
 //await expect(page.getByText("Birthday")).toHaveText("Birthday");

 await page.waitForTimeout(3000);
});


test("Calendar - Date selection using moment", async ({ page }) => {
 await page.goto(
   "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
 );


 await page.click("//input[@placeholder='Start date']");


 await page.waitForTimeout(1000);


 await selectDate(12, "December 2023");


 await page.waitForTimeout(1000);
 await page
   .getByRole("heading", { name: "Bootstrap Date Pickers Demo" })
   .click();


 await page.click("//input[@placeholder='End date']");


 await page.waitForTimeout(1000);


 await selectDate(22, "November 2025");


 await page.waitForTimeout(1000);
 await page
   .getByRole("heading", { name: "Bootstrap Date Pickers Demo" })
   .click();


 async function selectDate(date, dateToSelect) {
   const mmYY = page.locator(
     "(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]"
   );
   const prev = page.locator(
     "(//table[@class='table-condensed']//th[@class='prev'])[1]"
   );
   const next = page.locator(
     "(//table[@class='table-condensed']//th[@class='next'])[1]"
   );


   // let dateToSelect: string = "May 2019";
   const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
   console.log("this month? " + thisMonth);
   console.log("date is ", date);
   console.log("date to select is ", dateToSelect);
   while ((await mmYY.textContent()) != dateToSelect) {
     if (thisMonth) {
       await prev.click();
     } else {
       await next.click();
     }
   }
   await page.waitForTimeout(2000);
   await page.click(`//td[@class='day'][text()='${date}']`);
   await page
     .getByRole("heading", { name: "Bootstrap Date Pickers Demo" })
     .click();


   await page.waitForTimeout(3000);
 }
});


