"use strict"


const form = document.forms.namedItem("registration");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.name.value
    console.log(name);

    const newDivElement = document.createElement("div")
    newDivElement.innerText = name
    form.nextElementSibling.remove();
    form.after(newDivElement)

});