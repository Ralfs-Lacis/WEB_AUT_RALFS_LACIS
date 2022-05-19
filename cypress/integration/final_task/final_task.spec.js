import PracticeFormPage from "../../pageObjects/PracticeFormPage";


context("Form page", () => {

    context("Practise form page", () => {
        beforeEach(() => {
            PracticeFormPage.visit();
        });

        it("Filling in form", () => {
            cy.fixture('practiceFormData').then(data => {

                //Write name and surname
                PracticeFormPage.firstNameInput.type(data.firstName);
                PracticeFormPage.lastNameInput.type(data.lastName);
				
				//Write email
                PracticeFormPage.emailInput.type(data.email);

                //Click gender radio button
                PracticeFormPage.radioButtonInput.type(data.gender).click();

                //Writes users mobile number
                PracticeFormPage.userNumberInput.type(data.mobileNumber);

                //Select date of birth
                PracticeFormPage.birthDateInput.click();
                PracticeFormPage.dateMonthSelect.select(data.dateMonth);
                PracticeFormPage.dateYearSelect.select(data.dateYear);
                PracticeFormPage.dateDaySelect.click();

                //Select subject
                PracticeFormPage.subjectInput.type(data.subject).type("{enter}");


                //Select hobbie
                PracticeFormPage.hobbiesSelect.contains(data.hobbie).click();


                //Select and upload image
                PracticeFormPage.uploadPictureInput.selectFile("cypress/files/" + data.image);

                //Write current address
                PracticeFormPage.currentAddressInput.type(data.currentAddress);

                // Select state
                PracticeFormPage.stateAndCitySelect.contains("Select State").click();
                PracticeFormPage.stateAndCitySelect.contains(data.state).click();


                //Select city
                PracticeFormPage.stateAndCitySelect.contains("Select City").click();
                PracticeFormPage.stateAndCitySelect.contains(data.city).click();

                //Click submit
                PracticeFormPage.submitButton.click();

                //Form data validation
                PracticeFormPage.validateInformation("Student Name").should("contain", "Ralfs Lācis");
                PracticeFormPage.validateInformation("Student Email").should("contain", "randomEmail123@gmail.com");
                PracticeFormPage.validateInformation("Gender").should("contain", "Male");
                PracticeFormPage.validateInformation("Mobile").should("contain", "1234567890");
                PracticeFormPage.validateInformation("Date of Birth").should("contain", "28 February,1930");
                PracticeFormPage.validateInformation("Subjects").should("contain", "Economics");
                PracticeFormPage.validateInformation("Hobbies").should("contain", "Music");
                PracticeFormPage.validateInformation("Picture").should("contain", "image.jpg");
                PracticeFormPage.validateInformation("Address").should("contain", "Noida Mor, Pandav Nagar, New Delhi, Delhi 110092, India");
                PracticeFormPage.validateInformation("State and City").should("contain", "NCR Delhi");
                
            });
        });

    });
});