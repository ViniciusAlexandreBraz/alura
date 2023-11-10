describe('Pagina de cadastro, cenário de cadastro incorreto' ,() => {
  beforeEach(()=>{
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home?')
  });

  it('Deve verificar as mensagem de dados obrigatórios no cadastro', () => {
    cy.get('[data-test="register"]').click()

    cy.get('[data-test="btnRegister"]').click()
    cy.get('[data-test="btnRegister"]').click()

    cy.contains("Email is required!").should('be.visible')

    
    cy.contains("Full name is required!").should('be.visible')

    
    cy.contains("User name is required!").should('be.visible')

   
    cy.contains("Password is required!").should('be.visible')

    });



  it('Deve verificar as mensagem de dados obrigatórios no cadastro', ()=>{
  cy.get('[data-test="register"]').click()
  cy.get('[data-test="email"]').type('')
  cy.get('[data-test="fullName"]').type('')
  cy.get('[data-test="registerUserName"]').type('')
  cy.get('[data-test="registerPassword"]').type('1')
  cy.get('[data-test="btnRegister"]').click()
  });
});