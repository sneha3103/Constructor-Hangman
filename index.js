var word = require("./word.js");
var inquirer = require("inquirer");

var wordBank = ["Dog" , "Cat" , "Elephant" , "Monkey" , "Hyena" , "Giraffe" , "Lion"];
var currentWord = new word(getRandomWord());

var guessesRemaining = 4;

 //console.log(wordBank[num]);

//The variable of num will return any number between 0-6
function getRandomWord () {
    var num = Math.floor(Math.random() * 7 + 1);
    return wordBank[num];
    
}

currentWord.testLetter("A");
currentWord.testLetter("i");
currentWord.testLetter("b");

console.log(currentWord.createString());


