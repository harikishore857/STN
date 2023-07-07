/// <reference types="Cypress" />


export default class loginFormPage {

  static fillForm({username, password}) {
    cy.get('#content-area-login-form > :nth-child(1) > .form-control')
      .type(username)
    cy.get('#content-area-login-form > :nth-child(2) > .form-control')
      .type(password)
  }

  static submitForm() {
    cy.get('button').contains('Sign In').click({force: true})
  }

  static validateError() {
    cy.contains('These credentials do not match our records.').should('be.visible')
  }

}
