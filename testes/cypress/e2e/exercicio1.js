/// <reference types  = "cypress" />

describe('Caso de Teste 1: Verificação do Título da Página Inicial', () => {
    it('Acessa a página inicial', () => {
      cy.visit('https://www.globalsqa.com/');
    });
  
    it('Verifica o título da página', () => {
      cy.title().should('include', 'GlobalSQA');
    });
  });

  // Função para realizar a pesquisa no site
function realizarPesquisa(termo) {
    cy.get('input[name="s"]').type(termo);
    cy.get('input[value="Pesquisar"]').click();
  }
  
  describe('Caso de Teste 2: Pesquisar e Verificar Conteúdo na Página de Blog', () => {
    it('Acessa a página de blog', () => {
      cy.visit('https://www.globalsqa.com/blog/');
    });
  
    it('Realiza uma pesquisa no blog', () => {
      realizarPesquisa('Cypress');
    });
  
    it('Verifica se os resultados contêm o termo "Cypress"', () => {
      cy.get('.post-title a').each((link) => {
        cy.wrap(link).should('include.text', 'Cypress');
      });
    });
  });
  
  