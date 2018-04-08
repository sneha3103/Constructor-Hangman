var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    this.guessedLetter = [];
    this.incorrectGuess = 0;

    for (var i =0; i <this.length; i++) {
        this.letters.push(new Letter(this.word[i]));
    }

}
