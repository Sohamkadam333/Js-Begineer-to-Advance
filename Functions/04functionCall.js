// Reading
/*
The JavaScript call() Method
The call() method is a predefined JavaScript method.

It can be used to invoke (call) a method with an owner object as an argument (parameter).

With call(), an object can use a method belonging to another object.
*/
// call method Example
const person = {
        fullName: function () {
                return `${this.firstName} ${this.lastName}`;
        }
}

const person1 = {
        firstName: 'john',
        lastName: 'doe'
}

const person2 = {
        firstName: 'marry',
        lastName: 'smith'
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));

// call method with Arguments
const newPerson = {
        fullName: function (city, country) {
                return `${this.firstName} ${this.lastName} ${city} ${country}`;
        }
};

const newPerson1 = {
        firstName: 'harry',
        lastName: 'potter',
        city: 'Anagar',
        country: 'india'
};

console.log(newPerson.fullName.call(newPerson1, 'Oslo', 'Norway'));