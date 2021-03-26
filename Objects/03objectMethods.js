// Reading
/*
JavaScript methods are actions that can be performed on objects.
A JavaScript method is a property containing a function definition
Methods are functions stored as object properties.
*/

'use strict';

const person = {
        firstName: 'john',
        lastName: 'doe',
        age: 30,
        eyeColor: 'blue',
        fullName: function () {
                return `${this.firstName} ${this.lastName}`;
        }
}

console.log(person);
// Accessing Object Method
console.log(person.fullName());



// convert object into Array
const myArr = Object.values(person);
myArr.fullName;

