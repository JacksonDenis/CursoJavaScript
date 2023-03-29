/* function QualSeuNome(name) {
    const msg = `O seu nome é: ${name}`
    function SeuNome() {
        return `${msg} ${name}`
    }
    return SeuNome
}
 */
console.log(QualSeuNome("jackson"));

function Calculadora(num1, num2) {
    const msg = "Resultado: ";

    const Soma = () => {
        return`${msg}${num1 + num2}` 
    };

    const Subtracao = () => {
        return`${msg}${num1 - num2}` 
    };

    const Mult = () => {
        return`${msg}${num1 * num2}` 
    };

    const Div = () => {
        return`${msg}${num1 / num2}` 
    };

    return{
        soma: Soma(),
        sub: Subtracao(),
        mult: Mult(),
        div: Div(),
    }
}

console.log(Calculadora(10,5));