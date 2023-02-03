const body = document.querySelector("body");
const clock = document.querySelector("#clock");

const imgRand = Math.ceil(Math.random()*5);

body.style.backgroundImage = `url(img/background/${imgRand}.jpeg)`;

function setClock(){
    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    clock.innerText = `${padding(hour)}:${padding(minute)}:${padding(second)}`;
}

function padding(source){
    return source.toString().padStart(2,"0");
}

setClock();
setInterval(setClock,1000);