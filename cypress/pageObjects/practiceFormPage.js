import BasePage from "./basePage";

class PracticeFormPage extends BasePage{

    static get url (){
        return '/automation-practice-form';
    }

    static get firstNameInput () {
        return cy.get('input#firstName');
    }

    static get lastNameInput () {
        return cy.get('input#lastName');
    }

    static get emailInput () {
        return cy.get('input#userEmail');
    }

    static get radioButtonInput () {
        return cy.get("label[for='gender-radio-1']");
    }

    static get userNumberInput () {
        return cy.get('input#userNumber');
    }

    static get birthDateInput () {
        return cy.get("#dateOfBirthInput");
    }

    static get dateMonthSelect() {
        return cy.get(".react-datepicker__month-dropdown-container--select>select");
    }
    
    static get dateYearSelect() {
        return cy.get(".react-datepicker__year-dropdown-container--select>select");
    }

    static get dateDaySelect() {
        return cy.get(".react-datepicker__day[aria-label='Choose Friday, February 28th, 1930']");
    }

    static get subjectInput() {
        return cy.get("#subjectsInput");
    }

    static get subjectSelect() {
        return cy.get("[aria-label='subjects-auto-complete__menu']");
    }

    static get hobbiesSelect() {
        return cy.get("#hobbiesWrapper");
    }

    static get uploadPictureInput() {
        return cy.get("#uploadPicture");
    }

    static get currentAddressInput() {
        return cy.get("#currentAddress");
    }

    static get stateAndCitySelect() {
        return cy.get("#stateCity-wrapper > div > div > div");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static validateInformation(value) {
        return cy.get("tbody > tr > td");
    }
}

export default PracticeFormPage;