const { I } = inject();

module.exports = {

    // setting locators
    buttons: {
        field: '[class="button select__button button_theme_normal button_arrow_down button_size_m i-bem button_js_inited"]',
        option: '[class="select__control"]',
        choiceOption: '[class="button__text"]',
        submit: '[type="submit"]',
    },


// introducing methods
    changeLang(option) {
        I.click(this.buttons.field);
        I.selectOption(this.buttons.option, option);
        I.click(this.buttons.choiceOption);
        I.click(this.buttons.submit);
        return option;
    },


};