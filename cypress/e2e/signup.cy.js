import SignupPage from "../support/pages/signup"

describe('Dado que estou na página de cadastro', function(){

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user
        })
    })

    context('Quando preencho com dados válidos', function(){

        it.only('Então deve ser possível cadastrar com sucesso', function(){

            const data = this.data.registerUser

            cy.apiDelete(data)

            cy.visit('/login')

            SignupPage.fillSignupForm(data)
            SignupPage.submitSignupForm()
            SignupPage.valueShouldBe(data)

            SignupPage.fillForm(data)
            SignupPage.submit()
            SignupPage.successfulTxtShouldBe('Account Created!')
        })
    })

    context('Quando preencho com um user já cadastrado', function() {

        const message = 'Email Address already exist!'

        it('Então deve me retornar: '+ message, function() {

            const data = this.data.duplicatedUser

            cy.apiDelete(data)
            cy.apiSignup(data)

            cy.visit('/login')

            SignupPage.fillSignupForm(data)
            SignupPage.submitSignupForm()
            SignupPage.errorMessageShouldBe(message)
        })
    })
})
