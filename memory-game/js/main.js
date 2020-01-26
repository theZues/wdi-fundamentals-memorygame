

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped Queen");

let cardTwo = cards[1];

cardsInPlay.push(cardTwo);

console.log("User flipped queen");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	}
		else if	(cardsInPlay[0] !== cardsInPlay[1]){
			alert("sorry, try again");
		}


