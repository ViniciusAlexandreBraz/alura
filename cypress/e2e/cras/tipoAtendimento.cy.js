describe('Pessoas', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        cy.visit('https://front-cras.app.fslab.dev')
    });

    it('Deve cadastrar pessoa com todos os campos preenchidos', () => {

        cy.get('#email').type('adelson.moreira7293298820@gmail.com');
        cy.get('#senha').type('123');
        cy.get('Button[type=submit]').click();

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();

        cy.wait(1000);
        cy.get('[type="submit"]').click();
        cy.wait(1000);
        cy.get('#nome').type('Desenvolver uma aplicação Cypress 2.0')
        cy.get('[type="submit"]').click();
        cy.wait(1000);

        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();

        cy.get('#tipo').type('Desenvolver uma aplicação Cypress 2.0');

        cy.get(':nth-child(2) > .styles_container__NSLBw > #buscar').click();

        cy.get('[alt="Editar tipo de atendimento"]:eq(0)').click();

        cy.get('#nome').clear('#nome')
        cy.get('#nome').type('teste 2.0')
        cy.get('[type="submit"]').click()
    })






});