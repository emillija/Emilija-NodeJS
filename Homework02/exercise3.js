// - This is a staircase of size n:

//    #
//   ##
//  ###
// ####
// - Its base and height are both equal to n. 
// - It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// - Write a program that prints a staircase of size n.


let n = 6;

function stairCase(n) {
    for( let i = 1; i <= n; i++ ) {
        let spaces = ' ';
        let symbols = '#';
        console.log( (spaces.repeat(n-i)) + (symbols.repeat(i)) );
    }
}
stairCase(n);


//https://www.hackerrank.com/challenges/staircase/problem