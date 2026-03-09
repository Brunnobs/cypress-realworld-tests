describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('/signin');
    cy.get('#username').type('rauzito');
    cy.get('#password').type('tocaraul');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('Tentar fazer login com credenciais inválidas', () => {
    cy.visit('/signin');
    cy.get('#username').type('neymar');
    cy.get('#password').type('jogamuito');
    cy.get('button[type="submit"]').click();
    cy.get('.MuiAlert-message').should('be.visible').and('contain', 'Username or password is invalid');
  });
});