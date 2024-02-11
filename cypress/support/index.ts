declare global {
    namespace Cypress {
        interface Chainable {
            getIndexes(): Chainable<number[]>;
        }
    }
}