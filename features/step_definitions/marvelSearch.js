const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { should } = require('chai');

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the home page', async function () {
    await driver.get('http://localhost:3000');
});

When('I search for {string}', async function (searchTerm) {
    const element = await driver.findElement(By.id('searchInput'));
    element.sendKeys(searchTerm, Key.RETURN);
    element.click();
});

Then('the page title should be {string}', async function (searchTerm) {
    const title = await driver.getTitle();
    should();
    title.should.equal(searchTerm   );
});

AfterAll(async function(){
    await driver.quit();
});