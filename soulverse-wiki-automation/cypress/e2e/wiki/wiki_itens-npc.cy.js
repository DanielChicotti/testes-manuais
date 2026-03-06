describe('Wiki - Itens', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('CT-WIKI-003 - Deve carregar itens ao selecionar um tipo', () => {

    // Seleciona tipo
    cy.get('select.select').first().select('armaduras')

    // Valida que o segundo dropdown apareceu
    cy.get('select.select')
      .eq(1)
      .should('be.visible')

    // Valida que possui opções
    cy.get('select.select')
      .eq(1)
      .find('option')
      .its('length')
      .should('be.greaterThan', 1)

  })

 it('CT-WIKI-004 - Deve atualizar lista ao trocar categoria', () => {

  cy.get('select.select').first().select('armas')

  cy.get('select.select')
    .eq(1)
    .find('option')
    .then(optionsArmas => {

      const listaArmas = [...optionsArmas].map(opt => opt.textContent.trim())

      cy.get('select.select').first().select('botas')

      cy.get('select.select')
        .eq(1)
        .find('option')
        .then(optionsBotas => {

          const listaBotas = [...optionsBotas].map(opt => opt.textContent.trim())

          expect(listaBotas).to.not.deep.equal(listaArmas)

        })

    })

})

  it('CT-WIKI-005-A - Deve exibir status e tabela de drop para item dropável', () => {

    // Seleciona categoria
    cy.get('select.select').first().select('botas')

    // Seleciona item específico
    cy.get('select.select').eq(1).select('Bota da Precisão')

    // Valida nome do item na direita
    cy.contains('Greva de Reiatsu').should('be.visible')

    // Valida atributos principais
    cy.contains('HP:').should('be.visible')
    cy.contains('MP:').should('be.visible')
    cy.contains('STR:').should('be.visible')

    // Valida que seção de drop aparece
    cy.contains('Dropa de:').should('be.visible')

    // Valida tabela de drop
    cy.get('table').should('be.visible')

})

  it('CT-WIKI-005-B - Deve exibir apenas a aba status para item craftado', () => {

  cy.get('select.select').first().select('botas')

  cy.get('select.select').eq(1).select('Bota Aprimorada da Precisão')

  cy.contains('HP:').should('be.visible')

  // Valida que NÃO existe seção Dropa de
  cy.contains('Dropa de:').should('not.exist')

})

it('CT-WIKI-006 - Deve exibir efeito da carta, em qual item é equipada e onde dropa', () => {

  cy.get('select.select').first().select('cartas')

  cy.get('select.select').eq(1).select('Carta Hollow - 57')

  cy.contains('Efeitos da Carta:').should('be.visible')
  cy.contains('Equipa em:').should('be.visible')
  cy.contains('Dropa de:').should('be.visible')

})

it('CT-WIKI-007 - Deve exibir materiais ao selecionar uma fórmula', () => {

  cy.get('select.select').first().select('formulas')

  cy.get('select.select').eq(1).select('Fórmula Asa da Vida')

  cy.contains('Fórmula Asa da Vida').should('be.visible')

  cy.contains('Fórmula').should('be.visible')

  cy.get('ul li').each((item) => {
  cy.wrap(item)
    .invoke('text')
    .should('not.be.empty')
})

  cy.contains('Cria:').should('be.visible')


})

it('CT-WIKI-008 - Deve abrir item ao clicar em material da fórmula', () => {

  cy.get('select.select').first().select('formulas')
  cy.get('select.select').eq(1).select('Fórmula Pedra Divina')
  
  cy.contains('Fórmula Pedra Divina').should('be.visible')

  cy.contains('Fragmento da Alma').click()

  cy.contains('Fragmento da Alma').should('be.visible')

 
})

it('CT-WIKI-009 - Selecionar Npc e exibir Nome, status, tempo de respawn e drops', () => {
  cy.get('select.select').eq(1).select('Ryoka - 89')

  cy.contains('HP:').should('be.visible')
  cy.contains('STR:').should('be.visible')
  cy.contains('DEF:').should('be.visible')
  cy.contains('EXP:').should('be.visible')
  cy.contains('SpawnTime:').should('be.visible')
  cy.contains('Drops:').should('be.visible')
  cy.get('ul li').should('have.length.greaterThan', 0)

})

it('CT-WIKI-010 - Pesquisar por nome de item', () => {

  cy.get('input').type('Asa da Vida')

  cy.contains('item — Asa Da Vida')
  .should('be.visible')
  .click()


})
  
  

})






