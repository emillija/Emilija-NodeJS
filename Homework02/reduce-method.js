
// let array = [4, 34, 6, 645, 756, 65, 98, 98, 25, 24, 16, 2, 0, 5];
// let sum = array.reduce ( ( acc, curr ) => {return acc + curr}); 
// console.log(sum); 

// // 

let numbers = [1, 2, 3, 4];
let add = (a, b) => a + b;
let result = numbers.reduce(add);
console.log(result);


//

let array = ['oranges', 'apples', 'cucumbers', 'tomatoes'].reduce(
    (a, b) => a + " " + b, " We have: ");
console.log(array);