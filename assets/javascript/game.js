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
document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;

// Creates a function to log the key the user presses and then runs the game's logic
document.onkeyup = function() {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	// Loops through the randomWord checking for the letter guessed by the user
	for (var i = 0; i < randomWord.length; i++) {
	
		// If the user's guessed letter is in the word, it will replace the underscore in the chosenWord array and displayed on the page
		if (randomWord[i] === userGuess) {
			chosenWord[i] = randomWord[i];
			document.getElementById("word-space").innerHTML = chosenWord.join(" ");
		}

		// If the user's guessed letter is not in the word and has not already been guessed:
		// guessesRemaining decreases by one, the guessed letter is pushed to the lettersGuessed array, and then displayed
		else if (randomWord.indexOf(userGuess) === -1 && lettersGuessed.indexOf(userGuess) === -1) {
			guessesRemaining--;
			document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
			lettersGuessed.push(userGuess);
			document.getElementById("letters-guessed").innerHTML = "Letters Guessed: " + lettersGuessed.toString();
		}

	}

	//console.log(guessesRemaining);
	//console.log(lettersGuessed);

}