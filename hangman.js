var POSSIBLE_WORDS = ["obdurate", "verisimlitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];

var word = "";
var num = 0;
var gameOvr = true;

function newGame() {
    var randomIdx = parseInt(Math.random() * (POSSIBLE_WORDS.length));

    word = POSSIBLE_WORDS[randomIdx];
    guesses = "";
    num = 0;
    gameOvr = false;

    updatePage();
}
function guessLetter(){

    if(!gameOvr){
        var input = document.getElementById("guess");
        var letter = input.value;

        guesses += letter;

        updatePage();
    }
}
function updatePage(){
    var guessesArea = document.getElementById("guesses");
    guessesArea.innerHTML = "Guessed Letters: " + guesses;

    var counter = 0;

    var clueString = "";
    if(word.indexOf(guesses[guesses.length - 1]) == -1) {
        num ++;
        pic = document.getElementById("pic");
        switch(num) {
            case(1):
                pic.src = "img/hangman6.gif";
                break;
            case(2):
                pic.src = "img/hangman5.gif";
                break;
            case(3):
                pic.src = "img/hangman4.gif";
                break;
            case(4):
                pic.src = "img/hangman3.gif";
                break;
            case(5):
                pic.src = "img/hangman2.gif";
                break;
            case(6):
                pic.src = "img/hangman1.gif";
                break;
            case(7):
                pic.src = "img/hangman0.gif";
                guessesArea.innerHTML = "LOST";
                gameOvr = true;
                break;
        }
    }

    for(var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);

        if(guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
            counter ++;
        } else {
            clueString += "_ ";
        }
    }

    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    if(counter == word.length){
        gameOvr = true;
        guessesArea.innerHTML = "WON";
    }

}