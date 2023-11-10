describe('Pagina de cadastro, cenário de cadastro com sucesso' ,() => {
    beforeEach(()=>{
        cy.visit('/')
    });
    it('Deve realizar cadastro com sucesso', ()=>{
    cy.get('[data-test="register"]').click()
    cy.get('[data-test="email"]').type('lvinzin@gmail.com')
    cy.get('[data-test="fullName"]').type('Vinicius Alexandre')
    cy.get('[data-test="registerUserName"]').type('vnzin')
    cy.get('[data-test="registerPassword"]').type('12345678')
    cy.get('[data-test="btnRegister"]').click()
    });
});