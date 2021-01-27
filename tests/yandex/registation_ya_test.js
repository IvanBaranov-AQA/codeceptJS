Feature('Registration');

Scenario('StepOfRegistration', async ({ I }) => {
    I.amOnPage('https://yandex.ru/news/?utm_source=main_stripe_big');
    I.see('Москва');
    I.seeElement('span.service__name');
    I.seeElement('//span[text()=\'Спорт\']');
    I.click('//span[text()=\'Войти\']');
    I.seeElement('.passp-auth-content');
    I.click('//div[@class=\'passp-button passp-exp-register-button\']/a[@data-t="button:pseudo"]');
    I.fillField('#firstname','Иван');
    I.fillField('#lastname','Иванов');
    I.fillField('#login','iiiii22iiii');
    I.fillField('#password','ErtYWec2231');
    I.fillField('#password_confirm','ErtYWec2231');
    I.click('//div[@class=\'toggle-link link_has-no-phone\']/span');
   I.selectOption('[name=\'hint_question_id\']', '15');
 //   I.seeInField('')
 //I.fillField({CSS:'[for="hint_answer"]'}, 'lexus');
 //I.fillField({CSS: '[name="hint_question_id"]'},'Kia');

    I.wait(2);

});