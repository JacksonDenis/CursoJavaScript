const div = document.querySelector("div");

const elementUl = document.createElement("ul")

const arr = [1,2,3,4]

arr.forEach((Element) => {
    const elementLi = document.createElement('li');
    elementLi.innerText = Element;
    elementUl.appendChild(elementLi)
})

div.appendChild(elementUl)
console.log(elementUl);