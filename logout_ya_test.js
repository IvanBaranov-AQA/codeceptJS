Feature('LoginEmail');

Scenario.only('StepOfRegistration', async ({ I }) => {
    I.amOnPage('https://yandex.by');
    I.see('Войти в почту');
    I.click('//span[text()=\'Войти в почту\']');
   // I.click('[for="passp-field-login"]');
    I.wait(2);
    I.fillField('#passp-field-login','AutotestLogin');
    I.click('[type="submit"]');
    I.fillField('#passp-field-passwd', 'autotestPassword123');
    I.click('[type="submit"]');
    I.see('//span[text()=\'AutotestLogin\']')
});