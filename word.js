var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    //this.wordLoop equals y. So essentially this.letters is equal to y.
    this.letters = this.wordLoop();
    this.guessedLetter = [];
    this.incorrectGuess = 0;

}


Word.prototype.wordLoop = function() {
    var y = [];

    for (var i =0; i <this.word.length; i++) {
    y.push(new Letter(this.word[i]));
    // console.log("Another test");
    }
    return y;

}

//var x creates string
//return should be the last thing on a function
Word.prototype.createString = function() {
    var x = "";

    for (var i =0; i <this.letters.length; i++) {
        x += this.letters[i].displayLetter();
    } 
    return x;

}


var x = new Letter("S");
console.log(x.displayLetter());
x.checkLetter("T");
console.log(x.displayLetter());


module.exports = Word;
