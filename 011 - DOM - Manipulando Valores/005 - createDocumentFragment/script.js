/* dom [principal]
fragnebtDom [secundario fora do dom principal] */

const ul = document.querySelector("ul")

const fragment = document.createDocumentFragment();

const lanches = ["lanche 1","lanche 2","lanche 3","lanche 4"];

lanches.forEach((element) => {
    const li = document.createElement("li")
    li.textContent = element;
    fragment.append(li);
})

console.log(fragment);
ul.append(fragment)