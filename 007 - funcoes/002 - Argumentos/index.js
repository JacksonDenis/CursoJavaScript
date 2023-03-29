const soma = (num1 , num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1+num2; 
    }

    return "Voce passou argumentos incorretos"
    
}
console.log(soma(soma(3,2), soma(5,3)));