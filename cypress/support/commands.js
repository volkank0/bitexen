Cypress.Commands.add("CoinSelectorWrite", (coin = Cypress.env('coinlist')) => {
    const dizi = []
    for (let y = 1; y < 59 ; y++) {
        cy.get(":nth-child("+y+") >> .jss229 > .jss230 > .jss231 > .jss232")
        .invoke('text').then((coinname) => {
        dizi.push(coinname)
        cy.writeFile("/home/vk/Masaüstü/bitexen/bitexen/cypress/fixtures/coinlistWrite.json",dizi)
        cy.log(coinname)
    })
    }

})