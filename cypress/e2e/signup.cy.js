import HomePage from "../support/pages/home"
import Header from "../support/components/header"
import SignupPage from "../support/pages/signup"

describe('Dado que estou na página de cadastro', function(){

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user
        })
    })

    context('Quando preencho com dados válidos', function(){

        it('Então deve ser possível cadastrar com sucesso', function(){

            const data = this.data.registerUser

            cy.apiDelete(data)

            HomePage.go()
            Header.goToSignup()

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

            HomePage.go()
            Header.goToSignup()

            SignupPage.fillSignupForm(data)
            SignupPage.submitSignupForm()
            SignupPage.errorMessageShouldBe(message)
        })
    })
})
