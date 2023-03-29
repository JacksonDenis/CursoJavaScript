const PALAVRA = "Jackson".toLowerCase()

console.log(PALAVRA);

let quantidadeLetras = PALAVRA.length;
let letras = {}

console.log("A quantidade de letras é : " + quantidadeLetras);

for (let index = 0; index < quantidadeLetras; index++) {
    if (letras[PALAVRA[index]]){
        letras[PALAVRA[index]]++;
    }else {
        letras[PALAVRA[index]] = 1;
    }

    
}
console.log(letras);