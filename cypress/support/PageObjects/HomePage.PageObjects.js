const elem = require('../elements/HomePage.elements').elements

class HomePage {

    inputText() {
        cy.get(elem.inputToDo).type("Gerfson").type('{enter}')
    }
}

export default new HomePage();