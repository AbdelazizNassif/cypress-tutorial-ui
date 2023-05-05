/// <reference types="Cypress" />


context('my first test file' , () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env('url') + '/commands/actions')
    })

    it('has an h1 on the page' , ()=> {
        cy.get('h1').should('exist')
    })
    it('renders h1 text correctly' , ()=> {
        cy.get('h1').should('contain.text' , 'Actions')
    })
    it('renders the paragraphs h1 text correctly' , ()=> {
        cy.xpath('//h1[text()="Actions"]').should('exist')
        cy.get('.banner .container').find('p').should('exist')
        .should('contain.text', 'Examples of actions being performed on DOM elements in Cypress, for a full reference of commands, go to docs.cypress.io' )
    })
    it('type email in email field' , ()=> {
        cy.get('#email1').type("abdelaziz@email.com");
        cy.wait(5000).then( ()=> {
            console.log('test is finished')
        })
    })
    it('Assert on active element' , ()=> {
        cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active');
        cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active')
        .find('a').should('have.attr' , 'href' , "/commands/querying")
    })

    it('Assert on active element' , ()=> {
        cy.visit(Cypress.env('url'))
        cy.xpath("//ul[@class='home-list']//a[text()='Actions']").click()
        cy.url().should('include' , 'actions')
    })

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