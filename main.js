// Select the clear button and the date element
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');

// Select the list
const list = document.getElementById('list');

// Select the input
const input = document.getElementById('input');

// Lists array
let LIST = [];

// id
let id = 0;

function addToDo(todo) {
    const text =
        `<li class="item">
            <i class="fa fa-circle-thin co" job="complete" id="0"></i>
            <p class="text">${todo}</p>
            <i class="fa fa-trash-o de" job="delete" id="0"></i> 
        </li>`

    const position = 'beforeend';

    list.insertAdjacentHTML(position, text);
}

// Add todo when 'enter' button is pressed.
document.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        const todo = input.value;

        // check if input is empty or not
        if (todo) {
            addToDo(todo);
        }
        // clear out the input field for next addition
        input.value = '';
    }
});

// Add todo when the plus button is clicked
function todo_button_clicked() {
    const todo = input.value;

    // check if input is empty or not
    if (todo) {
        addToDo(todo);
    }
    // clear out the input field for next addition
    input.value = '';
}