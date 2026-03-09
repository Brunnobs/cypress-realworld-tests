describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('/signin');
    cy.get('[href="/signup"]').click();
    cy.url().should('eq', 'http://localhost:3000/signup');
    cy.get('#firstName').type('Raul');
    cy.get('#lastName').type('Seixas');
    cy.get('#username').type('rauzito');
    cy.get('#password').type('tocaraul');
    cy.get('#confirmPassword').type('tocaraul');
    cy.get('button[type="submit"]').click();
  });

  it.only('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('/signin');
    cy.get('[href="/signup"]').click();
    cy.url().should('eq', 'http://localhost:3000/signup');
    cy.get('#firstName').type('Raul');
    cy.get('#lastName').click().blur();
    cy.get('#username').type('rauzito');
    cy.get('#password').type('tocaraul');
    cy.get('#confirmPassword').type('tocaraul');
    cy.get('#lastName-helper-text').should('contain', 'Last Name is required')
    cy.get('button[type="submit"]').should('be.disabled');
    
  });
});