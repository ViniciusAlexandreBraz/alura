
/// <reference types="cypress"/>

describe('Aplicativo de tarefas cypress', () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo")
    })
    it('Deve exibe os itens de tarefas por padrão do aplicativo', () => {
        cy.get('.todo-list li').should('have.length', 2);
        cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
        cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
    });
    it('Deve adicionar um novo itens de tarefas', () => {
        const novoItem = 'Comida para o gato'
        cy.get('[data-test="new-todo"]').type(`${novoItem}{enter}`);
        cy.get('.todo-list li').should('have.length', 3).last().should('have.text', novoItem);
    });
    it('Deve marcar um item como concluído', () => {
    });
    context('Usando uma tarefa verificada', () => {
        beforeEach(() => {
            cy.contains('Pay electric bill')
                .parent()
                .find('input[type=checkbox]')
                .check()
        })
        it('Deve filtrar tarefas incompletas', () => {
            cy.get('.filters').contains('Active').click()
        })
        it('Deve filtrar por tarefas concluídas', () => {
            cy.get('.filters').contains('Completed').click()
        })
        it('Deve excluir todas as tarefas concluídas', () => {
            cy.get('.clear-completed').click()
        })
    });
});
