
const arr = [1, 2, 3, 4, 5];


function miniMaxSum(arr) {
    var arr1 = arr.slice();
    var arr2 = arr.slice();
    
    var arrMin = arr1.sort( (a, b) => {return a - b});
    arrMin.pop();
    
    var arrMax = arr2.sort ( (a, b) => {return b - a});
    arrMax.pop(); //remove the last item
    
    var getSum = (a, b) => {return a + b};
    var result1 = arrMin.reduce(getSum);
    var result2 = arrMax.reduce(getSum);
    
    console.log(`${result1} ${result2}`);
};

miniMaxSum(arr);
 

//https://www.hackerrank.com/challenges/mini-max-sum/problem

