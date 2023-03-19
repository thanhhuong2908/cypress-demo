/// <reference types="cypress" />

describe('write all cases for add new main income', () => {

    beforeEach('', () => {
        cy.login('tester.go2019@gmail.com', '12345Admin!');
        cy.contact();
    })

    it('add new income success', () => {
        cy.get('tbody>tr').eq(1).click();
        cy.wait(1000);
        cy.get('.navbar-nav > .nav-item').contains('Cashflow').click();
        cy.wait(1000);
        cy.scrollTo(0, 500);
        cy.wait(500);
        cy.get('.main-incomes > .income-items > .empty-items > .btn').click();
        cy.wait(1000);
        cy.get('.asset-logo').eq(0).click();
        cy.get('#income_company_name').type('Gross Salary');
        cy.get('#income_income_amount').type('4000');
        cy.get('#select2-income_income_interval_type-container').click();
        cy.wait(1000);
        cy.get('#select2-income_income_interval_type-results > li').first().click();
        cy.wait(1000);
        cy.get('.main-salary-income-form > #new_income > .modal-footer > .btn').click();
        cy.get('.page-content > .alert').should('have.text', 'Created income successfully');
    })

    it('add the second income success', () => {
        cy.get('tbody>tr').eq(1).click();
        cy.wait(1000);
        cy.get('.navbar-nav > .nav-item').contains('Cashflow').click();
        cy.wait(1000);
        cy.scrollTo(0, 500);
        cy.wait(500);
        cy.get('.add-income-button > .btn').click();
        cy.wait(1000);
        cy.get('.asset-logo').eq(0).click();
        cy.get('#income_company_name').type('Gross Salary 2');
        cy.get('#income_income_amount').type('4000');
        cy.get('#select2-income_income_interval_type-container').click();
        cy.wait(1000);
        cy.get('#select2-income_income_interval_type-results > li').first().click();
        cy.wait(1000);
        cy.get('.main-salary-income-form > #new_income > .modal-footer > .btn').click();
        cy.get('.page-content > .alert').should('have.text', 'Created income successfully');
    })

    it('add new income with Company Name is blank', () => {
        cy.get('tbody>tr').eq(1).click();
        cy.wait(1000);
        cy.get('.navbar-nav > .nav-item').contains('Cashflow').click();
        cy.wait(1000);
        cy.scrollTo(0, 500);
        cy.wait(500);
        cy.get('.add-income-button > .btn').click();
        cy.wait(1000);
        cy.get('.asset-logo').eq(0).click();
        cy.get('.main-salary-income-form > #new_income > .modal-footer > .btn').click();
        cy.get('#income_company_name + .invalid-feedback').should('have.text', 'This is a compulsory field');
    })

    it('add new income with Interval Type is blank', () => {
        cy.get('tbody>tr').eq(1).click();
        cy.wait(1000);
        cy.get('.navbar-nav > .nav-item').contains('Cashflow').click();
        cy.wait(1000);
        cy.scrollTo(0, 500);
        cy.wait(500);
        cy.get('.add-income-button > .btn').click();
        cy.wait(1000);
        cy.get('.asset-logo').eq(0).click();
        cy.get('#income_company_name').type('Gross Salary 2');
        cy.get('#income_income_amount').type('4000');
        cy.get('.main-salary-income-form > #new_income > .modal-footer > .btn').click();
        cy.wait(1000);
        cy.get('.form-group > .invalid-feedback').should('have.text', 'This is a compulsory fieldThis is a compulsory field');
    })
})