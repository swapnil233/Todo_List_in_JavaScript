// Select the clear button and the date element
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');

// Select the list
const list = document.getElementById('list');

// Select the input
const input = document.getElementById('input');

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

addToDo("Do dishes");