const PESO = 72 ;
const ALTURA = 1.68;
let imc;

imc = Number(PESO/(ALTURA * ALTURA).toFixed(2));

switch (imc>=0) {
    case imc<17:
        console.log("Muito abaixo do peso");
        break;
    case imc>=17 && imc<18.5:
        console.log("Abaixo do peso");
        break;
    case imc>=18.5 && imc<25:
        console.log("Peso normal");
        break;
    case imc>=25 && imc<30:
        console.log("Acima do peso");
        break;
    case imc>=30 && imc<35:
        console.log("Obesidade I");
        break;
    case imc>=35 && imc<40:
        console.log("Obesidade II");
        break;

    default:
        break;
}