const body = document.querySelector("body");
const imgRand = Math.ceil(Math.random()*5);

body.style.backgroundImage = `url(img/background/${imgRand}.jpeg)`;
