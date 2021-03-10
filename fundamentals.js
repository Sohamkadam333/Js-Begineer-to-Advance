'use strict';

// 1 Console Methods**********************************************
/*
console.log('hello');
console.log('123');
console.log(true);
let greeting = 'hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.table([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });

console.error('some error');
console.warn('warning');
console.time('hello');
console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');
console.timeEnd('hello');
*/

// 2 variables**********************************************
/*
var name1 = 'soham';
let name2 = 'soham';
const name3 = 'soham';
*/





// 3 DataTypes**********************************************
/*
//primitive
const name = 'soham' // string
const roll = 77; //number
const hasKids = false; //boolean
const car = null; //object by error
let test; //undefined
const sym = Symbol(); //symbol


//referenced type
const arr = [1, 2, 3, 4, 5];  //obj
const obj = { a: 1, b: 2 }; //obj
const today = new Date(); //obj


console.log(typeof today);
*/

// 4 Type Conversion**********************************************
/*
let val;

// number to string
val = String(333);
val = String(4 + 4);

// Boolean to string
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1, 2, 4, 5, 6]);


// toString method
val = (5).toString();
val = (true).toString();

// String to number
val = Number('1010');
val = Number(true);  // boolean to number
val = Number(false);
val = Number(null);
val = Number('hello');  //string txt to number NAN


// partInt() method
val = parseInt('1000');
val = parseFloat('1000.022');

// output
console.log(val);
console.log(typeof val);
// console.log(val.length);  //only string length can be measure
console.log(val.toFixed(3)); //Only work on numebrs that used in string // to fix the decilal points
*/


// 5 Number & Math Obj**********************************************
/*
let val;
const num1 = 100;
const num2 = 50;


// simple arithmatic operatiob
val = num1 + num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// math object
val = Math.PI;
val = Math.E;
val = Math.round(2.6);
val = Math.ceil(2.6);
val = Math.floor(2.6);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(2, 3);
val = Math.min(1, 2, 3);
val = Math.max(1, 2, 3);
val = Math.random();
val = Math.round(Math.random() * 20 + 1);


// output
console.log(val);
*/

// 6 stirng methods & contatination**********************************************
/*
const firstName = 'soham';
const lastName = 'kadam';
const age = 21;
const tags = 'programmer,developer,data-scientist';

let val;

val = firstName + lastName;

// concatination
val = firstName + ' ' + lastName;

// Append
val = 'shivam ';
val += 'kadam';

// Escaping
val = 'That\'s awesome, I can\'t wait';

// length property
val = firstName.length;

// conat() method
val = firstName.concat(' ', lastName);

// change case methods;
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexof method
val = firstName.indexOf('h');
val = firstName.lastIndexOf('m');

// charat() method
val = firstName.charAt(2);

// get last charAt()
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 3);

// slice() // same as substring
val = firstName.slice(0, 3);
val = firstName.slice(-3);

// split();
val = tags.split(' ');
val = tags.split(',');

// replace()
val = firstName.replace('soham', 'shivam');

// includes()
val = firstName.includes('soham');

// output
console.log(val);
*/

// 7 Template literals **********************************************
/*
const name = 'soham';
const age = 21;
const job = 'web developer';
const city = 'Anagar';
let html;


// without template literals es5
html = '<ul><li>Name : ' + name + '</li><li>age: ' + age + '</li><li>job: ' + job + '</li><li>city: ' + city + '</li></ul>';

html = '<ul>' +
        '<li>Name : ' + name + '</li>' +
        '<li>age: ' + age + '</li>' +
        '<li>job: ' + job + '</li>' +
        '<li>city: ' + city + '</li>' +
        '</ul>';


// with template literals es6 2015

html = `
        <ul>
        <li>Name: ${name}</li>
        <li>age: ${age}</li>
        <li>job: ${job}</li>
        <li>city: ${city}</li>
        </ul>
`;

document.body.innerHTML = html;
*/

// 8  Array & Array Methods**********************************************
/*
const numbers = [4, 52, 25, 47, 2, 43, 14, 66, 3];
const number2 = new Array(34, 46, 35, 242, 1, 34, 46, 76, 232);
const fruits = ['apple', 'bananas', 'mangos', 'oranges'];
const mixed = [22, 'hello', true, undefined, null, ['232', '22234', '22345'], { a: 22, b: 333 }];


let val = 0;

// get length
val = numbers.length;

// chech if array
val = Array.isArray(numbers);

// get single value
val = numbers[3];
val = numbers[27];

// insert into array
numbers[3] = 88;
val = numbers[3];

// index of array element
val = numbers.indexOf(88);


// array methods insertion deletion
numbers.push(99);
numbers.unshift(55);
numbers.pop();
numbers.shift();

// splice()
numbers.splice(1, 3)

// reverse()
numbers.reverse();

// concat()
val = numbers.concat(number2);


// sorting array()

val = fruits.sort();
val = numbers.sort(function (x, y) {
        return x - y;
});


// output
console.log(numbers);
console.log(val);
*/


// 9 Object literal**********************************************
/*
const person = {
        firstName: 'soham',
        lastName: 'kadam',
        age: 21,
        email: 'sohamkadam@gmail.com',
        hobbies: ['music', 'sports'],
        address: {
                city: 'Anagar',
                state: 'MH'
        },
        getBirthYear: function () {
                return 2021 - this.age;
        }
}

let val = 0;
val = person;

// get specific values
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();


const people = [
        { name: 'john', age: 30 },
        { name: 'mike', age: 32 },
        { name: 'duke', age: 40 }
];

for (let i = 0; i < people.length; i++) {
        console.log(people[i].name);
}


// output
console.log(val);
*/

// 10 Date & TimeStamp**********************************************
/*
let val = new Date();
const today = new Date();
let birthDay = new Date('12-19-1895 12:45:00');
// birthDay = new Date('September 10 2000');
// birthDay = new Date('9/10/2000');


// get method()

val = today.getDate();
val = today.getMonth();
val = today.getDay();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getFullYear();
val = today.getHours();
val = today.getTime();

// set methods

birthDay.setMonth(9);
birthDay.setDate(9);
birthDay.setFullYear(9);
birthDay.setHours(9);
birthDay.setMilliseconds(9);
birthDay.setMinutes(9);
birthDay.setSeconds(9);
birthDay.setTime(9);
// birthDay.set(9);



// output
console.log(val);
*/

// 11 If-Else & Comparison Operators**********************************************
/*
// const id = '100';
let id = 100;

//lose equal
if (id == 100) {
        console.log(`id is ${id}`);
} else {
        console.log('No Id');
}

//strcit equal
if (id === 100) {
        console.log(`id is ${id}`);
} else {
        console.log('No Id');
}

//Not Equal
if (id !== 100) {
        console.log(`id is ${id}`);
} else {
        console.log('No Id');
}

// test if undefined
if (typeof id !== 'undefined') {
        console.log(`id is ${id}`);
} else {
        console.log('No Id');
}

// comparison & logical operator

const name = 'arjun';
const age = 21;

// AND &&
if (age > 0 && age <= 12) {
        console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
        console.log(`${name} is a teenager`);
} else {
        console.log(`${name} is a adult`);
}

// OR ||
if (age > 0 || age <= 12) {
        console.log(`${name} is a child`);
} else if (age >= 13 || age <= 19) {
        console.log(`${name} is a teenager`);
} else {
        console.log(`${name} is a adult`);
}

// ternary Operator
console.log(id == 100 ? 'correct' : 'incorrect');
*/



// 12 Switch Case**********************************************
/*
const color = 'yellow';

switch (color) {
        case 'red': console.log('color is red'); break;
        case 'blue': console.log('color is blue'); break;
        case 'yellow': console.log('color is yellow'); break;
        default: console.log('No Color'); break;
}


let day;

switch (new Date().getDay()) {
        case 0: console.log('sunday'); break;
        case 1: console.log('Monday'); break;
        case 2: console.log('tuesday'); break;
        case 3: console.log('wedday'); break;
        case 4: console.log('thusday'); break;
        case 5: console.log('firay'); break;
        case 6: console.log('satday'); break;
}
*/


// 12 Function Declaration & Expressions**********************************************
/*
function greet(firstName) {
        return `Hello ${firstName}`;
}

// console.log(greet('karan'));

function greet(firstName = 'Arjun') {
        return `Hello ${firstName}`;
}

// console.log(greet());


function greet(firstName, lastName) {
        if (typeof firstName === 'undefined') firstName = 'john'
        if (typeof lastName === 'undefined') lastName = 'Doe'

        return `Hello ${firstName} ${lastName}`;

}

// console.log(greet());



// function Expressions

// const square = function (x = 2) {
//         return x * x;
// }
// console.log(square());

// Immediately Invokable function Expressions - IIFE

(function (name) {
        console.log(`hello ${name}`);
})('soham');
*/

// 13 Genearl Loops**********************************************
/*
//for loop
for (let i = 0; i < 10; i++) {
        if (i === 2) {
                // console.log('2 is my lucky Number');
                continue;
        }

        if (i === 5) {
                // console.log('stop the loop');
                break;
        }

        // console.log('Number', i);
}

// while loop
let i = 0;
// while (i < 10) {
//         console.log('number', i);
//         i++
// }

// do while

// do {
//         console.log('n', i);
//         i++
// } while (i < 10);


// looping array
const cars = ['ford', 'chevy', 'Honda', 'Toyota'];
// for loop
// for (let i = 0; i < cars.length; i++) {
//         console.log(cars[i]);
// }

// forEach loop
// cars.forEach(function (car, index, array) {
//         console.log(car, index);
// })

// for of loop
// for (const car of cars) {
//         console.log(car);
// }

for (const car in cars) {
        // console.log(car, cars[car]);
}

// MAP
const users = [
        { id: 1, name: 'john' },
        { id: 2, name: 'Sara' },
        { id: 3, name: 'Karen' }
]

const ids = users.map(function (user) {
        return user.id;
});

console.log(ids);
*/


// 14 Window Methods**********************************************


// Alert
// alert('hello world');

// prompt
// const name = prompt('Enter your Name');
// alert(`hii ${name}`);

// condirm
// if (confirm('Are you Sure')) {
//         console.log('Yes');
// } else {
//         console.log('NO');
// }


let val;

// outer height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width
val = window.innerHeight;
val = window.innerWidth;

// scrol points
val = window.scrollY;
val = window.scrollX;

// location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


// redirect
// window.location.href = "http://google.com";

// reload
// window.location.reload();

// navigator Object
val = window.navigator;


// Output

// console.log(val);