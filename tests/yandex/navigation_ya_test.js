Feature('Navigation');

Scenario('StepNavigation', ({ I }) => {
    I.amOnPage('https://yandex.by');
    I.click('[data-id=\'video\']');
    I.wait(1);
    I.click('[data-id=\'images\']');
    I.wait(1);
    I.click('[data-id=\'news\']');
    I.wait(1);
    I.click('[data-id=\'maps\']');
    I.wait(1);
    I.click('[data-id=\'market\']');
    I.wait(1);
    I.click('[data-id=\'music\']');
    I.wait(3);
});
//const data = ['video', 'images', 'news', 'maps', 'market', 'music'];