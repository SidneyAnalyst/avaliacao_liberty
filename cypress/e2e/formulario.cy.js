///<reference types= "cypress"/>
const { describe } = require("mocha");
// funcionalidade
describe("formulário", ()=>{

    describe('Formulário - Campos Nome e Sobrenome', () => {
        beforeEach(() => {
          // Dado que o usuário acessa a página de formulário
          cy.visit('https://demoqa.com/automation-practice-form');
        });
      
        it('Deve preencher os campos First Name e Last Name', () => {
          // Quando ele preenche os campos First Name e Last Name
          cy.get('#firstName').type('Sidney');
          cy.get('#lastName').type('Figueira');
      
          // Então os campos devem conter os valores "Sidney" e "Figueira"
          cy.get('#firstName').should('have.value', 'Sidney');
          cy.get('#lastName').should('have.value', 'Figueira');
        });

escribe('Formulário - Campo E-mail', () => {
  beforeEach(() => {
    // Dado que o usuário acessa a página de formulário
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Deve preencher o campo E-mail corretamente', () => {
    // Quando ele preenche o campo E-mail
    cy.get('#userEmail').type('figsidney@gmail.com');

    // Então o campo E-mail deve conter o valor "figsidney@gmail.com"
    cy.get('#userEmail').should('have.value', 'figsidney@gmail.com');
  });
});

describe('Formulário - Campo E-mail', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve preencher o campo E-mail corretamente', () => {
      // Quando ele preenche o campo E-mail
      cy.get('#userEmail').type('figsidney@gmail.com');
  
      // Então o campo E-mail deve conter o valor "figsidney@gmail.com"
      cy.get('#userEmail').should('have.value', 'figsidney@gmail.com');
    });
  });

  describe('Formulário - Campo Gender', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve selecionar o gênero Male', () => {
      // Quando ele clica na opção de gênero "Male"
      cy.contains('label', 'Male').click();
  
      // Então o input correspondente deve estar selecionado
      cy.get('input#gender-radio-1').should('be.checked');
    });
  });

  describe('Formulário - Campo Mobile', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve preencher o campo Mobile com 963313831', () => {
      // Quando ele preenche o campo Mobile
      cy.get('#userNumber').type('963313831');
  
      // Então o campo Mobile deve conter o número "963313831"
      cy.get('#userNumber').should('have.value', '963313831');
    });
  });

  describe('Formulário - Campo Date of Birth', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve selecionar a data 11 Apr 2025 no campo Date of Birth', () => {
      // Quando ele abre o calendário
      cy.get('#dateOfBirthInput').click();
  
      // E seleciona o ano
      cy.get('.react-datepicker__year-select').select('2025');
  
      // E seleciona o mês
      cy.get('.react-datepicker__month-select').select('April');
  
      // E seleciona o dia 11
      cy.get('.react-datepicker__day--011:not(.react-datepicker__day--outside-month)').click();
  
      // Então o campo deve conter a data "11 Apr 2025"
      cy.get('#dateOfBirthInput').should('have.value', '11 Apr 2025');
    });
  });


  describe('Formulário - Campo Subjects (corrigido)', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve selecionar a opção "English" após digitar "E"', () => {
      // Quando ele digita a letra "E"
      cy.get('#subjectsInput').type('E');
  
      // E seleciona a opção "English" da lista
      cy.get('.subjects-auto-complete__option').contains('English').click();
  
      // Então o campo deve mostrar a tag "English" selecionada
      cy.get('.subjects-auto-complete__multi-value__label')
        .should('contain.text', 'English');
    });
  });


  describe('Formulário - Campo Hobbies', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve selecionar o hobby Sports', () => {
      // Quando ele clica na opção "Sports"
      cy.contains('label', 'Sports').click();
  
      // Então o checkbox correspondente deve estar marcado
      cy.get('input#hobbies-checkbox-1').should('be.checked');
    });
  });


  describe('Formulário - Campo Upload de Imagem', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve fazer o upload da imagem teste_teste', () => {
      // Quando ele faz upload do arquivo "teste_teste" da pasta Downloads
      const filePath = 'teste_teste'; // o arquivo deve estar em cypress/fixtures
      cy.get('#uploadPicture').attachFile(filePath);
  
      // Então o campo deve mostrar o nome do arquivo
      cy.get('#uploadPicture')
        .should('have.value')
        .and('include', 'teste_teste');
    });
  });


  describe('Formulário - Campo Current Address', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve preencher o campo Current Address com "teste_site_demo"', () => {
      // Quando ele digita o endereço
      cy.get('#currentAddress').type('teste_site_demo');
  
      // Então o campo deve conter o valor digitado
      cy.get('#currentAddress').should('have.value', 'teste_site_demo');
    });
  });


  describe('Formulário - Campos State e City', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve selecionar o estado NCR e a cidade Delhi', () => {
      // Quando ele seleciona o estado NCR
      cy.get('#state').click();
      cy.get('#react-select-3-option-0').click(); // NCR
  
      // E seleciona a cidade Delhi
      cy.get('#city').click();
      cy.get('#react-select-4-option-0').click(); // Delhi
  
      // Então os campos devem conter os valores selecionados
      cy.get('#state').should('contain.text', 'NCR');
      cy.get('#city').should('contain.text', 'Delhi');
    });
  });


  describe('Formulário - Submissão do Formulário', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
  
      // E preenche os campos obrigatórios mínimos para submissão
      cy.get('#firstName').type('Sidney');
      cy.get('#lastName').type('Figueira');
      cy.get('#userEmail').type('figsidney@gmail.com');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('963313831');
    });
  
    it('Deve submeter o formulário e exibir a mensagem de confirmação', () => {
      // Quando ele clica no botão Submit
      cy.get('#submit').click();
  
      // Então deve aparecer a mensagem "Thanks for submitting the form"
      cy.get('#example-modal-sizes-title-lg')
        .should('be.visible')
        .and('have.text', 'Thanks for submitting the form');
    });
  });


  describe('Formulário - Fechar o Modal após Enviar o Formulário', () => {
    beforeEach(() => {
      // Dado que o usuário acessa a página de formulário
      cy.visit('https://demoqa.com/automation-practice-form');
  
      // E preenche os campos obrigatórios mínimos para submissão
      cy.get('#firstName').type('Sidney');
      cy.get('#lastName').type('Figueira');
      cy.get('#userEmail').type('figsidney@gmail.com');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('963313831');
    });
  
    it('Deve submeter o formulário, fechar o modal e ver "Practice Form"', () => {
      // Quando ele clica no botão Submit
      cy.get('#submit').click();
  
      // E a mensagem de confirmação aparece
      cy.get('#example-modal-sizes-title-lg')
        .should('be.visible')
        .and('have.text', 'Thanks for submitting the form');
  
      // Então ele clica no botão Close
      cy.get('#closeLargeModal').click();
  
      // E deve ver novamente o título "Practice Form"
      cy.get('.practice-form-wrapper h5')
        .should('be.visible')
        .and('have.text', 'Practice Form');
    });
  });

      });
