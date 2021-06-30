// - You are in charge of the cake for a child's birthday. 
// - You have decided the cake will have one candle for each year of their total age. 
// - They will only be able to blow out the tallest of the candles. 
// - Count how many candles are tallest.


let candles = [4,4,1,3];

function birthdayCakeCandles (candles) {
    let counter = 0;
    let max = 0; 
    
    for ( let i = 0; i < candles.length; i++ ) {
        let index = candles[i];
        if ( index > max ) {
            max = index;
            counter = 1;
        } else if ( max == index ) {
            counter++;
        };
    };
    return counter;
};
let candle = birthdayCakeCandles(candles); 
console.log(candle); 


//https://www.hackerrank.com/challenges/birthday-cake-candles/problem