describe('Formulário completo com estrutura Gherkin e Cypress puro', () => {
    beforeEach(() => {
      // Dado que o usuário acessa o formulário de prática
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Deve preencher e submeter o formulário com sucesso', () => {
      // Dado que o usuário preenche os dados pessoais
      cy.preencherNome('Sidney', 'Figueira');
      cy.preencherEmail('figsidney@gmail.com');
      cy.selecionarGenero('Male');
      cy.preencherTelefone('963313831');
  
      // E seleciona a data de nascimento
      cy.selecionarDataNascimento('11 Apr 2025');
  
      // E seleciona a matéria desejada
      cy.selecionarSubject('E', 'English');
  
      // E seleciona o hobby preferido
      cy.selecionarHobby('Sports');
  
      // E anexa uma imagem
      cy.fazerUploadImagem('cypress/fixtures/teste_teste.jpg');
  
      // E preenche o endereço
      cy.preencherEndereco('teste_site_demo');
  
      // E seleciona o estado e cidade
      cy.selecionarEstadoECidade('NCR', 'Delhi');
  
      // Quando o usuário clica em "Submit"
      cy.submeterFormulario();
  
      // Então a mensagem de confirmação deve aparecer
      cy.get('#example-modal-sizes-title-lg')
        .should('be.visible')
        .and('contain.text', 'Thanks for submitting the form');
  
      // E o usuário deve poder fechar o modal
      cy.fecharModal();
  
      // E a tela deve voltar ao formulário com o título visível
      cy.get('.practice-form-wrapper h5')
        .should('be.visible')
        .and('have.text', 'Practice Form');
    });
  });
  
  
  