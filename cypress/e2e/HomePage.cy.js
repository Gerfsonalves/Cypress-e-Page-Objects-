import HomePage from '../support/PageObjects/HomePage.PageObjects'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://todomvc.datasette.io/#/')
    HomePage.inputText()
  })
})