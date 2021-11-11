
const basket = ['apples', 'oranges', 'grapes'];

//Iterating - arrays, strings.  similar to auto in C++
for (item of basket) {
    console.log(item);
}

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//for in - enumerating over the properties of objects
for (item in detailedBasket) {
    console.log(item);
}

//if we tried to use for of with Object, we would get error because it's not iterable
//for in works with arrays because an array is structured similarly to an object's properties