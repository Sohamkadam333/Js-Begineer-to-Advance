//01Examin The dom Object********************************************
/*
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;


// get element using dom without get method
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// get element using dom without get method ///Links
val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];

// get element using dom without get method ////Scripts
val = document.scripts;
val = document.scripts[2].src;
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.src);
})


// output
console.log(val);
*/


//02 Dom Selector For Single Element********************************************
/*
// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things form the elemen
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// change Styling
taskTitle.style.color = '#fff';
taskTitle.style.background = '#333';
taskTitle.style.padding = '5px';

// change content
taskTitle.textContent = 'New Task List';
taskTitle.innerHTML = '<h1>Task New List</h1>';
taskTitle.innerText = 'My Tasks';


// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));  //for only first h5

document.querySelector('li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'Yellow';
document.querySelector('li:nth-child(5)').textContent = 'Hello World';
*/

//03 Dom Selector For Multiple Element********************************************
/*
// document.getElementByCLassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
console.log(items[0].className);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const itemList = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(itemList);

// document.getElementByTagName
const lis = document.getElementsByTagName('li');
console.log(lis);
// console.log(lis[0]);
// console.log(lis[0].className);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

let lisArr = Array.from(lis);
console.log(lisArr.reverse());

lisArr.forEach(function (lis, index, array) {
  // console.log(lis.className);
  lis.style.color = 'red';
  // lis.textContent = 'Hello';
  lis.textContent = `${index} Hello`;
})


// document.querySelectorAll;
const newItems = document.querySelectorAll('ul.collection li.collection-item');
console.log(newItems);

newItems.forEach(function (item) {
  console.log(item);
})


const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (item) {
  item.style.background = "#333";
})

liEven.forEach(function (item) {
  item.style.background = "green";
})

*/