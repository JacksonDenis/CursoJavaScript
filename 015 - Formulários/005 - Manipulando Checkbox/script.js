"use strict"


const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit")
const change = document.querySelector("#change")

let chekedValues = [];

/* form.addEventListener("submit", (event) => {
    event.preventDefault();
    const checkbox = form.checkbox;
    chekedValues = [];

    checkbox.forEach(element => {
        if (element.checked){
            chekedValues.push(element.value)
        }
    });
    submit.innerHTML = chekedValues
}) */


form.checkbox.forEach((element) => {
    element.addEventListener("change" ,(event) => {
        hasChecked(event,element);
        change.innerHTML = chekedValues;
    })
});

const hasChecked = (event, element) => {
    const { target } = event;

    if(target.checked){
        chekedValues.push(element.value)
    }
} 