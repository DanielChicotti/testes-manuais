describe('CT-WIKI-002 - Pesquisa', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve exibir campo de pesquisa', () => {
    cy.get('input').should('be.visible')
  })
})