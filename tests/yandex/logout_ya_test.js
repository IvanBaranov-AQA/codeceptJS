Feature('LogoutEmail');

Scenario.skip('Login', async ({ I, homePage, loginPage, mailHomePage }) => {
    I.amOnPage(homePage.urls.homePage);
    I.click(homePage.buttons.enterInMail);
    I.switchToNextTab();
    loginPage.sendForm('AutotestLogin','autotestPassword123');
    I.see('AutotestLogin', mailHomePage.userButton);
    I.click(mailHomePage.userButton);
    I.click(mailHomePage.logOutButton);
    I.seeInCurrentUrl('/auth');
});