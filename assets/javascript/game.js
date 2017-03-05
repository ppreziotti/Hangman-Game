// Creates an array that will hold all of the words to be used in the game //
var words = ["guitar", "bass", "drums", "keyboard", "synthesizer", "saxophone", "organ", "fiddle", "dobro", "harpsichord"];

// Picks a random value from the words array to be used as the word for the current round //
var randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);
console.log(randomWord[0]);
console.log(randomWord[randomWord.length - 1])
console.log(randomWord[6]);

// Creates variables froms the divs that will display game information //
var wordDiv = document.getElementById("word-display");
var guessesRemaining = document.getElementById("guesses-remaining");
var lettersGuessed = document.getElementById("letters-guessed");
var guesses = 6;

document.querySelector("#word-display").innerHTML = randomWord;
