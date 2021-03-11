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
