/// <reference types="Cypress" />


export default class homePage {

  static navigateToLogin() {
    cy.get('a').contains('SIGN IN!').click({force: true})
  }

}
