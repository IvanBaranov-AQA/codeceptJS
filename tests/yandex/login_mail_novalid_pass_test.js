Feature('LoginNoValidPass');

Scenario.skip('LoginNoValidPass', async ({ I, homePage, loginPage }) => {
    I.amOnPage(homePage.urls.homePage);
    I.click(homePage.buttons.enterInMail);
    I.switchToNextTab();
    loginPage.sendForm('AutotestLogin','NoAutotestPassword');
    I.seeElement(loginPage.fields.errorPassword);
    // I.seeElement(loginPage.fields.captchaErrorPassword);
    I.wait(2);
    I.seeInCurrentUrl('/auth')
});