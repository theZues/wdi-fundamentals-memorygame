

let cards = [
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

let cardsInPlay = [];

function createBoard() {
	for (let i = 0; i < cards.length; i++){
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
			}
};

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	}
		else {
		alert("sorry, try again");
		}

}

function flipCard() {
	let cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src",cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

};






createBoard();







/*  My first version of if statement

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	}
		else if	(cardsInPlay[0] !== cardsInPlay[1]){
			alert("sorry, try again");
		}
}

*/