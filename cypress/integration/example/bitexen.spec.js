///<reference types = "Cypress"/>

import path from "../../pageObjectModel/path"
const pathControl = new path()
beforeEach(() => {
    cy.viewport(1920, 1080)
  
  })
  context("Bitexen", () => {

    const index = "https://www.bitexen.com/"
    const BTXNCoin = "https://www.bitexen.com/btxn-coin-information"
    const preSale = "https://www.bitexen.com/ieo"
    const signIn = "https://www.bitexen.com/login"
    const signUp = "https://www.bitexen.com/sign-up"
    const competitions = "https://www.bitexen.com/competitions"

    it("Go Bitexen", () => {
        cy.visit(index)
        cy.url().should('include', index)
    })
    it("BTXN Coin", () => {
        pathControl.btxnCoinPath().click()
            .url().should('include', BTXNCoin).wait(1000)
            .go(-1)
    })
    it("Pre-Sale", () => {
        pathControl.preSalePath().click()
            .url().should('include', preSale).wait(1000)
            .go(-1)
    })
    it("Announcement", () => {
        pathControl.announcementPath().click()
        cy.get(".jss103").should('be.visible')
        cy.get(".jss105").should('be.visible')
        cy.get("div:nth-of-type(1) > .jss105").click().wait(500)
        cy.get('.jss512 > .MuiSvgIcon-root').wait(500).click({ force: true })
        cy.get('.jss515').wait(500).click({ force: true })
        cy.get('.jss517 > svg > path').wait(500).click({ force: true }).wait(500)
    })

    //recaptha yüzünden giriş ve kayıt ol işlemini tamamlayamıyor.
    it("Sign In", () => {
        cy.get(".jss11").click()
        cy.url().should('include', signIn)
        cy.get("#userName").type('volkan@test.com', { delay: 100 }).should('have.value', 'volkan@test.com')
        cy.get("#password").type('bitexen').should('have.value', 'bitexen').wait(500)
        //cy.get('.jss504 > svg').click({ force: true })
        //  cy.get('.jss499 > .MuiButtonBase-root').click().wait(1000)
        // cy.get('.jss491').click().wait(1000).go('back')
        cy.go(-1)
    })


    it("Bitexen Register", () => {
        cy.get('#bootstrap-input').type("volkan@mail.com").should("have.value", "volkan@mail.com")
        .scrollIntoView({ easing: 'linear' }).wait(2000)
        cy.get('.d-flex > .MuiButtonBase-root > .MuiButton-label').click().wait(1000)
        cy.url().should("include", signUp)
        cy.get('#firstName').type("VOLKAN", { delay: 100 }).should("have.value", "VOLKAN")
        cy.get('#lastName').type("KARAGÖL", { delay: 100 }).should("have.value", "KARAGÖL")
        cy.get('#mail').type("volkan@test.com", { delay: 100 }).should("have.value", "volkan@test.com")
        cy.get('#password').type("Bitexen", { delay: 100 }).should("have.value", "Bitexen")
        cy.get(':nth-child(8) > .jss691 > .jss694').click()
        cy.get('#confirmPassword').type("Bitexen", { delay: 100 }).should("have.value", "Bitexen")
        cy.get(':nth-child(1) > .jss700 > .jss701 > svg').click()
        cy.get(':nth-child(2) > .jss700 > .jss701 > svg').click()
        cy.get(':nth-child(3) > .jss700 > .jss701 > svg').click()
        cy.get(':nth-child(4) > .jss700 > .jss701 > svg').click()
            .wait(1000)
        //cy.get('.jss675 > .MuiButtonBase-root').click({ force: true }).wait(1000)
        //  cy.get('.jss643').should("have.value","Kaydınızı tamamlayabilmeniz için size göndermiş olduğumuz e-postada yer alan linke tıklayarak onay vermeniz gerekmektedir.")
        cy.go("back")
        cy.url().should("include", index)
    })

    it("Coin Slider", () => {
        cy.get('.jss726 > :nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').scrollIntoView({ easing: 'linear' }).click()
            .wait(300)
        cy.get('.jss726 > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').scrollIntoView({ easing: 'linear' }).click()
            .wait(300)
    })
    it("Change Languge", () => {
        cy.get('.MuiFormGroup-root > :nth-child(2)').scrollIntoView({ easing: 'linear' }).wait(2000).click()
        cy.get('[style=" display: flex; align-items: center; margin-left: -12px;"]').scrollIntoView({ easing: 'linear' }).wait(2000)
    })
    it("Career", () => {
        cy.visit("https://jobs.bitexen.com/").wait(1000)
        cy.get(':nth-child(5) > .style_link__1gKt1').click()
    })
})
