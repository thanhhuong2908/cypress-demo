/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";

describe('add new contact', () => {

    beforeEach('', () => {
        cy.login('tester.go2019@gmail.com', '12345Admin!');
        cy.contact();
    })

    // Go to Edit Contact function
    it.only('edit contact success', () => {
        cy.get('tbody>tr').eq(1).click();
        cy.get('.navbar-nav > .nav-item').last().click();
        cy.get('#open-biodata-form').click();
        cy.get('#biodata-form input[type=submit]').click();
    })


})