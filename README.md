# 🚀 Avaliação Liberty – Automação de Testes com Cypress

Este projeto tem como objetivo automatizar o preenchimento e validação de um formulário no site [DemoQA](https://demoqa.com/automation-practice-form), utilizando Cypress com sintaxe pura (sem Cucumber), porém seguindo a estrutura lógica do Gherkin (Dado, Quando, Então).

---

## 🧪 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript (ES6)
- Visual Studio Code
- Estrutura lógica baseada em BDD (Gherkin)

---

## 📂 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── formulario_enxuto.cy.js         # Versão otimizada do teste de formulário
│   ├── formulario.cy.js                # Versão completa do teste de formulário
│   └── login.cy.js                     # Testes relacionados à área de login (futuro)
├── fixtures/                           # Arquivos simulados (ex: imagens para upload)
├── support/
│   ├── commands.js                     # Comandos customizados reutilizáveis
│   └── e2e.js                          # Configurações globais dos testes
cypress.config.js                       # Configuração principal do Cypress
package.json                            # Dependências e scripts do projeto
README.md                               # Documentação do projeto
```

---

## 🧠 Padrão Gherkin aplicado (comentários no código)

Apesar de não usar Cucumber, os testes foram escritos com base na lógica Gherkin:

```javascript
// Dado que o usuário acessa o formulário
// E preenche os dados pessoais
// Quando clica no botão de envio
// Então a mensagem de confirmação deve ser exibida
```

Essa abordagem melhora a legibilidade e favorece a comunicação com times técnicos e não técnicos.

---

## ▶️ Como Executar os Testes

1. Clone o repositório:

```bash
git clone https://github.com/SidneyAnalyst/avaliacao_liberty.git
cd avaliacao_liberty
```

2. Instale as dependências:

```bash
npm install
```

3. Adicione o arquivo de imagem:  
Coloque o arquivo teste_teste.jpg dentro da pasta cypress/fixtures.

4. Execute o Cypress:

```bash
npx cypress open
```

Ou, para rodar em modo headless:

```bash
npx cypress run
```

---

## 📋 Comandos Customizados

Todos os campos do formulário foram abstraídos em comandos personalizados para tornar os testes mais limpos e reutilizáveis. Veja um exemplo:

```javascript
cy.preencherNome('Sidney', 'Figueira');
cy.selecionarGenero('Male');
cy.preencherEmail('figsidney@gmail.com');
```

Esses comandos estão definidos no arquivo cypress/support/commands.js.

---

## ✅ Validações Realizadas

- Preenchimento de todos os campos do formulário
- Validação da mensagem de sucesso após envio
- Fechamento do modal e retorno à tela inicial

---

## 🧑‍💻 Autor

**Sidney Figueira**  
Analista de Sistemas | QA | Especialista em Testes e Qualidade de Software  
GitHub: [@SidneyAnalyst](https://github.com/SidneyAnalyst)

---

## 🏁 Status

✅ Projeto funcional e em conformidade com as exigências de avaliação  
📌 Estrutura pronta para ser expandida com novos testes
