const { I } = inject();

module.exports = {

    // setting locators
    fields: {
        location: '.input__control',
    },

    submitButton: '[class="popup__items input__popup-items"]',
    checkAuto: '[class="checkbox__control"]',
    list: '//ul[@class="popup__items input__popup-items"]/child::li/div',



// introducing methods
    setLocation(location) {
        I.fillField(this.fields.location, location);
        I.click(this.location(location));
        return location;
    },



    location: (text) => `//div[text()="${text}"]`,

};
