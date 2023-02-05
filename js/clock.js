const clock = document.querySelector("#clock");

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