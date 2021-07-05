let array = [1, 2, 3, 4, 5];


function simpleArraySum(array) {
    var total = 0;
    for (var i in array) {
        total += array[i];
    }
    return total;
}


const sum = simpleArraySum(array);
console.log(sum);

// https://www.hackerrank.com/challenges/simple-array-sum/problem
