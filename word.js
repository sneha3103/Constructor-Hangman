var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    //this.wordLoop equals y. So essentially this.letters is equal to y.
    this.letters = this.wordLoop();
    this.guessedLetter = [];
    this.incorrectGuess = 0;

}

//Create an array of letter objects
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
//A function that returns a string representing the word. This should call the function on each letter object
Word.prototype.createString = function() {
    var x = "";

    for (var i=0; i <this.letters.length; i++) {
        x += this.letters[i].displayLetter() + " ";
    } 
    return x;

}

//check Letter in the Word 
//A function that takes a character as an argument and calls the guess function on each letter object

Word.prototype.testLetter = function(charGuessed) {

    for(var i=0; i<this.letters.length; i++) {

        this.letters[i].checkLetter(charGuessed);
        // console.log(this.letters[i].displayLetter());

    }

    

    // for(var i=0; i<this.letters.length; i++) {
    //     if(this.showLetter = true) {
    //         return this.letter; 
    //     } else {
    //         this.showLetter = false;
    //         return "_";
    //     }
    // }

}


// var x = new Letter("S");
// console.log(x.displayLetter());
// x.checkLetter("T");
// console.log(x.displayLetter());

var testWord = new Word("Testing");
//new word testing returns to an object. type of is an object. 
// testWord.createString();


testWord.testLetter("s");
testWord.testLetter("T");
testWord.testLetter("n");
testWord.testLetter("I");


// console.log(testWord.createString());

module.exports = Word;
