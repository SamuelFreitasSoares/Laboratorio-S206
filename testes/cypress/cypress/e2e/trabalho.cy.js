describe("Wikipedia Tests", () => {
  it("1. Verificar se a página inicial da Wikipedia é carregada corretamente", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.title().should("eq", "Wikipedia");
  });

  it("2. Pesquisar por 'Cypress' na barra de pesquisa e verificar resultados", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Cypress");
    cy.get(".pure-button").click();
    cy.get('.mw-page-title-main').should('contain.text','Cypress')
  });
 
  it("3. Navegar para a página inicial do site", () => {
    cy.visit("https://pt.wikipedia.org/wiki/Cypress")   
    cy.get('.mw-logo').click()
    cy.get('.hp-welkom-1').should('have.text','Boas-vindas à Wikipédia,')
  });

  it("4. Verificar se o link 'Discussão' na página de um artigo funciona", () => {
    cy.visit("https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal")
    cy.get('#searchInput').type('Xbox{enter}')
    cy.get('#ca-talk > a > span').click()
    cy.get('#firstHeading').should('contain.text','Discussão:Xbox')
  });

  it("5. Verificar se o botão 'Ver Histórico' está funcionando", () => {
    cy.visit("https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Fortitude")
    cy.get('#ca-history > a > span').click()
    cy.get('#firstHeading').should('contain.text','Operação Fortitude: historial de revisões')
  });

  it("6. Verificar se é possível realizar login sem usuário e senha válidos", () => {
    cy.visit("https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal")
    cy.get('#pt-login-2 > a > span').click()
    cy.get('#wpName1').type('ABCDEF')
    cy.get('#wpPassword1').type('123456')
    cy.get('#wpLoginAttempt').click()
    cy.get('.cdx-message__content').should('contain.text','Tente novamente, por favor.')
  });
});
