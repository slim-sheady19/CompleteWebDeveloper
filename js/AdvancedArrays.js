
//ADVANCED ARRAYS

const array = [1, 2, 10, 16];

//below is how we create a new array that doubles each element of the above array
const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2);
})

//MAP
//we can use map method to make this easier
//map expects a return expression
//map does not produce 'side effects' because of return
// const mapArrayDoubled = array.map(num => {
//     return num * 2;
// })
//we can write this whole function inline as well
const mapArrayDoubled = array.map(num => num * 2);

console.log('array', array);
console.log('mapArrayDoubled', mapArrayDoubled);

//FILTER
//below the filter method compares each element num in array to 5 and adds to filterArray if true
//remember we are skipping the return keyword as in previous example
const filterArray = array.filter(num => num > 5);
console.log('filter array', filterArray);

//REDUCE        https://www.w3schools.com/jsref/jsref_reduce.asp
//we add an input paramater for reduce, inbelow case we set to 0 as default value
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
//returns 29 because in original array 3 + 26
//change the reduce input to 5 and it becomes 34