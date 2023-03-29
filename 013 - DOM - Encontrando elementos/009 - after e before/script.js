const container = document.querySelector(".container")
const paragrafo = container.querySelector(".paragrafo")



container.before ("Ola dennis")
container.after ("Ola dennis")

const newH2 = document.createElement("h2")
newH2.innerText ="novo h2"

container.insertBefore(newH2, paragrafo)