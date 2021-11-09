//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const add = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
// Step 1. y=10 so 0+10 runs.  Step 2. x=10 so 10+10 runs.
var addToTen = addTo(10) //^ see above
addToTen(3) //by the time we get here we have 20 so 3+20 runs
//23

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//What are the two elements of a pure function?
