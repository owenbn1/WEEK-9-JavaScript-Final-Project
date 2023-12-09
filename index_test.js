let expect = chai.expect;


describe('WAR Game', () => {
    describe('creating cards', () => {
        class Deck {
            constructor() {
              //this array hold the cards
              this.cards = [];
              //made variables to the different suit, ranks and value of a card
              let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
              let ranks = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
              let values ={"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":11,"Q":12,"K":13,"A":14}
          
              //made a for loops through the each suits and assign a rank with its value
              //then pushes out a new element or new card to the this.cards array
              for (let suit of suits) {
                for (let rank of ranks) {
                  this.cards.push(new Card(rank, suit, values[rank]));
                }
              }
            }
        }
        it('should create multiple element and put them in this.cards using the suits, ranks, value',() => {
            let deck = new Deck();
            expect(deck.cards[0]).to.deep.equal({suit: 'Clubs', rank: '2', value:2});

        })
          
    })
})
