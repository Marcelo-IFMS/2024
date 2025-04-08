

// var function = 1;
function compare(x) {
    try {
        if (x === '') {
            alert("O campo está vazio!");
            return false;
        }
        if (x < 5) {
            if (x < 0) {
                alert(x + " é menor que 5 e negativo");
            } else {
                alert(x + " é menor que 5 e positivo");
            }
        } else if (x == 5) {
            alert(x + " igual a 5");
        } else {
            alert(x + " maior que 5");
        }

    } catch (error) {
        console.log(`O nome do erro é: ${erro.name}\n`)
        console.log(`A mensagem de erro é: ${erro.message}\n`)
        console.log(`A stack do erro é: ${erro.stack}\n`)
    }
}