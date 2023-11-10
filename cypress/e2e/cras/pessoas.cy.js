describe('Pessoas', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        cy.visit('https://front-cras.app.fslab.dev')
    });
    it('Deve retornar msg de campos obrigatórios', () => {

        cy.get('#email').type/*  */('adelson.moreira7293298820@gmail.com')
        cy.get('#senha').type('123')
        cy.get('Button[type=submit]').click()

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click()

        cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click()


        cy.get('[type="submit"]:eq(0)').click()
        cy.wait(1000);

        cy.get('#nome').type('Vinicius Alexandre')
        cy.get('#cpf').type('22222222222-5')
        cy.get('#nit').type('0000000000-2')
        cy.get('#dataNascimento').type('02/02/02')


    })


});