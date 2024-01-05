import Header from "../support/components/header"
import SignupPage from "../support/pages/signup"

describe('Dado que estou na página de login', function() {

    beforeEach(function(){
        cy.fixture('data').then(function(user){
            this.data = user
        })
    })
    
    context('Quando preencho os campos de login com usuários válidos', function() {

        it('Então deve ser possível logar com sucesso', function() {

            const data = this.data.loginUser

            cy.apiDelete(data)
            cy.apiSignup(data)

            cy.visit('/login')
        
            SignupPage.fillFormLogin(data)
            SignupPage.submitLoginForm()

            const txt = ' Logged in as '+ data.name
            Header.loggedUserShouldHave(txt)

        })
    })

    context('Quando logo com um user válido', function() {

        it('Então deve ser possível deslogar com sucesso', function() {

            const data = this.data.loginUser

            cy.apiDelete(data)
            cy.apiSignup(data)

            cy.visit('/login')
        
            SignupPage.fillFormLogin(data)
            SignupPage.submitLoginForm()

            const txt = ' Logged in as '+ data.name
            Header.loggedUserShouldHave(txt)

            Header.logout()
            SignupPage.shouldBeVisible()

        })
    })

    context('Quando preencho os campos de Login com um usuário inválido', function() {

        const errorMsg = 'Your email or password is incorrect!'

        it('Então deve ser retornar a mensagem: ' + errorMsg, function() {
           
            const badUser = {
                email: 'emailRuim@email.com',
                pass: '123456789'
            }

            cy.apiDelete(badUser)

            cy.visit('/login')

            SignupPage.fillFormLogin(badUser)
            SignupPage.submitLoginForm()
            SignupPage.errorMessageShouldBe(errorMsg)
            
        })
    })

    const emailMessages = [
        {email: 'emailRuim', output: "Please include an '@' in the email address."},
        {email: '1231431245', output: "Please include an '@' in the email address."},
        {email: '´[´[]~]~´]', output: "Please include an '@' in the email address."},
        {email: '{enter}', output: "Please fill out this field"},
        {email: 'EMAIL GIGANTE', output: "Please include an '@' in the email address."},
    ]

    emailMessages.forEach(function(msg){
        context(`Quando preencho o email com "${msg.email}"`, function(){
            it(`Então o sistema deve me retornar "${msg.output}"`, function(){
                cy.visit('/login')

                SignupPage.fillFormLogin(msg)
                SignupPage.submitLoginForm()
                SignupPage.outputShouldBe(msg)
            })
        })   
    })
})
    