import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

before(function () {
    cy.fixture('credentials').as('data');
    cy.visit('/');
})

Given(/^User has logged into the swag store$/, function () {
    cy.get('#user-name').type(this.data.username);
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('contain', '/inventory.html');
});

When(/^User puts the lowest priced item in the cart$/, function () {
    cy.getIndexes().then($indexes => {
        cy.xpath(`(//div[@class="inventory_item_price"]/following-sibling::button)[${$indexes[0]}]`).click();
    });
});

When(/^User put the highest priced item in the cart$/, function () {
    cy.getIndexes().then($indexes => {
        cy.xpath(`(//div[@class="inventory_item_price"]/following-sibling::button)[${$indexes[1]}]`).click();
    });
});

Then(/^The cart will have the correct number of items in it displayed$/, function () {
    cy.get('#shopping_cart_container>a').scrollIntoView().should('have.text', '2');
});