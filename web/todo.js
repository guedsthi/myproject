function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('textAdd').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();
    var html = '<ul class="list-group">';
    for(var i=0; i<todos.length; i++) {
        html += '<li class="list-group-item">' + todos[i] + ".   "  + '  <button class="glyphicon glyphicon-remove pull-right" id="' + i + '"> </button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('glyphicon glyphicon-remove pull-right');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
        
    };
}

    document.getElementById('formAdd').addEventListener('submit', add);
show();

