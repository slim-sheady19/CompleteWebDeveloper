//no more function keyword
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//https://www.w3schools.com/js/js_arrow_function.asp


const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures
//Allows refs to variables from a function to be remembered?
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//Currying
//https://stackoverflow.com/questions/152005/how-can-currying-be-done-in-c
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

multiplyBy5(20);

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);
//https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937


//Currying step-by-step:

    const curriedSum = (a) => (b) => a + b;

//can be rewritten as

    const curriedSum = a => {
      return b => {
        return a + b;
      }
    }

//Here's where it gets a little iffy for me. If we were to find curriedSum(1)(3)  we would have a = 1 due to closure (?),
// so after the first execution we would have something like

    return b => {
      return 1 + b;
    }

//and from there we would return 4.


//As for composing:

    const compose = (f, g) => (a) => f(g(a));
    const add1 = (num) => num + 1;
    const add5 = (num) => num + 5;
    compose(add1, add5)(10)

//We can just think of it similar to algebra where we solve for the inner function first, so it looks like

add1(add(5))(10)

//from there we resolve add5  and get 15. Then we resolve add1  and get 16.