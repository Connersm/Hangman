var POSSIBLE_WORDS = ["obdurate", "verisimlitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];

var word = "";

function newGame() {
    var randomIdx = parseInt(Math.random() * (POSSIBLE_WORDS.length));

    word = POSSIBLE_WORDS[randomIdx];
    guesses = "";

    updatePage();
}
function guessLetter(){
    var input = document.getElementById("guess");
    var letter = input.value;

    guesses += letter;

    updatePage();
}
function updatePage(){
    var clueString = "";
    for(var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        } else {
            clueString += "_ ";
        }
    }

    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    var guessesArea = document.getElementById("guesses");
    guessesArea.innerHTML = "Guessed Letters: " + guesses;
}