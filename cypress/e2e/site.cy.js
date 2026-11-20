describe('A.M.A.S. website', () => {
  it('loads the home page and renders the main content', () => {
    cy.visit('/#/');
    cy.contains('A arte de vestir bem').should('be.visible');
    cy.get('header').should('be.visible');
    cy.get('main').should('be.visible');
  });

  [
    ['sobre', 'Tradição e precisão em cada ajuste.'],
    ['servicos', 'Catálogo completo de especialidades'],
    ['contato', 'Vamos falar sobre sua peça'],
    ['privacidade', 'Política de Privacidade'],
  ].forEach(([route, heading]) => {
    it(`loads the ${route} route`, () => {
      cy.visit(`/#/${route}`);
      cy.contains(heading).should('be.visible');
    });
  });

  it('supports direct SPA route URLs', () => {
    cy.visit('/contato');
    cy.location('hash').should('eq', '#/contato');
    cy.contains('Vamos falar sobre sua peça').should('be.visible');
  });

  it('serves Swagger UI and a valid OpenAPI document', () => {
    cy.request('/api-docs.html').its('status').should('eq', 200);
    cy.request('/openapi.yaml').then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.include('openapi: 3.0.3');
      expect(body).to.include('/servicos:');
    });
  });
});
