Feature('LogoutEmail');

Scenario('Login', async ({ I, homePage, loginPage, mailHomePage }) => {
    I.amOnPage(homePage.urls.homePage);
    I.see('Войти в почту');
    I.click(homePage.buttons.enterInMail);
    I.switchToNextTab();
    loginPage.sendForm('AutotestLogin','autotestPassword123');
    I.waitForVisible(mailHomePage.userInit,10);
    I.see('AutotestLogin',mailHomePage.userInit);
    I.click(mailHomePage.userButton);
    I.click(mailHomePage.logOutButton);
    I.seeInCurrentUrl('/auth');
});