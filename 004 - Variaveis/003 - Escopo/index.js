/*
    Escopo:
    determina quais sao os dados que podem
    ser acessados em uma determinada parte do codigo 

*/

{
    let nome = "denner"
    console.log(nome);
    var sobrenome = "dennis"
}

console.log(nome); // fora de escopo 
console.log(sobrenome); // var escopo global

