// let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; 

let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
        // // 3  4  21  36  36  36  36 36  36  42 


function breakingRecords(scores) {
    let minResult = scores[0];
    let maxResult = scores[0];
    
    let minRecord = 0;
    let maxRecord = 0;
    
    
    for (const score of scores) {
        if (score > maxResult) {
            maxResult = score;
            maxRecord++;
        }
        else if (score < minResult) {
            minResult = score;
            minRecord++;
        }
    }
    return [maxRecord, minRecord];
}; 

const records = breakingRecords(scores);
console.log(records);





//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem


