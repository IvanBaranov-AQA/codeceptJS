const { I } = inject();

module.exports = {

    // setting locators
    fields: {
        login: '#passp-field-login',
        password: '#passp-field-passwd',
        fieldPass: '[class="Link Link_pseudo Link_view_default Link_weight_medium"]',
        errorPassword: '[class="Textinput-Hint Textinput-Hint_state_error"]',
        captchaErrorPassword: '[data-t="field:input-captcha_answer"]',
        errorLogin: '[class="Textinput-Hint Textinput-Hint_state_error"]'
    },

    placeholders: {
      hideLogin: '[data-t="field:label-login"]',
      hidePassword: '[data-t="field:label-passwd"]'
    },

    submitButton: '[type="submit"]',
    eyeButton: '[class="Textinput-Icon Textinput-Icon_side_right Password-toggler Password-toggler_view_floating-label"]',


// introducing methods
    sendForm(email, password) {
        I.fillField(this.fields.login, email);
        I.click(this.submitButton);
        I.fillField(this.fields.password, password);
        I.click(this.submitButton);
    },

    wrongLogin(email) {
        I.fillField(this.fields.login, email);
        I.click(this.submitButton);
        I.waitForEnabled(this.fields.errorLogin,10);
    },

    wrongPassword() {
        I.seeElement(this.fields.errorPassword);
        I.seeElement(this.fields.captchaErrorPassword);
    }
};