Feature('LoginEmail');

Scenario.skip('Login', async ({ I, homePage, loginPage, mailHomePage }) => {
    await I.amOnPage(homePage.urls.homePage);
    await I.see('Войти в почту');
    await I.click(homePage.buttons.enterInMail);
    await I.switchToNextTab();
    await loginPage.sendForm('AutotestLogin','autotestPassword123');
    await I.see('AutotestLogin', mailHomePage.userButton);
});
