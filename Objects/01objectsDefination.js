// Reading
/*
In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.
*/


// Object Defination


// ways to create object

// Using object literal
const person = {
        firstName: 'john',
        lastName: 'doe',
        age: 30,
        eyeColor: 'blue'
};
console.log(person);

// using new keyword
const person2 = new Object();
person2.firstName = 'kane';
person2.lastName = 'smith';
person2.age = 40;
person2.eyeColor = 'black';
console.log(person2);


// javascript objects are mutable
/*
Objects are mutable: They are addressed by reference, not by value.
If person is an object, the following statement will not create a copy of person:
The object x is not a copy of person. It is person. Both x and person are the same object.
var x = person;  // This will not create a copy of person.
Any changes to x will also change person, because x and person are the same object.
*/

const x = person;
x.firstName = 'Arjun';
console.log(x);