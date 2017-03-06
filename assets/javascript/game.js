// Creates an array that will hold all of the words to be used in the game 
var words = ["guitar", "bass", "drums", "keyboard", "synthesizer", "saxophone", "organ", "fiddle", "dobro", "harpsichord"];

// Picks a random value from the words array to be used as the word for the current round 
var randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);

// Creates an empty array to be used for storing the chosen word 
var chosenWord = [];

// Creates variables that will display game information 
// lettersGuessed is an empty array that guessed letters will be pushed to
var wins = 0;
var guessesRemaining = 6;
var lettersGuessed = [];

// Loops through the current randomWord and shows each letter as an underscore in the chosenWord array
for (var i = 0; i < randomWord.length; i++) {
	chosenWord[i] = "_";
}

// Converts the chosenWord array to a string without commas
var wordDisplay = chosenWord.join(" ");
console.log(wordDisplay);

// Displays wordDisplay in the html within the word-space id
document.getElementById("word-space").innerHTML = wordDisplay;

// Creates a function to log the key the user presses and converts it to lowercase (if necessary) 
document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	// If the user's guessed letter is not in the word and has not already been guessed:
	// guessesRemaininng decreases by one and guessed letter is pushed to the lettersGuessed array
	if (randomWord.indexOf(userGuess) === -1 && lettersGuessed.indexOf(userGuess) === -1) {
		guessesRemaining--;
		lettersGuessed.push(userGuess);
	}
	
	console.log(guessesRemaining);
	console.log(lettersGuessed);
}

