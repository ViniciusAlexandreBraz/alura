describe('Pagina de login, cenário de sucesso', () => {
    beforeEach(() =>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    });
    it('Deve realizar login com sucesso', () => {
        cy.get('[data-test="loginUserName"]').type('vnzin')
        cy.get('[data-test="loginPassword"]').type('12345678')
        cy.get('[data-test="loginBtn').click()
    });
    
});