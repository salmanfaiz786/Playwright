// const BasePage = require ("./BasePage");
//import BasePage from "./BasePage";
import loginCreds from "./loginCreds";
const {expect} = require ("@playwright/test");


class MyAccount {
    constructor(page){
        this.page=page;
        this.curser = page.getByRole('button', { name: 'Mega Menu'});
        this.appleOption = page.getByRole('link', { name: 'Apple', exact: true });
        // this.emailInput = this.email = page.getByPlaceholder('E-Mail Address');
        // this.password =  this.password = page.locator("#input-password");
        // this.submit = page.getByRole('button', { name: 'Login' });
    }


        async mouseHover(){

            await this.curser.hover();
        }

        async appleAvailability(){
            expect(await this.appleOption).toBeVisible

        }

        async appleClick(){

            await this.appleOption.click();
        }

}

module.exports = MyAccount;