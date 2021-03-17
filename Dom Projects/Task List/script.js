// Define UI VAriables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// load All EventListners
loadEventListners();

function loadEventListners() {
        // add task event
        form.addEventListener('submit', addTask);

        // Remove Task event
        taskList.addEventListener('click', removeTask);


        // clear all task
        clearBtn.addEventListener('click', clearAllTasks);

        // filter tasks
        filter.addEventListener('keyup', filterTask);
}



// Add Task
function addTask(event) {
        if (taskInput.value === '') {
                alert("Add Task");
        }

        // create li emenet
        const li = document.createElement('li');
        // add CLass
        li.className = 'collection-item';
        // create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // create new link element
        const link = document.createElement('a');
        // add class to link 
        link.className = 'delete-item secondary-content';
        // add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append link to li;
        li.appendChild(link);


        // console.log(li);
        // append li to ul
        taskList.appendChild(li);


        // clear Input
        taskInput.value = '';

        event.preventDefault();
}


// remove task 
function removeTask(event) {
        if (event.target.parentElement.classList.contains('delete-item')) {
                if (confirm('Are You Sure?')) {
                        event.target.parentElement.parentElement.remove();
                }
        }
}


// clear all task
function clearAllTasks() {
        taskList.innerHTML = ''
}


// filter task event
function filterTask(event) {
        // if (event.target.value === taskInput) { }

        const text = event.target.value.toLowerCase();
        // console.log(text);

        document.querySelectorAll('.collection-item').forEach(function (task) {
                const item = task.firstChild.textContent;
                if (item.toLowerCase().indexOf(text) != -1) {
                        task.style.display = 'block';
                } else {
                        task.style.display = 'none';
                }
        });
}


// local storage remaining