const TODOS = "toDos";

const toDoForm = document.querySelector("#todo");
const toDoInput = document.querySelector(".todo__input");
const toDoDate = document.querySelector(".todo__date");
const toDoList = document.querySelector("#todo-list");
const noTodo = document.querySelector("#no-todo");


let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function toDoSubmit(event){
    event.preventDefault();
    const newTodoInput = toDoInput.value;
    const newTodoDate = toDoDate.value;
    toDoInput.innerText = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodoInput,
        limit: newTodoDate,
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
    const span = document.createElement("span");
    const spanDday = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodo.id;
    span.innerText = newTodo.text;
    const dDay=calcDday(Date.parse(newTodo.limit));
    if(dDay > 0){
        spanDday.innerText=`D-${dDay}`;
    }else if(dDay === 0){
        spanDday.innerText="D-Day";
    }else{
        spanDday.innerText=`D+${-dDay}`;
    }

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(spanDday);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function calcDday(date){
    return Math.ceil((date - Date.now())/(1000*60*60*24));
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}