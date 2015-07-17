'use strict';

var Series = function(string){
  this.digits = string.split("").map(Number);
};

Series.prototype.slices = function(number){
  if (number > this.digits.length) {
    throw new Error ("Slice size is too big.");
  }
  else {
    return this.digits.slice(0,number);
  };
};

// if number = 1, turn into an array of one each 
// iterate over each number in a string and create an array starting at that number with length that is pre-determined as long as length suits the condition