describe('App e2e test:', () => {
  it('Visit localhost:8080:', () => {
    cy.visit('localhost:8080');
  });

  it('Should load movie list:', () => {
    cy.get('[data-cy=movie-list]');
  });
});
