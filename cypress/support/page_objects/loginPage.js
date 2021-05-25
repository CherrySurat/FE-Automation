function emailMethod(email, password) {
  //User's Email
  cy.get('input[name=email]')
    .should('be.visible')
    .should('be.enabled')
    .type("screenpomelo009@gmail.com")

  //Uer's Password
  cy.get('input[name=password]')
    .should('be.visible')
    .should('be.enabled')
    .type("Pomelo1857$")
}

function phoneMethod(countryCode, phone) {

}
export class LoginPage {

  byEmail() {

    cy.get('[data-cy="auth__login__menu"]').click()
    cy.get('div#modal').then(panel => {
      cy.wrap(panel).find('.backdrop-modal__wrapper .jsx-2171814334 .jsx-2171814334 .jsx-3178606681')
        .invoke('attr', 'class')
        .then(attr => {
          // if (attr.includes('selected')) {
          cy.wrap(attr)
            //.parents('.jsx-2171814334')
            //     //.get('form')
            .get('input[name=email]')
            .should('be.visible')
            .should('be.enabled')
            .type("screenpomelo009@gmail.com")

          cy.wrap(attr)
          cy.get('input[name=password]')
            .should('be.visible')
            .should('be.enabled')
            .type("Pomelo1857$")

          //    }
        })

    })
    // cy.get('input[name=email]')

    // cy.contains('div', 'Log In')
    //   .then(logInForm => {
    //     const emailLable = logInForm.find('[for="Email"]').text()
    //     const passwordLable = logInForm.find('[for="Password"]').text()

    //     expect(emailLable).to.equal('Email')
    //     expect(passwordLable).to.equal('Password')




    //     cy.get('[data-cy=auth__login__email__button]').click()
    //   })
  }
}
export const login = new LoginPage()
