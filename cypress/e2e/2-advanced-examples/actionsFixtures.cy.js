/// <reference types="Cypress" />


context('my first test file' , () => {
    

    it('pulls data from fixtures' , () => {
        cy.fixture('example' ).then((data) => {
            cy.log(data['email'])
            cy.log(data.email)
            cy.log(data.email)
            cy.log(data.body)

            data.email = "email@update.com"
            cy.log(data.email)
        })
    })

    it('check update' , () => {
        cy.fixture('example' ).then((data) => {

            cy.log(data.email)
        })
    })



})