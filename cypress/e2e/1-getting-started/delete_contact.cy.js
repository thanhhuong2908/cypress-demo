/// <reference types="cypress" />

//const cypress = require("cypress");

describe('update contact', () => {

    beforeEach('', () => {
        cy.login('tester.go2019@gmail.com', '12345Admin!');
        cy.contact();
    })

    it('delete contact success', () => {
        cy.get('tbody>tr').eq(1).click();
        cy.wait(500);
        cy.get('.navbar-nav > .nav-item').last().click();
        //cy.get('#open-biodata-form').click();
        //cy.get('#client_first_name').clear();
        //cy.get('#client_first_name').type('Update First Name By Cypress');
        cy.get('.btn-remove').click();
        cy.wait(1000);
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('Are you sure to delete this contact?');
          });
          cy.url().should('include', 'https://staging.iammerlin.co/consultant/clients');
    })

    it('delete contact success', () => {
        cy.get('tbody>tr').eq(1).click();
        cy.wait(500);
        cy.get('.navbar-nav > .nav-item').last().click();
        //cy.get('#open-biodata-form').click();
        //cy.get('#client_first_name').clear();
        //cy.get('#client_first_name').type('Update First Name By Cypress');
        cy.get('.btn-remove').click();
        cy.wait(1000);
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('Are you sure to delete this contact?');
            return false;
          });
        cy.url().should('include', `https://staging.iammerlin.co/consultant/clients/2811/biodata`);
        // const href = cy.get('#open-biodata-form').first().then(ele => ele.attr('href'));
        // cy.log(href);
        // //   const pathname = window.location.pathname;
        // const id = href.substring(href.lastIndexOf("/consutant/clients/")+21, href.lastIndexOf("/biodata"))
        // //   console.log(id)
        // 
        
    })
})