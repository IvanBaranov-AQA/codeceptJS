const { I } = inject();

module.exports = {

    // setting locators
    fields: {
        location: '.input__control',
    },

    submitButton: '.b-autocomplete-item__reg',
// introducing methods
    sendForm(location) {
        I.fillField(this.fields.location, location);
        I.click(this.submitButton);
        return location;
    },

   // let loc = sendForm();
};
