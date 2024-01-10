import Modal from "../support/components/modal"
import Subscription from "../support/components/subscription"
import CartPage from "../support/pages/cart"
import ProductsPage from "../support/pages/products"

describe('Dado que estou na Cart Page', function() {

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user.products
        })
    })

    context('Quando preencho o campo de subscription devidamente', function(){

        const email = 'email-az-treinamento@mail.com'
        const msg = 'You have been successfully subscribed!'

        it(`Então o sistema deve me retornar: '${msg}'`, function(){
            cy.visit('/view_cart')
            
            Subscription.subscriptionFill(email)
            Subscription.subscriptionSubmit()
            Subscription.subscriptionMsgShouldBe(msg)
            
            
        })
    })

    context('Quando possuo produtos adicionados ao carrinho', function(){

        it(`Então deve ser possível validar Preço, Quantidade e Valor total'`, function(){

            const product = this.data
            const quantity = 1

            cy.visit('/products')
            ProductsPage.shouldBeVisible()

            ProductsPage.addProduct(product.men_tshirt)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.closeButton()

            ProductsPage.addProduct(product.sleeveless_dress)
            Modal.addedMessageShouldBe('Your product has been added to cart.')
            Modal.blueAction()

            CartPage.productShouldHave(product.men_tshirt, quantity)
            CartPage.productShouldHave(product.sleeveless_dress, quantity)
            
        })
    })

    context('Quando possuo produtos adicionados ao carrinho', function(){

        it.only(`Então deve ser possível validar Preço, Quantidade e Valor total'`, function(){

            const product = this.data
            const quantity = 4

            cy.visit('/products')
            ProductsPage.shouldBeVisible()

            ProductsPage.goToProductDetails(product.sleeveless_dress)
            ProductsPage.modifyQuantity(quantity)
            ProductsPage.addToCart()

            Modal.blueAction()
            
            CartPage.productShouldHave(product.sleeveless_dress, quantity)
            
        })
    })
})