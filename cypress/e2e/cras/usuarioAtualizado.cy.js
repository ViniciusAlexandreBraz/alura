describe('Deve achar o usuario Cadastrado', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)

        cy.visit('https://front-cras.app.fslab.dev')
    });
    it('Deve retornar uma consulta do usurário cadastrado com status ativo - cenário de sucesso', () => {

        cy.get('#email').type('adelson.moreira7293298820@gmail.com');
        cy.get('#senha').type('123');
        cy.get('Button[type=submit]').click();
        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click();

        cy.get('#nome').type('Vinicius Alexandre');
        cy.get('#email').type('Vinicius@gmail.com');

        cy.get(':nth-child(4) > .styles_button__dr0t2').click()

    })
})