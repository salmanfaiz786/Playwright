const{test, expect} = require('@playwright/test')

test('My First test', async({page}) => {
    await page.goto('https://www.letskodeit.com/practice')
    await expect(page).toHaveTitle('Practice Page')
    await page.getByText('PRACTICE', { exact: true }).click();
    


})