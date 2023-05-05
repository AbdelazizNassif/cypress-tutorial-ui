/// <reference types="Cypress" />


context('my network request' , () => {
    

    beforeEach( ()=> {
        cy.fixture('example').then( function (data)  {
            this.data = data;
        })
    })

    it('uses fixtures data in network requests' , function() {
        cy.visit(Cypress.env('url') + "/commands/network-requests")
        cy.intercept('GET', '**/comments/*').as('getComment');
        cy.get('.network-btn').click();
        cy.wait('@getComment').then((res) => {
            cy.log("*******" + res)
        })
    })



})