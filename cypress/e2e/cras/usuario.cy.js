describe('Pagina de login, cenário de sucesso', () => {
    beforeEach(() => {
        cy.viewport(1200, 800)
        cy.visit('https://front-cras.app.fslab.dev')
    });
    it('Deve realizar o login', () => {

        cy.get('#email').type('adelson.moreira7293298820@gmail.com')
        cy.get('#senha').type('123')
        cy.get('Button[type=submit]').click()
        cy.get('.App_showMenu__T5cwx > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/listar"]').click()
        cy.get(':nth-child(5) > .styles_button__dr0t2').click()


        cy.get('#nomeCadastrar').type('Vinicius Alexandre')
        cy.get('#emailCadastrar').type('Viniskiline@gmail.com')
        cy.get('#senhaCadastrar').type('Vinib@tman2003')
        cy.get('#unidadeCadastrar').select('CRAS - Pimenta Bueno')
        cy.get('#grupoCadastrar').select('Padrão')

        
        cy.get('span.styles_slider__0TNp_').click()
        cy.wait(1000);
        cy.get('span.styles_slider__0TNp_').click()

        cy.get('[type="submit"]').click()

    }) 
  
  
});