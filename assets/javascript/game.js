/* Creates an object that will hold all of the words to be used in the game */
var word = {
	guitar: ["g", "u", "i", "t", "a", "r"],
	bass: ["b", "a", "s", "s"],
	drums: ["d", "r", "u", "m", "s"],
	keyboard: ["k", "e", "y", "b", "o", "a", "r", "d"],
	synthesizer: ["s", "y", "n", "t", "h", "e", "s", "i", "z", "e", "r"],
	saxophone: ["s", "a", "x", "o", "p", "h", "o", "n", "e"],
	organ: ["o", "r", "g", "a", "n"],
	fiddle: ["f", "i", "d", "d", "l", "e"],
	dobro: ["d", "o", "b", "r", "o"],
	harpsichord: ["h", "a", "r", "p", "s", "i", "c", "h", "o", "r", "d"],
}

var wordDiv = document.getElementById("word-display")
var guessesRemaining = document.getElementById("guesses-remaining");
var lettersGuessed = document.getElementById("letters-guessed");
var guesses = 6;

console.log(word.guitar);

console.log(word.guitar[0]);

for (var i = 0; i < word.length; i++) {

/* Documents the user key input and then runs the logic for the game */
document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();
	console.log(userGuess);
	
	if (word[i].indexof(userGuess) === -1) {
		guesses--;
		guessesRemaining.innerHTML = guesses;
		lettersGuessed.innerHTML = lettersGuessed.innerHTML + userGuess;
	}

}	

}