
let fruits = ['Strawberry', 'Blueberry', 'Cherry', 'Raspberry', 'Blackberry', 'Watermelon', 'Pomegranate', 'Cranberries'];

fruits.forEach(forest);
function forest (item, index, array) { 
    // console.log(item);
    console.log(item, index);
    // console.log(item, index, array);
}

// //
let arr = [1, 'two', 2, 'three', 4, 'five'];
arr.forEach (item => console.log (item) );

//

let array = [5, 4, 1, 2, 0, 5];
array.forEach ( ( e, i) => { //ovaa funkcija prima povekje parametri, 1, 2 ili 3 parametri, ako primi 1 drugite gi gleda kako undefined
 console.log ('On ' + i + ' position is the number ' + e); 
    });
    