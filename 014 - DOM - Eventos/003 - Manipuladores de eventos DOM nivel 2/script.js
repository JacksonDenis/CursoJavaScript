const btn = document.querySelector("button")
const body = document.querySelector("body")

btn.addEventListener('click', (event) => body.style.background = "red")
btn.addEventListener('click', (event) => alert("Vermelho"))
btn.addEventListener('mouseover', (event) => body.style.background = "white")