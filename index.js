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


        //Tried to create an if statement to say that if the user has guessed all of the letters in the letter object correctly, then to console out: You have guessed right.
        // if (currentWord.isCorrect(answers.promptGuess)=== stringWord) {
        //     console.log("You guessed correct!");
        //     promptUser();
        // }


       


    });

}


promptUser();

//* TESTING CODE */
// currentWord.testLetter("A");
// currentWord.testLetter("i");
// currentWord.testLetter("b");

// console.log(currentWord.createString());
//testLetter only tests each single character and sees if it matches
//Create string actually returns the string of the word to us

