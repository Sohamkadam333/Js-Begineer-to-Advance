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
