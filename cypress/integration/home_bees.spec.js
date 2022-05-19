describe('home page', ()=>{
    it('Primeiro teste com Bees', ()=> {
        cy.viewport(1440, 900)
        cy.visit('https://novo.parceiroambev.com.br/')
        cy.get('#bees-guest-header-logo-image')
        cy.get('.bees-footer-copyright > .is-text-weight-bold').should('have.text', '© PARCEIRO BEES 2022. TODOS OS DIREITOS RESERVADOS')
    })
})