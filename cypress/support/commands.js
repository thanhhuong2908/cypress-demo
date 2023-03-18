// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Command for login
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://staging.iammerlin.co/users/sign_in');
    cy.get('#user_email').type(email);
    cy.get('#user_password').type(password);
    cy.get('.form-actions').click();
    cy.get('.close-overlay-btn').click();
    cy.url().should('include', 'https://staging.iammerlin.co/consultant');
})
// Command for Contact
Cypress.Commands.add('contact', () => {
    cy.get('#clients-sidenav-icon').click();
    cy.url().should('include', 'https://staging.iammerlin.co/consultant/all_people');
    cy.wait(1000);
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })