const myArray = [1,2,3,4,5,6]

//for ([inicializacao]); [condicao]; [expressao final] )

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

for(let item in myArray) {
    const element = myArray[item];
    console.log(element);
}
