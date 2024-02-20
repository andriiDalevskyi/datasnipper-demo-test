Cypress.Commands.add('acceptCookies', () => {
    cy.get('#hs-eu-confirmation-button').click()
})
Cypress.Commands.add('getBillingLink', (billingType) => {
    return cy.get('a[data-w-tab="'+billingType+'"]')
})
Cypress.Commands.add('getBillingPricePlanColumn', (billingType, pricePlan) => {
    return cy.get('div[data-w-tab="'+billingType+'"]')
        .contains('.pricing-col', pricePlan)
})

