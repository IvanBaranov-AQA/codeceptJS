const { I, locationPage  } = inject();
const expect = require('expect')

module.exports = {

    // setting locators
    buttons: {
        enterInMail: '//div[@class="desk-notif-card__login-title"]/following-sibling::a',
        video: '[data-id="video"]',
        images: '[data-id="images"]',
        news: '[data-id="news"]',
        maps: '[data-id="maps"]',
        market: '[data-id="market"]',
        translate: '[data-id="translate"]',
        tv: '[data-id="tv"]',
        music: '[data-id="music"]',
        efir: '[data-id="tvonline"]',
        more: '[data-id="more"]',
        closeMore: '[class="services-new__more-popup-close"]',
        submit: '[type="submit"]',
        geolink: '.geolink__reg',
        lang: '[class="home-link i-bem dropdown2__switcher home-link_black_yes"]',
        moreLang: '[data-statlog="head.lang.more"]',
    },

    urls: {
        homePage: 'https://yandex.by',
        video: '/video',
        images: '/images',
        news: '/news',
        maps: '/maps',
        market: 'market',
        translate: '/translate',
        tv: '/tv',
        music: '/music',
        tvonline: '/efir'
    },

    contentMore: '[class="services-new__more-popup-services"]',

    fieldGeo: (text) => `//span[text()="${text}"]`,

    // introducing methods
    followDataLink(link) {
        I.amOnPage(this.urls.homePage);
        I.click(`[data-id="${link}"`);
        I.switchToNextTab();
        I.seeInCurrentUrl(`${this.urls[link]}`);
        I.closeCurrentTab();
     },

    checkLocation(text) {
        const location = locationPage.setLocation(text);
        I.see(location, this.fieldGeo(location));
    },

    async sendMoreForCity() {
        I.click(this.buttons.more);
        const more = await I.grabTextFrom(this.contentMore);
        I.click(this.buttons.closeMore);
        return more;
    }



};
