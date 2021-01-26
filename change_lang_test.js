Feature('Navigation');

Scenario.only('Navigation', ({ I }) => {
    I.amOnPage('https://yandex.by');
    I.click('[class="home-link i-bem dropdown2__switcher home-link_black_yes"]');
    I.wait(1);
    I.click('[data-statlog="head.lang.more"]');
    I.wait(2);
    I.click('[class="button select__button button_theme_normal button_arrow_down button_size_m i-bem button_js_inited"]');
    I.selectOption('[class="select__control"]', 'be');
    I.click('[class="button__text"]');
    I.click('[type="submit"]');
    I.see('Bel')
    I.wait(5);
   });