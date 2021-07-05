let n = 5; // the number of pages in the book
let p = 4; // the page number to turn to

function pageCount(n, p) {

    var frontFlip = Math.floor(p/2); // 4 : 2 = 2
    var backFlip = Math.floor((n/2) - frontFlip); // 5 : 2 = 2,5 - 2 = 0,5 => Mathfloor(0,5) = 0
    var result = Math.min(frontFlip, backFlip); // Min 2, 0 = 0 
    
    return result; // 0
};

let book = pageCount(n, p);
console.log(book);





// let n = 6;
// let p = 2;

// function pageCount(n, p) {
  
//   if ( (n - p) <= (p - 1) ) {
//     return Math.floor((n - p) / 2);
//   } else {
//     return Math.floor(p / 2);
//   };

// };

// let book = pageCount(n, p);
// console.log(book);



//https://www.hackerrank.com/challenges/drawing-book/problem 