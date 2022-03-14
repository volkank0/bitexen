Cypress.Commands.add("CoinSelectorWrite", (coin = Cypress.env('coinlist')) => {
    const dizi = []
    for (let y = 1; y < 59 ; y++) {
        cy.get(".jss193 > div:nth-of-type("+y+") .jss199")
        .invoke('text').then((coinname) => {
        dizi.push(coinname)
        cy.writeFile("/home/vk/Masaüstü/bitexen/bitexen/cypress/fixtures/coinlistWrite.json",dizi)
        cy.log(coinname)
    })
    }

})