Feature('LoginNoValidLogin');

Scenario('LoginNoValidLogin', async ({ I, homePage, loginPage}) => {
    I.amOnPage(homePage.urls.homePage);
    I.click(homePage.buttons.enterInMail);
    I.switchToNextTab();
    loginPage.wrongLogin('NoAutotestLogin');
    I.seeElement(loginPage.fields.errorLogin);
    I.seeInCurrentUrl('/auth')
});