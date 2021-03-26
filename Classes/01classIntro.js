'use strict';
// Reading
/*
ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

JavaScript Classes are templates for JavaScript Objects.
*/


// class example
class Person {
        constructor(first, last, age, eye) {
                this.firstName = first;
                this.lastName = last;
                this.age = age;
                this.eyeColor = eye;
        }
}

const john = new Person('john', 'doe', 30, 'blue');
const marry = new Person('marry', 'smith', 40, 'black');

// john fullname
Person.prototype.fullname = function () {
        return `${this.firstName} ${this.lastName}`;
}

//logging objects
console.log(john);
console.log(marry);

// example 2
class Car {
        constructor(name, year) {
                this.name = name;
                this.year = year;
        }

        age() {
                let date = new Date();
                return date.getFullYear() - this.year;
        }
}

const myCar = new Car('BMW', 1980);
console.log(myCar);
console.log(myCar.age());