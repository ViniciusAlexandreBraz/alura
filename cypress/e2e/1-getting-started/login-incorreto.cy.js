describe('Pagina de login, cenário incorreto', () => {
    beforeEach(() =>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    });
    it('Deve verificar as mensagem de dados obrigatórios de login', () => {
        cy.get('[data-test="loginUserName"]').type('joao')       
        cy.get('[data-test="loginPassword"]').type('123456789')       
        cy.get('[data-test="loginBtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('User name or Password is required');
        })
        
    });
    
});