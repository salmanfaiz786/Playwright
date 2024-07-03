// const BasePage = require ("./BasePage");
import BasePage from "./BasePage";
import loginCreds from "./loginCreds";
const {expect} = require ("@playwright/test");


class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.page=page;
        this.curser = page.getByRole('button', { name: 'My account' });
        this.emailInput = this.email = page.getByPlaceholder('E-Mail Address');
        this.password =  this.password = page.locator("#input-password");
        this.submit = page.getByRole('button', { name: 'Login' });
    }


        async mouseHover(){

            await this.curser().hover();
        }

        async emailField(){
            await this.emailInput.fill((loginCreds.loginEmail));

        }

        async PassField(){

            await this.password.fill((loginCreds.loginPassword));
        }

        async clickLogin(){

            await this.submit.click();
            await page.context().storageState({path:"./LoginAuth.json"});
        }

        

}

module.exports = LoginPage;