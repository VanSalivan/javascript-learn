// System A : he buys a ticket (15 dollars) every time
// System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
// then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

function movie(card, ticket, perc) {
  


}


// movie(500, 15, 0.9) should return 43
//   (with card the total price is 634, with tickets 645)
// movie(100, 10, 0.95) should return 24
//   (with card the total price is 235, with tickets 240)

// System A : 15 * 3 = 45
// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 
// ( = 536.5849999999999, no rounding for each ticket)