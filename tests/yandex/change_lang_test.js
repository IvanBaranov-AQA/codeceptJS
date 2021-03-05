Feature('ChangeLang');

Scenario.only('ChangeLang', ({ I, homePage, langPage}) => {
    I.amOnPage(homePage.urls.homePage);
    I.click(homePage.buttons.lang);
    I.click(homePage.buttons.moreLang);
    langPage.changeLang('be');
    I.see('Bel', homePage.buttons.lang);
});