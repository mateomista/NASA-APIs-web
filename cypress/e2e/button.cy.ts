describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('a[href="/rovers"]').click();
  })
})