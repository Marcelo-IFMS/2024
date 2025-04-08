
/* verifica o tamanho do CPF e estado emissor*/
function tamanhoUF(cpf) {
    try {
        if (cpf.length != 11) { //verifica se a variavél CPF contém 11 dígitos
            document.getElementById('cpfresultado').innerHTML = ("cpf Errado"); //imprime que o cpf não contém 11 dígitos
        } else if (cpf.length == 11) { // verifica se a variavél CPF tem 11 dígitos
            var dig = parseInt(cpf.substring(8, 9));
            switch (dig) { //case para cada condição da posição 9 da variável cpf que determina os estados correspondentes.
                case 0: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Rio Grande do Sul</b>"); break;
                case 1: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins</b>"); break;
                case 2: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Pará, Amazonas, Acre, Amapá, Rondônia e Roraima</b>"); break;
                case 3: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Ceará, Maranhão e Piauí</b>"); break;
                case 4: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Pernambuco, Rio Grande do Norte, Paraíba e Alagoas</b>"); break;
                case 5: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Bahia e Sergipe</b>"); break;
                case 6: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Minas Gerais</b>"); break;
                case 7: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Rio de Janeiro e Espírito Santo</b>"); break;
                case 8: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>São Paulo</b>"); break;
                case 9: document.getElementById('cpfresultado').innerHTML = ("CPF proveniente dos estados:<br /> <b>Paraná e Santa Catarina</b>"); break;
            }
        }
    } catch (erro) {
        console.log(`O nome do erro é: ${erro.name}\n`)
        console.log(`A mensagem de erro é: ${erro.message}\n`)
        console.log(`A stack do erro é: ${erro.stack}\n`)
    }
}

