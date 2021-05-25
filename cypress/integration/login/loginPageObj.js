import { authen } from "../../support/page_objects/authPage"

describe('Login Page Object', () => {

  beforeEach('Land to main page', () => {
    cy.visit('/')
  })

  it('login by Email', () => {
    authen.logInBy('Email')
  })

  it('login by Phone number', () => {
    authen.logInBy('Phone')
  })
})
