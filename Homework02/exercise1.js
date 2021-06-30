// - Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// - Print the decimal value of each fraction on a new line with  places after the decimal.

arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
     let positive = 0;
     let negative = 0;
     let zero = 0;

     if ( (arr.length > 0) && (arr.length <= 100) ) {
        arr.forEach( (item) => {
            if (item > 0) {
               positive++;
            } else if (item < 0) {
               negative++; 
            } else {
               zero++;
            };   
            return item;      
    }); 
  };

console.log(positive / arr.length);
console.log(negative / arr.length);
console.log(zero / arr.length);      
};

plusMinus(arr);


//https://www.hackerrank.com/challenges/plus-minus/problem