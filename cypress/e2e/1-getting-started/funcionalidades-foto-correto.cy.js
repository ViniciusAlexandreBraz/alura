describe('Funcionalidades Foto, cenário de sucesso' ,() => {
    beforeEach(()=>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home?')
    });
    
    it('deve logar', ()=>{

        cy.get('[data-test="loginUserName"]').type('vnzin');
        cy.get('[data-test="loginPassword"]').type('12345678');
        cy.get('[data-test="loginBtn').click();
        cy.get('[href="#/p/add"] i.fa-plus-circle').click();
        cy.get('[type=file]').selectFile('/home/vinicius/alurapic/alurapic/cypress/e2e/1-getting-started/download.jpeg', {force:true});
        cy.get('[placeholder= "photo description"]').type('o neima');
        cy.get('[type="submit"]').click();
        cy.wait(4000);

   

    });

    it ('deve entrar na  primeira foto e comentar', ()=> {

        cy.get('[data-test="loginUserName"]').type('vnzin');
        cy.get('[data-test="loginPassword"]').type('12345678');
        cy.get('[data-test="loginBtn').click();
        cy.get('.img-thumbnail').first().click();
        cy.get('.form-control.ng-untouched.ng-pristine.ng-valid').type('o neima');
        cy.get('.btn.btn-primary.pull-left').click();
        cy.get('.fa-heart-o').click();
        cy.wait(4000);

        cy.get('i.fa.fa-home.fa-2x').click();
        cy.wait(4000);
        cy.get('.img-thumbnail').last().click();
        cy.wait(4000);
        cy.get('.form-control.ng-untouched.ng-pristine.ng-valid').type('minino nem');
        cy.get('.btn.btn-primary.pull-left').click();
        cy.get('.fa-heart-o').click();
        cy.wait(4000);
    });    

    it('deve excluir as fotos', ()=>{
        cy.get('[data-test="loginUserName"]').type('vnzin');
        cy.get('[data-test="loginPassword"]').type('12345678');
        cy.get('[data-test="loginBtn').click();
        cy.get('.img-thumbnail').first().click();
        cy.get('.fa-trash-o').click();
        cy.get('.fa-home').click();
        

    });


});