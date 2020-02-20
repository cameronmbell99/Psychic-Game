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

$(document).ready(function() {

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var currentLetter = "";

    var guessedLetters = [];

    var guesses = 0;

    var ranNum = 0;

    var winNum = 0;

    var loseNum = 0;


    document.addEventListener("keydown", function(e) {

        var letter = e.key;

        console.log(letter);

        console.log("inside if statement");
        if (letter === currentLetter) {
            winNum++;
            console.log("inside win for loop");
            reset();
        } else if (guesses === 0) {
            loseNum++;
            reset();
            console.log("inside loses for loop");
        } else if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter);
            console.log("inside guessed for loop");
            console.log(guessedLetters);
            guesses--;
        }

        displayNumbers();
    });

    $("#Header").text("The Psychic Game");

    $("#Question").text("Guess what letter I'm thinking of");

    function displayNumbers() {

        $("#wins").text("Wins: " + winNum);

        $("#loses").text("loses: " + loseNum);

        $("#guessNum").text("Guesses Left: " + guesses);

        $("#guesses").text("Your Guesses so far: " + guessedLetters);

    };
    displayNumbers();
    reset();

    function reset() {

        ranNum = Math.floor((Math.random() * 25));
        guesses = 10;
        guessedLetters = [];

    };

    currentLetter = letters[ranNum];
});