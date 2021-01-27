Feature('ChangeLocation');

Scenario('ChangeLocation', async ({ I, homePage, locationPage }) => {
    I.amOnPage(homePage.urls.homePage);
    I.click(homePage.buttons.geolink);
    let location = locationPage.sendForm('Лондон');
    I.see(location);
    I.click(homePage.buttons.more);
    I.click(homePage.buttons.closeMore);

    I.click(homePage.buttons.geolink);
    location = locationPage.sendForm('Париж');
    I.see(location);
    I.click(homePage.buttons.more);
    I.wait(2);
    I.click(homePage.buttons.closeMore);

//добавить сравнение

});

