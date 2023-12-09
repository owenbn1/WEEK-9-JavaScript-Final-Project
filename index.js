
// made a class card that has the properties of rank suit and value
class Card {
  constructor(rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
}
// made another class that builds the deck of cards with value 
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

  //made a shuffle method to randomly disorganized the array of this.cards 
  shuffle(){
    for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
  }
  //deal method allows the this.cards array to be split into two different variables
  deal(){
    let player1Cards = this.cards.slice(0,26);
    let player2Cards = this.cards.slice(26);

    //in order to have two players we have to create a variable inside the class player
    //assign it to have their own cards
    let player1 = new Player();
    player1.cardsOnHand = player1Cards;

    let player2 = new Player();
    player2.cardsOnHand = player2Cards;

    return [player1, player2];

  }
}

// the class player has an array property that holds the players cards
// also has an point property that gives points to the player for winning rounds
class Player {
    constructor(){
        this.cardsOnHand =[];
        this.points = 0;
       
    }
//the pop method allows the card on hand to be removed as soon as its been used
    playCard() {
        return this.cardsOnHand.pop();
    }
}

// game class holds the player 1 and player 2 properties
class Game {
    constructor(player1,player2){
        this.player1 = player1;
        this.player2 = player2;
    }
    // rounds method plays the players card in the first array and then removes the after 
    rounds(){
        let playingCard1 =this.player1.playCard();
        let playingCard2 =this.player2.playCard();

        console.log (`Player 1 pulled a ${playingCard1.rank} of ${playingCard1.suit}`);
        console.log (`Player 2 pulled a ${playingCard2.rank} of ${playingCard2.suit}`);

        //made an if statement that gives points to the player the hold the largest value card
        if(playingCard1.value > playingCard2.value){
            console.log("Player 1 won the round!");
            this.player1.points++;
        }else if (playingCard1.value < playingCard2.value){
            console.log("Player 2 won the round!");
            this.player2.points++;

        //and else that doesn't give any to the players if they tie    
        }else {
            console.log("it's a tie!");
        }
    }
    //playGame method is a for loop that plays the players card 26 times 
    // thats also counts which rounds the game is at
    playGame(){
        for(let i = 0; i < 26; i++){
            console.log(`Round ${i + 1}`);
            this.rounds();
            console.log("Player 1 score: " + this.player1.points);
            console.log("Player 2 score: " + this.player2.points);
        }

        //if statement that has console.log that shows who is the winner of the war
        if(player1.points > player2.points){
            console.log("Player 1 has won the War");
        } else if (player1.points < player2.points){
            console.log("Player 2 has won the War");
        }else {
            console.log("THE WAR IS A TIE!");
        }
    }
}





//this allows the deck to be created
let deck = new Deck();
//deck is being shuffled
console.log(deck.cards)
deck.shuffle();
//deck then be distributed or deal to each player
let [player1, player2] = deck.deal();

//starts the game 
let game = new Game(player1, player2);
game.playGame();









