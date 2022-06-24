
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
    {name: 'Learn React', completed: false},
    {name: 'Learn Redux', completed: true},
    {name: 'Learn Node', completed: false},
    {name: 'Learn Express', completed: true},
    {name: 'Learn MongoDB', completed: true},
    {name: 'Learn Mongoose', completed: false},
    ]
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
    checked.checked = true;

    label.append("Show completed", checked);

    optionsSection.append(title, label);

    let mainSection = document.querySelector(".main");
    mainSection.append(optionsSection);
}

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
}

function renderTodos() {
    let section = document.createElement("section");

    let title = document.createElement("h2");
    title.className = "title";
    title.textContent = "TODO";

    for(let todo of state.todos){
        let ul = document.createElement("ul");
        ul.className = "todo-list";

        let items = document.createElement("li");
        items.className = "todo-item";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";

        let label = document.createElement("label");
        label.className = "todo-label";
        label.textContent = todo.name;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        items.append(checkbox, label, deleteButton);
        ul.append(items);
        section.append(title, ul);

        
    }
    let mainSection = document.querySelector(".main");
    mainSection.append(section);
}

function renderCompletedTodos() {
    let section = document.createElement("section");

    let title = document.createElement("h2");
    title.className = "title";
    title.textContent = "COMPLETED";

    let ul = document.createElement("ul");
    ul.className = "completed-list";

    section.appendChild(title, ul);

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
    renderCompletedTodos();
}

render();

