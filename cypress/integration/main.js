const urlProject = "cypress-io/cypress"

describe('Visiting Github', () => {
    it('Visits the Github page', () => {
      cy.visit(urlProject+'/tags')
      cy.get(':nth-child(2) > div.flex-auto > .commit > .list-style-none > :nth-child(3) > .Link--muted')
     .should('have.attr', 'href')
     .then((href) => {
       cy.request('/'+href).should((response) => {
        expect(response.status).to.eq(200)
            })
        })
    })
  })