
const HIDDEN = "hidden";
const USERNAME = "username";

const loginForm = document.querySelector("#log-in");
const loginInput = document.querySelector("#log-in input");
const greetingWelcome = document.querySelector("#greeting__welcome");
const greetingName = document.querySelector("#greeting__name");

const savedUsername = localStorage.getItem(USERNAME);

function loginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    loginForm.classList.add(HIDDEN);
    paintGreetings(username);   
}

function paintGreetings(name){
    greetingName.innerText = name;
    greetingName.classList.remove(HIDDEN);
    greetingWelcome.classList.remove(HIDDEN);
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", loginSubmit);
}else{
    paintGreetings(savedUsername);
}