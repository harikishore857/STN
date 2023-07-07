/// <reference types="cypress" />

  describe('Validate Landing Page', function() {

    const menu = [
      'Home', 
      'Publisher', 
      'Content creator', 
      'Advertiser', 
      'About', 
      'Blog', 
      'Press', 
      'Contact'
    ]

    beforeEach(function()  {
      cy.visit('/')
    })

    it('Validate menu items - ipad', function() {
      cy.viewport(820, 1180)
      cy.get('.wp-block-navigation__responsive-container-open').eq(1).click()
      menu.forEach((item) => {
        cy.get('#modal-18-content').within(() => {
          cy.contains(item).should('be.visible')
        })
      })
    })

    it('Validate menu items - web app', function() {
      menu.forEach((item) => {
        cy.contains(item).should('be.visible')
      })
    })

  })

  

