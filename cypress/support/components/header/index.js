import { el } from "./elements"

const Header = {

   goToSignup: function(){
    cy.get(el.signupButton).click()
    cy.get(el.signupForm).should('be.visible')
   }

}

export default Header