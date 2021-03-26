// function declaration
function add(x, y) {
        return x + y;
}
console.log(add(3, 4));

// function Expession
const mull = function (x, y) {
        return x * y;
}
console.log(mull(3, 4));


// function cunstructor
const sub = new Function('a', 'b', 'return a-b');
console.log(sub(10, 5));

// same as above
const sub1 = function (a, b) { return a - b };
console.log(sub1(10, 7));


// self Invoking function or Immediately Invoking Function;
(function () {
        console.log('im self invoking');
})();


// Immediately Invoking function Expression
const result = (function () {
        console.log('Immediately Invoking Function Expression');
        return 10 * 20;
})();

console.log(result);

// functions are objects
function myFunction(a, b) {
        return arguments.length;
}
console.log(myFunction(10, 20));


// Normal function
const multiply = function (x, y) {
        return x * y;
}
console.log(multiply(10, 20));

// arrow function
const multiply1 = (x, y) => (x * y);
// const multiply1 = (x, y) => { return (x * y) };
console.log(multiply1(10, 200));
