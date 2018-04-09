function Letter(letter) {
    this.letter = letter;
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
Letter.prototype.checkLetter = function(char) { 
   if(char === this.letter) {
       this.showLetter = true;
   }

    
}

module.exports = Letter;