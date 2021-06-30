
let numbers = [13, 35, 52, 45, 15, 14, 13, 435, 16, 15, 12, 43, 634, 65, 35, 56, 35, 5, 16, 56];
let breakPoint = 25;

let smallNumbers = numbers.filter (function(num) { 
    return num < breakPoint;  
});
    console.log ('Smaller than 25: ' + smallNumbers);
    
//
let largeNumbers = numbers.filter (function(num) { 
    return num > breakPoint;
});

console.log ('Larger than 25: ' + largeNumbers);


//

let functionToFilterNumbers = function(num){
	return num > 5;
}
let filtered = numbers.filter(functionToFilterNumbers);
console.log(filtered);



