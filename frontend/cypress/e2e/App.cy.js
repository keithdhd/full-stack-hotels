describe('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it('should successfully add a new hotel to the list', () => {
        cy.get('input[type="text"]').type('Test Resort');
        cy.get('input[type="number"]').type('250');
        cy.get('textarea[name="description"]').type('A wonderful place to stay.');
        cy.contains('Submit Hotel').click();
        cy.contains('Test Resort').should('exist');

    })

})
