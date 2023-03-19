/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";

describe('write all cases for add new contact', () => {

    beforeEach('', () => {
        cy.login('tester.go2019@gmail.com', '12345Admin!');
        cy.contact();
    })

    // Go to Add New Contact function
    it('add new contact success', () => {
        cy.get('#open-new-contract').click();
        cy.get('#first-name-input').type('Selina Demo Cypress');
        //cy.get('#dob + input').click();
        cy.get('#dob + input').type('29/08/1997');
        cy.get('#new-contact-form .form-check').contains('Female').click();
        cy.get('#email-input').type(`selina.cypressdemo${Date.now()}@mailinator.com`);
        cy.get('#mobile-number-input').type(`09564${Date.now() % 999}`);
        cy.get('.action').contains('Save Contact').click();
        cy.get('.alert').should('have.text', 'Created client successfully');
        // Back to Contact List
        cy.get('.back-link > a').contains('Back to Contact List').click();
    })

    it('add new contact with First Name is blank', () => {
        cy.get('#open-new-contract').click();
        cy.get('.action').contains('Save Contact').click();
        cy.get('#first-name-input + .invalid-feedback').should('have.text', 'This is a compulsory field');
    })

    it('DOB is blank', () => {
        cy.get('#open-new-contract').click();
        cy.get('#first-name-input').type('Selina Demo Cypress');
        cy.get('.action').contains('Save Contact').click();
        cy.get('#dob ~ .invalid-feedback').should('have.text', 'This is a compulsory field');
    })

    it('add new contact with Email is blank', () => {
        cy.get('#open-new-contract').click();
        cy.get('#first-name-input').type('Selina Demo Cypress');
        cy.get('#dob + input').type('29/08/1997');
        cy.get('#new-contact-form .form-check').contains('Female').click();
        cy.get('.action').contains('Save Contact').click();
        cy.get('#email-input + .invalid-feedback').should('have.text', 'Email has already been taken or User already exist and is tagged under someone else');
    })

    it('add new contact with Phone is blank', () => {
        cy.get('#open-new-contract').click();
        cy.get('#first-name-input').type('Selina Demo Cypress');
        cy.get('#dob + input').type('29/08/1997');
        cy.get('#new-contact-form .form-check').contains('Female').click();
        cy.get('#email-input').type(`selina.cypressdemo${Date.now()}@mailinator.com`);
        cy.get('.action').contains('Save Contact').click();
        cy.get('#mobile-number-input + .invalid-feedback').should('have.text', 'Enter a 8 digits number');
    })

})