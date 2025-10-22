describe('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it('Should add a new hotel when the form is submitted', () => {
        const nameInput = cy.get('#name-input')
        const priceInput = cy.get('#price-input')
        const descriptionInput = cy.get('#description-input')
        const hotelForm = cy.get('#hotel-form')

        cy.get('#hotels-list > li').then($hotels => {
            const numOfHotels = $hotels.length

            nameInput.type('Cecil Hotel')
            priceInput.type('0.5')
            descriptionInput.type('Ignore the past. Just look forward')
            
            hotelForm.submit()
            cy.get('#hotels-list > li').should('have.length', numOfHotels + 1)
        })
    })
})