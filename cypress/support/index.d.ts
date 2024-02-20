declare namespace Cypress {
    interface Chainable<Subject = any> {
        acceptCookies(): void

        getBillingLink(billingType: string): Cypress.Chainable<JQuery<HTMLElement>>

        getBillingPricePlanColumn(billingType: string, pricePlan: string): Cypress.Chainable<JQuery<HTMLElement>>
    }
}