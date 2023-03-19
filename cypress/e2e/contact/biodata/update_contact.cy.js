/// <reference types="cypress" />

describe('update contact', () => {

    beforeEach('', () => {
        cy.login('tester.go2019@gmail.com', '12345Admin!');
        cy.contact();
    })

    it('edit contact success', () => {
        cy.get('tbody>tr').eq(1).click();
        cy.wait(500);
        cy.get('.navbar-nav > .nav-item').last().click();
        cy.get('#open-biodata-form').click();
        cy.get('#client_first_name').clear();
        cy.get('#client_first_name').type('Update First Name By Cypress');
        cy.get('#biodata-form input[type=submit]').click();
        cy.get('.page-content > .alert').should('have.text', 'Updated client successfully');
    })

    it('edit contact with first name is blank', () => {
        cy.get('tbody>tr').eq(1).click();
        cy.get('.navbar-nav > .nav-item').last().click();
        cy.get('#open-biodata-form').click();
        cy.get('#client_first_name').clear();
        cy.get('#biodata-form input[type=submit]').click();
        cy.get('#client_first_name + .invalid-feedback').should('have.text', 'This is a compulsory field');
    })

})