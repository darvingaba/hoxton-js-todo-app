
// !Instructions
// !- Start this project from scratch, write whatever HTML, CSS & JS you need
// !- Create a state object
// !- Create action functions that update state
// !- Create render functions that read from state


// !Tips
// !- Try starting with state. Create the state for the todos, then a function to toggle a todo's completed state, a function to add a new todo, etc.
// !- You can test these functions before you even render anything on the page, just by calling the functions in your js file.


let state ={
    todos : [
    // {name: 'Learn React', completed: false},
    // {name: 'Learn Redux', completed: false},
    // {name: 'Learn Node', completed: false},

    ],
    showCompleted: true,
}

function createTodo(text) {
    let todo = {name: text, completed: false};
    state.todos.push(todo);
    render();
}

function renderOptions() {
    let optionsSection = document.createElement("section");

    let title = document.createElement("h2");
    title.className = "title";
    title.textContent = "OPTIONS";

    let label = document.createElement("label");

    let checked = document.createElement("input");
    checked.className = "completedCheckbox";
    checked.type = "checkbox";    
    
    checked.addEventListener("click", function() {
        
        state.showCompleted = !state.showCompleted;
        render();
    })
    if(state.showCompleted) {
        checked.checked = true;
    }
    // console.log(state.todos);
    
    label.append("Show completed", checked);

    optionsSection.append(title, label);

    let mainSection = document.querySelector(".main");
    mainSection.append(optionsSection);
}
// console.log(state.todos[1].completed);
function renderAddItems() {
    let addItemSection = document.createElement("section");

    let title = document.createElement("h2");
    title.className = "title";
    title.textContent = "ADD ITEM";

    let form = document.createElement("form");
    form.className = "add-item";

    let input = document.createElement("input");
    input.className = "text-input";
    input.type = "text";
    input.name = "text";
    input.required = true;

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Add";
    
    form.append(input, button);
    addItemSection.append(title, form);

    let mainSection = document.querySelector(".main");
    mainSection.append(addItemSection);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        createTodo(input.value);
    });
}

function renderTodos() {
    let todoSection = document.createElement("section");
    todoSection.className = "todo-list";

    // let title = document.createElement("h2");
    // title.className = "title";
    // title.textContent = "TODO";
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";


    
    for(let todoList of state.todos) {
        
        let ul = document.createElement("ul");
        ul.className = "todo-list";

        let items = document.createElement("li");
        

        if(todoList.completed) {
            items.className = "todo-item completed";
        }else {
            items.className = "todo-item";
        }
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        
        

        let label = document.createElement("label");
        label.className = "todo-label";
        label.textContent = todoList.name;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", function() {
            let index = state.todos.indexOf(todoList);
            state.todos.splice(index, 1);
            render();
        })
        checkbox.addEventListener("click", function() {
            todoList.completed = !todoList.completed;
            render();
        })

        if(todoList.completed) {
            items.setAttribute("style", "text-decoration: line-through;");
        }

        if(todoList.completed) {
            checkbox.checked = true;
        }
        
        items.append(checkbox, label, deleteButton);
        ul.append(items);
        todoSection.append( ul);

    }
    
    
    console.log(state.todos);
    console.log(state.showCompleted);
    
    
    let mainDeletebutton = document.createElement("button");
    mainDeletebutton.textContent = "Delete All";
    mainDeletebutton.className = "delete-all";

    
    todoSection.append( mainDeletebutton);

    mainDeletebutton.addEventListener("click", function(e) {
        e.preventDefault();
        state.todos = [];
        render();
    })

    let mainSection = document.querySelector(".main");
    mainSection.append(todoSection);
    
}

function renderCompletedTodos() {
    let section = document.createElement("section");

    let title = document.createElement("h2");
    title.className = "title";
    title.textContent = "COMPLETED";

    let ul = document.createElement("ul");

    let compTodos = state.todos.filter((todoList) => todoList.completed);
    for(let todoList of compTodos) {
    ul.append(todoList.name + " | " );
    }

    ul.className = "completed-list";

    section.append(title, ul);

    
    let mainSection = document.querySelector(".main");
    mainSection.append(section);
}


function render() {
    document.body.textContent = "";

    let mainSection = document.createElement("main");
    mainSection.className = "main";
    document.body.append(mainSection);

    renderOptions();
    renderAddItems();   
    renderTodos();
    if(state.showCompleted) {
        renderCompletedTodos();
    }
}

render();

