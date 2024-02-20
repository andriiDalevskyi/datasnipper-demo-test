/// <reference types="cypress" />

describe('Billing  tabs test suit', () => {
    beforeEach(() => {
        cy.visit("/pricing")
        cy.acceptCookies()
    })

    it('Validate: “Monthly billing” tab', () => {
        const billingType = 'Monthly Billing'
        cy.getBillingLink(billingType)
            .should('have.attr', 'aria-selected', 'true')
        cy.getBillingPricePlanColumn(billingType, 'Basic').as('priceTab')
        cy.get('@priceTab')
            .contains('a', 'Start trial')
            .should('have.attr', 'href', '/checkout-basic-month')
        cy.get('@priceTab')
            .find('.price-card-v-two .pricing-price-v-two .heading-5')
            .invoke('text')
            .should('equal', '€59');
    })

    it('Validate: “Annual billing” tab', () => {
        const billingType = 'Annual Billing'
        cy.getBillingLink(billingType).click()
        cy.getBillingPricePlanColumn(billingType, 'Basic').as('priceTab')
        cy.get('@priceTab')
            .contains('a', 'Start trial')
            .should('have.attr', 'href', '/checkout-basic-year')
        cy.get('@priceTab')
            .find('.price-card-v-two .pricing-price-v-two .heading-5')
            .invoke('text')
            .should('equal', '€49');
        cy.get('@priceTab')
            .find('.ds-tag.pricing.discount')
            .invoke('text')
            .should('equal', 'Save 18%');
    })
})