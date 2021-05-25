/// <reference types="Cypress" />
import Pomelo_CSSlocators from '../Pomelo_Pageobjects/Pomelo_CSSlocators'

class Pomelo_LoginPage

{
  static launchPreprodURL()
  {
      cy.launchPreprodURL(a)
  }


  static checkPageTitle(element)
  {
    cy.titlecheck(element)
  }

  static checkLoginTitle(element)
  {
    cy.titlecheck(element)
  }

  static  erromessageCheck(elementtext)
  {
      cy.erromessagecheck(elementtext)
  }

  static enterEmailid(element,email)
  {
      cy.get(element).type(email)
  }
   
  static enterPassword(element,password)
  {
      cy.get(element).type(password)
  }

  static clickonlogin(elemnt)
  {
      cy.get(elemnt).click()
  }


}

export default Pomelo_LoginPage