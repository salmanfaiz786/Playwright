import BasePage from "./BasePage";
import LoginPage from "./LoginPage"
const {expect} = require ("@playwright/test");


class applePage {
    constructor(page){
        //super(page);
        this.page=page;
        this.aheading = page.getByRole('heading', { name: 'Apple', exact: true });
        this.Filter = page.locator('#mz-filter-0').getByRole('heading', { name: 'Filter' });
        this.priceFilter = page.locator('#mz-filter-content-0').getByText('Price');
        this.minPrice = page.locator('#mz-filter-panel-0-0').getByPlaceholder('Minimum Price');
        this.maxPrice = page.locator('#mz-filter-panel-0-0').getByPlaceholder('Maximum Price');
        this.priceSearch = page.locator('#mz-filter-panel-0-1').getByPlaceholder('Search');
        this.appleColor = page.locator('#mz-filter-content-0').getByText('Color');
        this.greenColor = page.locator('#mz-filter-panel-0-2').getByRole('img', { name: 'Green' });
        this.availability = page.locator('#mz-filter-content-0').getByText('Availability');
        this.inStock = page.locator('#mz-filter-panel-0-3').getByText('In stock');

    }


        async titleCheck(){

            expect(await this.aheading).toBeVisible
            
        }

        async price(){
            
            expect(await this.priceFilter).toBeVisible

        }


        async minimumPriceCheck(){

            expect(await this.minPrice).toBeVisible
        }

        async colorCheck(){

            expect(await this.appleColor).toBeVisible


        }


}

module.exports = applePage;