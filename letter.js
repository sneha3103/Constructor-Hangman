//constructor function creates an object
//if the Letter constructor has 2 arguments such as (letter, age). then when you type the this.letter = letter.. the letter is the same as the first argument. not the this.letter. so if you change (asds, age), it would be this.letter = asds.
// the point of an argument is for your function to take in an unknown variable
//Letter. js has 4 properties: String value, boolean , and 2 functions
//Every letter will start with an initial value of false
//How do you store a function inside of an object?
function Letter(letter) {
    this.letter = letter;
    //We want every value to start off as false.
    this.showLetter = false;

}

Letter.prototype.displayLetter = function() {
    if(this.showLetter) {
        return this.letter;
    } else {
        return "_";
    }
}

//When it comes into the function, it is called a parameter.

//Changing the guessed value to true or false depending on the letter. For ex: if the letter is "a" and the char is "b", this.showLetter would remain false. If the letter is "a" and the char is "a", we want the this.showLetter to evaluate to true.

//3 equals signs is for conditionals.
Letter.prototype.checkLetter = function(char) { 
   if(char.toLowerCase() === this.letter.toLowerCase()) {
       this.showLetter = true;
   }

    
}

module.exports = Letter;