
let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

console.log(obj1);

obj2.password = 'password';

console.log(obj1);
//password is changed to password on obj1 because we instantiated obj as a ref to obj1.  they are pointing to the same address in memory
console.log(obj2);

let obj = {a: 'a', b: 'b', c: 'c'}
let clone = Object.assign({}, obj); //here we copy it as a new object, so anything changed in obj does not affect clone

//we want to be aware of shallow vs deep copying - sometimes an object contains data that can also contain data.
//a shallow copy will only copy the first layer of data 
//use deep copy to ensure the whole object is a new copy instead of a reference to memory
