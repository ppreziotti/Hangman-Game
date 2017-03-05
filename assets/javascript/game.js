// Creates an array that will hold all of the words to be used in the game //
var words = ["guitar", "bass", "drums", "keyboard", "synthesizer", "saxophone", "organ", "fiddle", "dobro", "harpsichord"];

// Picks a random value from the words array to be used as the word for the current round //
var randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);

// Creates an empty array to be used for storing the chosen word //
var wordDisplay = [];

// Creates variables that will display game information (wins, guesses remaining, and letter guessed) //
var wins = 0;
var guessesRemaining = 6;
var lettersGuessed = "";

// Loops through the current randomWord and shows each letter as an underscore in the wordDisplay array //
for (var i = 0; i < randomWord.length; i++) {
	wordDisplay[i] = "_";
}

// Converts the wordDisplay array into a string and displays it on the webpage (all letters shown as underscores for now) //
document.getElementById("word-space").innerHTML = wordDisplay.toString();

// Creates a function to log the key the user presses, converts it to lowercase (if necessary) and turns it into the user's guess //
document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	if (randomWord.indexOf(userGuess) === -1) {
		guessesRemaining--;
		lettersGuessed = lettersGuessed + userGuess;
	}

	console.log(guessesRemaining);
	console.log(lettersGuessed);
}

