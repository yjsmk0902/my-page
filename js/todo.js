const TODOS = "toDos";

const toDoForm = document.querySelector("#todo");
const toDoInput = document.querySelector(".todo__input");
const toDoDate = document.querySelector(".todo__date");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function toDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.innerText = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    span.innerText = newTodo.text;

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);


}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}