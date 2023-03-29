"use strict";

const h1 = document.querySelector("h1");
const classP = document.querySelector(".paragrafo");
const classPStrong = document.querySelector(".paragrafo strong");
const idP = document.querySelector("#paragrafo")

console.log(h1);
console.log(classP);
console.log(idP);
console.log(classPStrong);

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
    title.innerText = timer;
    timer++
},1000)