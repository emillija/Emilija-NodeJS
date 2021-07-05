
// First kangaroo starts at x1 and jumps at v1
let x1 = 0; // location 1
let v1 = 3; // meters per jump
// Second kangaroo starts at x2 and jumps at v2
let x2 = 4; // location 2
let v2 = 2; // meters per jump



function kangaroo(x1, v1, x2, v2) {

    let complete = false;

    for (let i = 0; i <= 10000; i++) {
        x1 += v1;
        x2 += v2;
        if(x1 == x2) {
            complete = true;
        };
    };
    
    return complete ? 'YES' : 'NO'
};


let sameLocation = kangaroo(x1, v1, x2, v2);
console.log(sameLocation);





// function kangaroo(x1, v1, x2, v2) {

//     if (x1 == x2) return 'YES';
//     if (x1 > x2) return 'NO';
//     if (v2 > v1) return 'NO';
//     if (v1 == v2) return 'NO';

//     x1 += v1;
//     x2 += v2;

//     return kangaroo(x1, v1, x2, v2);
// };



// let sameLocation = kangaroo(x1, v1, x2, v2);
// console.log(sameLocation);



//https://www.hackerrank.com/challenges/kangaroo/problem
