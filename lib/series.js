'use strict';
// '01234' => [0,1,2,3,4]
var Series = function(string){
  this.digits = string.split("").map(Number);
};

Series.prototype.slices = function(number){
  if (number > this.digits.length) {
    throw new Error ("Slice size is too big.");
  }
  else {
    //return this.digits.slice(0,number);
    var myArray = this.digits;
    for (var i=0; i < myArray.length; i++){
      return myArray[i];
    } // ends iterating
  } // ends else
}; // ends Series.prototype.slices

// if number = 1, turn into an array of one each 
// iterate over each number in a string and create an array starting at that number with length that is pre-determined as long as length suits the condition