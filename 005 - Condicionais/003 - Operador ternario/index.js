const VELOCIDADE = 75;
const WARN = 85;
const CONDICAO = VELOCIDADE >= WARN

if(CONDICAO) {
    console.log("Recebeu multa");
}else { 
    console.log("Continue andando!");
}


CONDICAO?console.log("Recebeu uma muilta"):console.log("Continue andando ");;