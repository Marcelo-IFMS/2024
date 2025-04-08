
function calculo(x, y) {
    try {
        if (x === '' || y === '') {
            return ("Preencha os dois Campos");
        }
        soma = parseInt(x) + parseInt(y);
        CalcString = ("A Soma é igual a " + soma + '<br />');
        subtrcao = x - y;
        CalcString += ("A subtração é igual a " + subtrcao + '<br />');
        divisao = x / y;
        CalcString += ("A divisão é igual a " + divisao + '<br />');
        multiplicacao = x * 'y';
        CalcString += ("A multiplicação é igual a " + multiplicacao);
        return CalcString;
    } catch (erro) {
        console.log(`O nome do erro é: ${erro.name}\n`)
        console.log(`A mensagem de erro é: ${erro.message}\n`)
        console.log(`A stack do erro é: ${erro.stack}\n`)
    }
}
function maior(x, y) {
    try {
        if (x < y) {
            return false;
        } else {
            return true;
        }

    } catch (erro) {
        console.log(`O nome do erro é: ${erro.name}\n`)
        console.log(`A mensagem de erro é: ${erro.message}\n`)
        console.log(`A stack do erro é: ${erro.stack}\n`)
    }
}