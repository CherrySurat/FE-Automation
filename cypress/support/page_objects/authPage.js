function emailInfo(email, password) {
  //User's Email
  cy.get('input[name=email]')
    .should('be.visible')
    .should('be.enabled')
    .type(email)

  //Uer's Password
  cy.get('input[name=password]')
    .should('be.visible')
    .should('be.enabled')
    .type(password)
}
function phoneInfo(countryCode, phoneNumb) {
  //User's Code country
  cy.get('form select').select(countryCode)

  //User's Phone number
  cy.get('input[name=phone]')
    .type(phoneNumb)

}
function submitLoginByEmail() {
  cy.get('[data-cy=auth__login__email__button]').click()
}
function submitLoginByPhone() {
  cy.get('[data-cy="auth__login__phone__button"]').click()
}

export class AuthePage {

  logInBy(authMethod) {

    cy.get('[data-cy="auth__login__menu"]').click()
    cy.contains('button', authMethod).click()
    cy.get('div#modal').then(panel => {
      const authMethodEle = panel.find('[class="jsx-3178606681 tabs__item selected"] > span').text()
      // validate auth method
      if (authMethod == 'Email') {
        expect(authMethodEle).to.equal('Email')
        emailInfo("screenpomelo009@gmail.com", "Pomelo1857$")
        submitLoginByEmail()

      } else if (authMethod == 'Phone') {
        cy.wrap(panel).contains('button', authMethod).click()
        expect(authMethodEle).to.equal('Phone')
        cy.wrap(panel)
        phoneInfo('66', '999496697')
        submitLoginByPhone()

      }



    })

  }
}
export const authen = new AuthePage()
