
/// <reference types="Cypress" />

import { includes } from "cypress/types/lodash"

class AboutUSpage

{
 static verifytitle(Pagetitle)
   {
    cy.title().should('eq', Pagetitle)
    cy.log(Pagetitle)
    return Pagetitle

   } 

   static VerifyURL(PageUrl)
   {
     cy.url().should(includes ,PageUrl)
     return PageUrl
   }

   static PageContent(
       
   )
}

export default AboutUSpage