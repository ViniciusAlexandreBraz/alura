describe('Funcionalidades Foto, cenário incorreto', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    });


    it('Deve retornar erro ao tentar cadastrar foto', () => {
     
         cy.get('[data-test="loginUserName"]').type('vnzin');
         cy.get('[data-test="loginPassword"]').type('12345678');
         cy.get('[data-test="loginBtn').click();
        
         cy.get('a[href="#/p/add"] i.fa-plus-circle').click();
         
         cy.wait(1000);
         cy.contains("Please, select a photo").should('be.visible');
         cy.wait(1000);
        
         
        cy.get(':nth-child(2) > a > .fa').click();
        cy.get('[type="file"]').selectFile('/home/vinicius/alurapic/alurapic/cypress/e2e/.txt', {force:true});
        cy.get('[type="submit"]').click();
        cy.contains('Upload error!').should('be.visible') 
        cy.wait(2000) 
    
        cy.get(':nth-child(2) > a > .fa').click();
        cy.get('[type="file"]').selectFile('/home/vinicius/alurapic/alurapic/cypress/e2e/1-getting-started/download.jpeg', {force:true});
        cy.get('[placeholder="photo description"]').type('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO' +
               'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
               'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII' +
               'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        cy.get('.text-danger').contains('Max length is 300');
        cy.get('.fa-home').click();
    
        cy.wait(2000) 
        cy.get(':nth-child(2) > a > .fa').click();
        cy.get('[placeholder="photo description"]').type('Imagem ANIACOC');
        cy.get('.text-danger').contains('Please, select a photo');

        
    })
})