// 1. create a counter to show the number of guesses left 
//      * if they guess correctly don't change counter
// 2. create an array of strings with a list of names/words 
//      * add a photo 
//      * add a hint 
// 3. show the letter just guessed
//      * show the letter on the "row" if guessed correctly
// 4. Add wins counter
//      * if player wins increase count by one
// 5. Add lose counter
//      * if the player loses increase the count by one
// 6. Call reset once guesses run out/player guesses wor right
src = "https://code.jquery.com/jquery.js"

var names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var currentLetter = "";

var unansweredString = "";

var guessedLetters = [];

var guesses = 10;

var ranNum = 0;

var winNum = 0;

var loseNum = 0;

document.addEventListener("keydown", function(e) {
    var letter = e.key;

    for (let i = 0; i < guessedLetters.length; i++) {
        if (letter === currentLetter && letter !== guessedLetters[i]) {
            winNum++;
        } else {
            guessedLetters += letter;
            loseNum++;
        }
    }
    guesses--;
});

currentName = names[ranNum];

for (let unansweredWord = 0; unansweredWord < array.length; unansweredWord++) {
    unansweredString += "_ "

}

for (let guesses = 0; guesses < 10; guesses++) {


}