Feature('LoginEmail');

Scenario.only('StepOfRegistration', async ({ I }) => {
    I.amOnPage('https://yandex.by');
    I.see('Войти в почту');
   // I.wait(5);
  //  I.waitForVisible('//a[@class=\'button desk-notif-card__login-enter-expanded button_theme_gray i-bem button_js_inited\']',20);
  //  I.click('//a[@class=\'button desk-notif-card__login-enter-expanded button_theme_gray i-bem button_js_inited\']');




    //полный локатор Войти //a[@class='button desk-notif-card__login-enter-expanded button_theme_gray i-bem button_js_inited']/span[@class='button__text']

   /* I.click('//span[text()=\'Войти\']');
    I.seeElement('.passp-auth-content');
    I.click('//div[@class=\'passp-button passp-exp-register-button\']/a[@data-t="button:pseudo"]');
    I.fillField('#firstname','Иван');
    I.fillField('#lastname','Иванов');
    I.fillField('#login','iiiii22iiii');
    I.fillField('#password','ErtYWec2231');
    I.fillField('#password_confirm','ErtYWec2231');
    I.click('//div[@class=\'toggle-link link_has-no-phone\']/span');
    I.selectOption('[name=\'hint_question_id\']', '15');*/
    //   I.seeInField('')
    //I.fillField({CSS:'[for="hint_answer"]'}, 'lexus');
    //I.fillField({CSS: '[name="hint_question_id"]'},'Kia');

    I.wait(1);

});