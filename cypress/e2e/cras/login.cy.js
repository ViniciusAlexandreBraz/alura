describe('Pagina de login, cenário de sucesso', () => {
    beforeEach(() =>{
        cy.visit('https://front-cras.app.fslab.dev')
    });
    it('Deve realizar realizar cadastro de um usuário com status ativo - cenário de sucesso', () => {
        
        cy.get('#email').type('adelson.moreira7293298820@gmail.com')
        cy.get('#senha').type('123')
        cy.get('Button[type=submit]').click()
    });

    it('Deve retornar mensagem de erro devido usuário inválido  - cenário de insucesso', () => {
        cy.get('#email').type('vinizada@gmail.com')
        cy.get('#senha').type('123')
        cy.get('Button[type=submit]').click()

        
    })
});