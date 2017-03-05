// Creates an array that will hold all of the words to be used in the game //
var words = ["guitar", "bass", "drums", "keyboard", "synthesizer", "saxophone", "organ", "fiddle", "dobro", "harpsichord"];

// Picks a random value from the words array to be used as the word for the current round //
var randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);
console.log(randomWord[0]);
console.log(randomWord[randomWord.length - 1])
console.log(randomWord[6]);

// Creates an empty array for storing the current word chosen for the game //
var wordDisplay = [];

// Loops through the current randomWord and shows each letter as an underscore in wordDisplay to hide it from the user //
for (var i = 0; i < randomWord.length; i++) {
	wordDisplay[i] = "_";
	document.getElementById("current-word").innerHTML = "Current Word: " + wordDisplay;
}

console.log(wordDisplay);



// Creates variables froms the divs that will display game information //
var guessesRemaining = document.getElementById("guesses-remaining");
var lettersGuessed = document.getElementById("letters-guessed");
var guesses = 6;

