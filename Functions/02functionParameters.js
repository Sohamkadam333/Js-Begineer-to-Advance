// function parameters
function myFunction(x, y) {
        if (y === undefined) {
                y = 2;
        }
        return x + y;
}
console.log(myFunction(10));
console.log(myFunction(10, 10));

// same expamle as above in ES6 but with default parameter
function myFunction1(x, y = 200) {
        return x + y;
}
console.log(myFunction1(10));

// The Argument Object

function findMax() {
        let max = 0;
        for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] > max) {
                        max = arguments[i];
                }
        }
        return max;
}

console.log(findMax(1, 1123, 500, 115, 44, 88));
console.log(Infinity);