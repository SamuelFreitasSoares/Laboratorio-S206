/// <reference types  = "cypress" />

describe('criando cenário de teste para o site globalsqa', ()=> {

  it.skip('caso de teste: Registrando um usuário no site com sucesso',( ) => {

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Cristiano')
    cy.get('#Text1').type('Ronaldo')
    cy.get('#username').type('cr7')
    cy.get('#password').type('123456')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text','Registration successful')
  })

  it.skip('caso de teste: Registrando um usuário com falha (faltando senha)',( ) => {

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Cristiano')
    cy.get('#Text1').type('Ronaldo')
    cy.get('#username').type('cr7')
    cy.get('#password').type('123456')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text','Password is required')
    cy.get('.btn-primary').should('be.disabled')  
  })  

  it('caso de teste: Realizando login com sucesso',( ) => {
      let info = criarUsuario()
      cy.get('#username').type(info[0])
      cy.get('#password').type(info[1])
      cy.get('.btn-primary').click()
      cy.get('h1.ng-binding').should('contain.text',info[0])

  })
})

function criarUsuario(){

    let horas = new Date().getHours().toString()
    let minutos = new Date().getMinutes().toString()
    let segundos = new Date().getSeconds().toString()
    let usuario = horas + minutos + segundos + 'ID'
    let senha = horas + minutos + segundos + 'senha'
    let userinfo = [usuario,senha]

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(usuario)
    cy.get('#Text1').type(usuario)
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text','Registration successful')

    return userinfo
}