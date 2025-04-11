///<reference types= "cypress"/>
const { describe } = require("mocha");

// funcionalidade
describe("Login", ()=>{    

//cenários
it("Login com Sucesso" , ()=> {
    //Given
    //estou na aplicação, na tela de login
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    //And preencho o campo Username com o usuário: student
    cy.get("username").type("student")
    //And preencho o campo Password com a senha: Password123
    cy.get("password").type("Password123")

    //When
    //clico no botão Submit
    cy.get("submit").click

    //Then 
    //deve ser exibida a mensagem "Logged In Successfully"});
    cy.get("Logged In Successfully").should.('bevisibe')
})


//cenários
it("Logout com Sucesso" , ()=> {
    //Given
    //estou na logado na aplicação
    cy.visit('https://practicetestautomation.com/logged-in-successfully/')

    //When
    //clico no botão Logout
    cy.get("Log out").click

    //Then 
    //deve ser exibida a mensagem "Test login"});
})

//cenários
it("Login inválido com usuário invalido e senha correta" , ()=> {
    //Given
    //estou na aplicação, na tela de login
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    //And preencho o campo Username com o usuário sidney
    cy.get("username").type("sidney")

    //And preencho o campo Password com a senha : Password123
    cy.get("password").type("Password123")

    //When
    //clico no botão Submit
    cy.get("submit").click

    //Then 
    //deve ser exibida a mensagem "Your username is invalid!"});
    })

//cenários
it("Login inválido com usuário correto e senha inválida" , ()=> {
    //Given
    //estou na aplicação, na tela de login
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    //And preencho o campo Username com o usuário student
    cy.get("username").type("student")
    //And preencho o campo Password com a senha : Password1234
    cy.get("Password").type("Password1234")
    //When
    //clico no botão Submit
    cy.get("submit").click
    //Then 
    //deve ser exibida a mensagem "Your password is invalid!"});
    
})

});