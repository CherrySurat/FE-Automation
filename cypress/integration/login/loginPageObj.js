import { login } from "../../support/page_objects/loginPage"

describe('Login Page Object', () => {

  beforeEach('Land to main page', () => {
    cy.visit('/')
  })

  it('login with email and password', () => {
    login.byEmail()
  })
})
