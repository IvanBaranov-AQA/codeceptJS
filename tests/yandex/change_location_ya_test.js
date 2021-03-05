const assert = require('assert'); // или это
const expect = require('expect'); // или то
Feature('ChangeLocation');
Scenario('ChangeLocation', async ({ I, homePage, locationPage }) => {
    I.amOnPage(homePage.urls.homePage);
    I.click(homePage.buttons.geolink);
    I.click(locationPage.checkAuto);
    homePage.checkLocation('Лондон');
    const moreForTown1 = await homePage.sendMoreForCity();
    I.click(homePage.buttons.geolink);
    homePage.checkLocation('Париж');
    const moreForTown2 = await homePage.sendMoreForCity();
    expect(moreForTown1).toEqual(moreForTown2); // или это
    assert.strictEqual(moreForTown1, moreForTown2); // или то
});

