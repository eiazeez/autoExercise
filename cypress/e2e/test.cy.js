describe('Dado que preciso de um log', function(){
    context('Quando eu estruturo no padrão mocka', function(){
        it('Então o cypress deve identificar e me relatar', function(){
            
            cy.visit('https://automationexercise.com/')
            cy.get('div[class="features_items"]').should('be.visible')

            cy.get('a[href="/login"]').click()
            cy.get('div[class="signup-form"]').should('be.visible')

            const data = {
                name: "Isaac Douglas",
                email: "azeez-treinamento@azeez.com",
                title: "Mrs",
                pass: "senhamuitoforte",
                birthday: {
                    day: "26",
                    month: "12",
                    year: "2000"
                },
                newsletter: "yes",
                optin: "no",
                company: "Azeez Code",
                address1: "Hogwarts",
                address2: "Marte",
                state: "Chines",
                country: "Singapore",
                city: "Singapore City",
                zipcode: "12345678",
                number: "987654321"
            }

            cy.get('input[data-qa="signup-name"]').type(data.name)
            cy.get('input[data-qa="signup-email"]').type(data.email)

            cy.get('button[data-qa="signup-button"]').click()

            cy.get('#name').should('have.attr', 'value', data.name)
            cy.get('#email').should('have.attr', 'value', data.email)

            cy.get(`input[value=${data.title}]`).click()

            cy.get('#password').type(data.pass)

            cy.get('#days').select(data.birthday.day)
            cy.get('#months').select(data.birthday.month)
            cy.get('#years').select(data.birthday.year)

            if (data.newsletter === "yes") cy.get('#newsletter').click()
            if (data.optin === "yes") cy.get('#optin').click()

            cy.get('#first_name').type(data.name.split(' ')[0])
            cy.get('#last_name').type(data.name.split(' ')[1])

            cy.get('#company').type(data.company)

            cy.get('#address1').type(data.address1)
            cy.get('#address2').type(data.address2)

            cy.get('#country').select(data.country)    

            cy.get('#state').type(data.state)
            cy.get('#city').type(data.city)
            cy.get('#zipcode').type(data.zipcode)
            cy.get('#mobile_number').type(data.number)

        })
    })
})