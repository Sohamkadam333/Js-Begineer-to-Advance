// Javasript Properties
/*
JavaScript Properties
Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.
*/

const person = {
        firstName: 'john',
        lastName: 'doe',
        age: 30,
        eyeColor: 'black'
}

// Accessing Properties

// objectName.property 
console.log(person.firstName);
// objectName["property"]
console.log(person['lastName']);
// objectName[expression]
let x = 'age';
console.log(person[x]);


// for in loop
for (const key in person) {
        console.log(`${key}:${person[key]}`);
}


// adding new properties
person.nationality = 'English';
console.log(person);


// deleting properties
delete person.nationality;
console.log(person);