///<reference types="Cypress"/>
class QuotesHomePage{

    elements={
        pendingQuoutesTitle : ()=> cy.get("[title='Pending Quotes']"),
        pendingQuotesCards : ()=> cy.get("[data-testid='pendingQuotesCards']"),
        progressBar : ()=> cy.get("[role='progressbar']")
    }

}
export default QuotesHomePage