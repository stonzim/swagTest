Cypress.Commands.add('getIndexes', function () {
    var minPrice = 10000.00;
    var maxPrice = 0.00;
    var indexes = new Array();

    return cy.get('.inventory_item_price').each(($price, $index) => {
        const price = parseFloat($price.text().substring(1, $price.text().length));
        if (price < minPrice) {
            minPrice = price;
            indexes[0] = $index + 1;
        }
        if (price > maxPrice) {
            maxPrice = price;
            indexes[1] = $index + 1;
        }
       
    }).then(() => {
        return cy.wrap(indexes);
    });
});

