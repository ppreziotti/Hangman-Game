// Creates an array that will hold all of the words to be used in the game 
var wordArray = ["guitar", "bass", "drums", "keyboard", "synthesizer", "saxophone", "organ", "fiddle", "dobro", "harpsichord"];

// Creates variables that will display game information 
// lettersGuessed and chosenWord are empty arrays to which letters will be pushed
var wins = 0;
var guessesRemaining = 6;
var lettersGuessed = [];
var chosenWord = [];

// Creates a function that picks a random word from wordsArray, puts guesses remaining back at 6 and clears letters guessed
function newWord() {
	
	// Picks a random value from wordArray to be used as the word for the current round 
	randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	guessesRemaining = 6;
	// Displays the amout of guesses remaining in the appropriate heading
	document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
	lettersGuessed = [];
	document.getElementById("letters-guessed").innerHTML = "Letters Guessed: ";

}

function displayWord() {

	// Clears the chosenWord array
	chosenWord = [];
	// Loops through the current randomWord and stores each letter as an underscore in the chosenWord array
	for (var i = 0; i < randomWord.length; i++) {
		chosenWord[i] = "_";
	}
	// Converts the chosenWord array to a string without commas and displays it in the word-space heading
	document.getElementById("word-space").innerHTML = chosenWord.join(" ");
	
}

newWord();
displayWord();

// Creates a function that logs the key the user presses and then runs the game's logic
document.onkeyup = function() {

	// Pulls the letter from the user's key input and converts to lower case (if necessary)
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Loops through the randomWord checking for the letter guessed by the user
	for (var i = 0; i <= randomWord.length; i++) {

		// Only checks the word if the user input was a letter
		if (/^[a-z ]+$/.test(userGuess)) {

			// If the user's guessed letter is in the word, it will replace the underscore in the chosenWord array and be displayed on the page
			if (randomWord[i] === userGuess) {
				chosenWord[i] = randomWord[i];
				document.getElementById("word-space").innerHTML = chosenWord.join(" ");
			}

			// If the user's guessed letter is not in the word and has not already been guessed:
			// guessesRemaining decreases by one, the guessed letter is pushed to the lettersGuessed array, and then displayed
			if (randomWord.indexOf(userGuess) === -1 && lettersGuessed.indexOf(userGuess) === -1) {
				guessesRemaining--;
				document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
				lettersGuessed.push(userGuess);
				document.getElementById("letters-guessed").innerHTML = "Letters Guessed: " + lettersGuessed.join(", ");	
			}
			
			// If the user guesses the word correctly (no underscores are left), wins increases by 1, a win alert is shown,
			// and the win count is displayed
			if (chosenWord.indexOf("_") === -1) {
				wins++;
				alert("You guessed the word correctly! Press OK to star a new round.");
				document.getElementById("win-count").innerHTML = "Wins: " + wins;
				newWord();
				displayWord();
			}

			// If the user runs out of guesses, the game ends and a new randomWord is generated
			if (guessesRemaining === 0) {
				alert("You ran out of guesses. The word was " + randomWord + ". Press OK to start a new round.");
				newWord();
				displayWord();
			}

		}

	}

}