Feature('ChangeLocation');

Scenario.only('StepOfRegistration', ({ I }) => {
    I.amOnPage('https://yandex.by');
    //pause();
    I.click('.geolink__reg');
    I.fillField('.input__control','Лондон');
    I.click('.b-autocomplete-item__reg');
    I.see('Лондон');
    I.click('//a[@href=\'https://yandex.ru/all\']/div[@class=\'services-new__item-title\']');
    I.wait(2);
    I.click('//div[@class=\'services-new__more-popup-content\']/div[@class="services-new__more-popup-close"]');
    I.click('.geolink__reg');
    I.fillField('.input__control','Париж');
    I.click('.b-autocomplete-item__reg');
    I.see('Париж');
    I.click('//a[@href=\'https://yandex.ru/all\']/div[@class=\'services-new__item-title\']');
    I.click('//div[@class=\'services-new__more-popup-content\']/div[@class="services-new__more-popup-close"]');
    I.wait(2);
});