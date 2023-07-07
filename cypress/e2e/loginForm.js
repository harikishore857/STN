/// <reference types="cypress" />

import { homePage, loginFormPage } from '../pages/index'
import { userDetails } from '../fixtures/test_data'

  describe('Validate Sign In From', function() {
    beforeEach(function()  {
      cy.visit('/')
      cy.clearCookies()
    })

    it('Validate unsuccessful sing in - Fill in incorrect credentials', function() {
      homePage.navigateToLogin()
      loginFormPage.fillForm(userDetails)
      loginFormPage.submitForm()
      loginFormPage.validateError()
    })

  })

  

