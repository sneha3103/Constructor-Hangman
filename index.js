var word = require("./word.js");
var inquirer = require("inquirer");

var wordBank = ["Dog", "Cat", "Elephant", "Monkey", "Hyena", "Giraffe", "Lion"];
var stringWord = getRandomWord();
var currentWord = new word(stringWord);

var guessesRemaining = 4;

//console.log(wordBank[num]);

//The variable of num will return any number between 0-6
function getRandomWord() {
    var num = Math.floor(Math.random() * 7 + 1);
    return wordBank[num];

}

function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            name: "promptGuess",
            message: "Guess a letter"


        }
    ]).then(function(answers) {
        console.log(answers.promptGuess);

        currentWord.testLetter(answers.promptGuess);
        console.log(currentWord.createString());
        console.log("Guesses Remaining: " + guessesRemaining);

       
        if(stringWord.includes(answers.promptGuess)) {
            promptUser();
            // console.log("correct");
        } else {
            guessesRemaining--;

            if(guessesRemaining === 0) {
                console.log("No more guesses. Try again");
                stringWord = getRandomWord();
                currentWord = new word(stringWord);
                guessesRemaining = 4;
                promptUser();
                
                
            } else {
                promptUser();
            }
            // console.log("not correct");
        }

       


    });

}
// var word = 'monkey';
// word.includes('e'); // return true if word has 'e' else return false
// function noMoreGuesses() {
//     if (guessesRemaining === 0) {
//         console.log("Try again")
//         guessesRemaining = 4;
//     } else if (guessesRemaining !== 0) {
//         console.log("Yay you guessed right!");
//     }
// }




// currentWord.testLetter("A");
// currentWord.testLetter("i");
// currentWord.testLetter("b");



promptUser();

// console.log(currentWord.createString());
//testLetter only tests each single character and sees if it matches
//Create string actually returns the string of the word to us


