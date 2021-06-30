
let fruits = ['Strawberry', 'Blueberry', 'Cherry', 'Raspberry', 'Watermelon', 'Blackberry', 'Pomegranate', 'Cranberry'];

let fruitsLength = fruits.map( function(item) { 
     return item.length; 
});

console.log(fruitsLength); 

// //

let array = [6, 7, 15, 22, 45];
let arrayMult = array.map (function numMultIdx (num, index) {
  return num * index;
})
console.log(arrayMult);

//

let array = [5, 4, 1, 2, 0, 5];
let array2 = array.map ( element => element * 2);

 console.log(array2);