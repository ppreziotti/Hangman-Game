// Creates an array that will hold all of the words to be used in the game 
var wordArray = ["guitar", "bass", "drums", "keyboard", "synthesizer", "saxophone", 
	"organ", "fiddle", "dobro", "harpsichord", "mandolin", "banjo", "flute", 
	"trombone", "trumpet", "piano", "cello", "harmonica", "tuba", "clarinet"];

// Creates variables that will display game information 
// lettersGuessed and chosenWord are empty arrays to which letters will be pushed
var wins = 0;
var guessesRemaining = 6;
var lettersGuessed = [];
var chosenWord = [];

// Creates a function for picking and displaying the word in play
function newWord() {
	
	// Picks a random value from wordArray to be used as the word for the current round 
	randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	// Sets guesses back at 6 (for starting new round) and displays the value on the page
	guessesRemaining = 6;
	document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
	// Clears the letters guessed display on the page
	lettersGuessed = [];
	document.getElementById("letters-guessed").innerHTML = "Letters Guessed: ";
	// Clears the chosenWord array
	chosenWord = [];
	// Loops through the current word and stores each letter as an underscore in the chosenWord array
	for (var i = 0; i < randomWord.length; i++) {
		chosenWord[i] = "_";
	}
	// Converts the chosenWord array to a string without commas and displays it in the word-space heading
	document.getElementById("word-space").innerHTML = chosenWord.join(" ");

}

// If the user wins, win count increases by 1, a win alert is shown, the win count is displayed 
// on the page, and a new game begins
function winGame() {

	wins++;
	document.getElementById("win-count").innerHTML = "Wins: " + wins;
	alert("You guessed the word correctly! Press OK to star a new round.");
	newWord();

}

// If the user loses, a lose alert is shown and then a new game begins
function loseGame() {

	alert("You ran out of guesses. The word was " + randomWord + ". Press OK to start a new round.");
	newWord();

}

// Runs the newWord function
newWord();

// Creates a function that logs the key the user presses and then runs the game's logic
document.onkeyup = function() {

	// Pulls the letter from the user's key input and converts to lower case (if necessary)
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Loops through the randomWord checking for the letter guessed by the user
	for (var i = 0; i < randomWord.length; i++) {

		// Only checks the word if the user input was a letter
		if (/^[a-z ]+$/.test(userGuess)) {

			// If the word contains the guessed letter, it will replace the underscore and appear on the page
			if (randomWord[i] === userGuess) {
				chosenWord[i] = randomWord[i];
				document.getElementById("word-space").innerHTML = chosenWord.join(" ");
			}

			// If the word does not contain the letter guessed AND the letter has not already been guessed,
			// Guesses Remaining decreases by one and the letter appears in the Letters Guessed area
			if (randomWord.indexOf(userGuess) === -1 && lettersGuessed.indexOf(userGuess) === -1) {
				guessesRemaining--;
				document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
				lettersGuessed.push(userGuess);
				document.getElementById("letters-guessed").innerHTML = "Letters Guessed: " + lettersGuessed.join(", ");	
			}

		}

	}

	// If the user guesses the word correctly (no underscores are left), the user wins and the 
	// winGame function is called
	if (chosenWord.indexOf("_") === -1) {
		setTimeout(winGame, 100);
	}

	// If the user runs out of guesses, the user loses and the loseGame function is called
	if (guessesRemaining === 0) {
		setTimeout(loseGame, 100);
	}

}