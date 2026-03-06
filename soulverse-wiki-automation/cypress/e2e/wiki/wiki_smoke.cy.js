describe('CT-WIKI-001 -  Smoke Test', () => {

  it('Deve  carregar a página inicial da Wiki', () => {
    cy.visit('/')
    cy.get('body').should('be.visible')
  })

  it('Deve conter um título a página inicial', () => {
    cy.visit('/')
    cy.get('h1').should('be.visible')

  })
})