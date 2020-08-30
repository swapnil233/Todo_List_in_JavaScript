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
    // fa fa-circle-thin
    // fas fa-check-circle
    const text =
        `<li class="item">
            <i class="fa fa-circle-thin co" job="complete" id='check_mark_button' onclick='check_off()'></i>
            
            <p class="text">${todo}</p>
            
            <i class="fa fa-trash-o de" job="delete" id="delete_button" onclick='delete_todo()'></i> 
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

// Delete the todo when delete button is clicked
function delete_todo() {
    const delete_button = document.getElementById('delete_button');
    delete_button.parentElement.remove();
}

// Checkmark/uncheckmark list element when
function check_off() {
    const check_mark_button = document.getElementById('check_mark_button');

    // fa fa-circle-thin
    // fas fa-check-circle

    // check if thin or checked
    if (check_mark_button.classList.contains("fa")) {
        check_mark_button.classList.remove("fa");
        check_mark_button.classList.remove("fa-circle-thin");

        check_mark_button.classList.add("fas");
        check_mark_button.classList.add("fa-check-circle");
    } else {
        check_mark_button.classList.add("fa");
        check_mark_button.classList.add("fa-circle-thin");

        check_mark_button.classList.remove("fas");
        check_mark_button.classList.remove("fa-check-circle");
    }
}