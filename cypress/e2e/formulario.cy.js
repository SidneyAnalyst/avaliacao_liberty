///<reference types= "cypress"/>
const { describe } = require("mocha");
// funcionalidade
describe("formulário", ()=>{

//cenários
it("Login com Sucesso" , ()=> {

    //Given
    //estou na aplicação, na tela de formulário
    cy.visit('https://demoqa.com/automation-practice-form/')
    
    //And preencho o campo First Name com Sidney
    cy.get("firstName").type("Sidney")
    //And preencho o campo Last Name 
    cy.get("firstName").type("Silva")
    //And preencho o campo Email 
    cy.get("userEmail").type("figsidney@gmail.com")
    //And seleciono a opção custom-control-label
    cy.get("Gender").select("custom-control-label")    
    //And preencho o campo userNumber
    cy.get("userNumber").type("11963313831")
    //And preencho



})