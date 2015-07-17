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
    var newArray = [];
    for (var i=0; i < myArray.length-number+1; i++){
      // myArray.slice(i,number);
      newArray.push(myArray.slice(i,number+i));
    } // ends iterating
    return newArray;
  } // ends else
}; // ends Series.prototype.slices

// if number = 1, turn into an array of one each 
// iterate over each number in a string and create an array starting at that number with length that is pre-determined as long as length suits the condition