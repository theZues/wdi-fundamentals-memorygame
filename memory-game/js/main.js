

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},

{
	rank: "queen",
	suit: "daimonds",
	cardImage: "images/queen-of-daimonds.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},

{
	rank: "king",
	suit: "daimonds",
	cardImage: "images/king-of-daimonds.png"
}
];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match");
	}
		else {
		console.log("sorry, try again");
		}

}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);

}






flipCard(0);
flipCard(2);
checkForMatch();



/*  My first version of if statement

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	}
		else if	(cardsInPlay[0] !== cardsInPlay[1]){
			alert("sorry, try again");
		}
}

*/