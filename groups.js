it.skip('AT_031.001 | Sign in > Account Dropdown Menu > After cliking the "logout" button the message appears', () => {
  cy.visit('https://openweathermap.org/')
  cy.get('li[class="user-li"] a[href$="sign_in"]').click()
  cy.get('#user_email').type('3065606@gmail.com')
  cy.get('#user_password.form-control').type('Qwerty1234')
  cy.get('[value="Submit"]').click({force: true})
  cy.get('#desktop-menu #user-dropdown .inner-user-container').click({force: true})
  cy.get('.dropdown-menu [href*="/sign_out"]').click({force: true})
  cy.get('.panel-body').should('have.text', 'You need to sign in or sign up before continuing.');
})
it('AT_045.001 | Main page > Section with 8-day forecast>See the weather forecast for 8 days', () => {
  cy.visit('https://openweathermap.org');
  cy.get('ul.day-list').should('have.length', 8)
});
it.skip('AT_045.002 | Main page > Section with 8-day forecast>See the detailed weather forecast for each day.', () => {
  cy.visit('https://openweathermap.org');
  cy.get('ul.day-list')
  
});