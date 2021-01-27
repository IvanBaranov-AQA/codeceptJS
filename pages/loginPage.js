const { I } = inject();

module.exports = {

    // setting locators
    fields: {
        login: '#passp-field-login',
        password: '#passp-field-passwd',
        errorPassword: '[class="Textinput-Hint Textinput-Hint_state_error"]',
        captchaErrorPassword: '[data-t="field:input-captcha_answer"]',
        errorLogin: '[class="Textinput-Hint Textinput-Hint_state_error"]'
    },

    submitButton: '[type="submit"]',


// introducing methods
    sendForm(email, password) {
        I.fillField(this.fields.login, email);
        I.click(this.submitButton);
        I.waitForEnabled(this.fields.password,10);
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