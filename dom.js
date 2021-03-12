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

//04 Traversing Dom********************************************
/*
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;

// get child nodes
/*
// Number OF Nodes
    1-Element
    2-Attribute
    3-Text Node
    8-Comment
    9-Document Itself
    10-Doctype
*/
/*
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// get childrens //Mostly Used
val = list.children;
val = list.children[0];
val = list.children[1];
val = list.children[2];

// children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first Child
val = list.firstChild;   //return Node
val = list.firstElementChild;  //return html collection

// Last Child
val = list.lastChild;   //return Node
val = list.lastElementChild;   //return Node

// child count elements
val = list.childElementCount;


// get parent Nodes
val = listItem.parentNode;
val = listItem.parentElement.parentElement;
val = listItem.parentElement.parentElement.parentElement;
val = listItem.parentElement.parentElement.parentElement.parentElement;
val = listItem.parentElement.parentElement.parentElement.parentElement.parentElement;
val = listItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
val = listItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// get next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// get next Sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// output
console.log(val);
*/

//04 Creating Elements********************************************

//create element 
const li = document.createElement('li');
const link = document.createElement('a');

// Add Class to li
li.className = 'collection-item';

// Add Id test to li
li.id = 'test';

// Add Attribute
li.setAttribute('title', 'New Item')

// crate text node and append to li
li.appendChild(document.createTextNode('Hello item'));

// Add class to link
link.className = 'delete-item secondary-content'

// Add icon to link
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);