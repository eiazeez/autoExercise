import HomePage from "../support/pages/home"
import Header from "../support/components/header"
import SignupPage from "../support/pages/signup"

describe('Dado que estou na página de cadastro', function(){
    context('Quando preencho com dados válidos', function(){

        beforeEach(function(){
            cy.fixture('data').then(function(user){
                this.data = user
            })
        })

        it('Então deve ser possível cadastrar com sucesso', function(){
            
            const data = this.data

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
})
