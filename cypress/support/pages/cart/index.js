import { el } from './elements'

const CartPage = {

    productShouldHave: function(product, quantity) {
    cy.contains('a', product.name)
        .parents(el.productCard)
        .find(el.quantity)
        .should('have.text', quantity)

      cy.contains('a', product.name)
        .parents(el.productCard)
        .find(el.totalPrice)
        .contains(product.price*quantity)
    }

}

export default CartPage