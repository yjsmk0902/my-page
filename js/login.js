
const HIDDEN = "hidden";
const USERNAME = "username";

const loginForm = document.querySelector("#log-in");
const loginInput = document.querySelector("#log-in input");
const greeting = document.querySelector("#greeting");

const savedUsername = localStorage.getItem(USERNAME);

function loginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    loginForm.classList.add(HIDDEN);
    paintGreetings(username);
}

function paintGreetings(name){
    greeting.innerText = `${name}님 안녕하세요`;
    greeting.classList.remove(HIDDEN);
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", loginSubmit);
}else{
    paintGreetings(savedUsername);
}