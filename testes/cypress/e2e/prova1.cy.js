describe("WebNovel Tests", () => {

  function realizarPesquisa(termo) {
    cy.get('.g_search').click();
    cy.get('#seachModalInput').type(termo);
    cy.get('#seachModalInput').type('{enter}'); 
    
  }

  it("1. Verificar se a página inicial do WebNovel é carregada corretamente", () => {
    cy.visit("https://www.webnovel.com/pt");
    cy.get('.m-preference-mod > .g_mod > ._close').click();
    cy.get('.g_wrap > .g_logo').should('be.visible');
    cy.get('#blockId-6007e6b4efbaab775677cb39-0 > div > .fw700').should('contain.text','Weekly Book');
  });

  it("2. Verificar se a página de login está funcionando corretamente", () => {
    cy.visit("https://www.webnovel.com/pt"); 
    cy.get('.m-preference-mod > .g_mod > ._close').click();
    cy.get('.j_loginWrap > .bt').click();
    cy.get('.extra-txt > a').click(); 
  });
  
  it("3. Verificar se a barra de pesquisa está funcionando corretamente (teste negativo usando função)", () => {
    cy.visit("https://www.webnovel.com/pt"); 
    cy.get('.m-preference-mod > .g_mod > ._close').click();
    realizarPesquisa("The King's Avatar"); 
  });

});