// Reading
/*
Method Reuse
With the apply() method, you can write a method that can be used on different objects.

The JavaScript apply() Method
The apply() method is similar to the call() method

The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.
*/

// apply() example
const person = {
        fullName: function () {
                return `${this.firstName} ${this.lastName}`;
        }
};

const person1 = {
        firstName: 'john',
        lastName: 'doe'
};

const person2 = {
        firstName: 'marry',
        lastName: 'smith'
};


console.log(person.fullName.apply(person1));
console.log(person.fullName.apply(person2));

// apply() example 2
const newPerson = {
        fullName: function (city, country) {
                return `${this.firstName} ${this.lastName} ${city} ${country}`;
        }
};

console.log(newPerson.fullName.apply(person1, ['Anagar', 'maharashtra']));
console.log(newPerson.fullName.apply(person2, ['kaan', 'jjaa']));


var add = (function () {
        var counter = 0;
        return function () { counter += 1; return counter }
})();


console.log(add());
console.log(add());
console.log(add());
