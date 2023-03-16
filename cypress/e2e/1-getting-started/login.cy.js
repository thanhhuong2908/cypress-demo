/// <reference types="cypress" />

//import { contains } from "cypress/types/jquery";

describe('login to the FC account', () => {

    beforeEach('', () => {
        // cy.login('tester.go2019@gmail.com', '12345Admin!');
    })

    before('', () => {
        cy.login('tester.go2019@gmail.com', '12345Admin!');
        cy.contact();
    })

})