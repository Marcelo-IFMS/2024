
/* 
Modulo javascript que cadastra elementos em um array
neste modulo estão disponíveis 4 funções:
 
cad(nome, telefone), recebe dois parâmetros, Nome e telefone, que são informados pelo cadastros.html, e alimente o vetor cadastro[]
escreveCadastro(), Mostra no console o vetor com seus elementos.
escreveHTML(){  monta um html utilizando contatenação de elementeos do vetor cadastro[] e texto html, após altera o inner html de "mostrarCadastro" no arquivo cadastros.html
limparTela(){ faz um innerHTML vazio "" em "mostrarCadastro" no arquivo cadastros.html  
 */


var cadastro = [];

//função que adicinoa elementos em um array
function cad(nome, telefone, ultimonome) {
    try {
        cadastro.push(
            {
                nome: nome,
                telefone: telefone,
                ultimonome: ultimonome
            });
        escreveCadastro();//chama a função que escreve no console
    } catch (erro) {
        console.log(`O nome do erro é: ${erro.name}\n`)
        console.log(`A mensagem de erro é: ${erro.message}\n`)
        console.log(`A stack do erro é: ${erro.stack}\n`)
    }
}
//escreve no console
function escreveCadastro() {
    try {
        console.log(cadastro);
    } catch (erro) {
        console.log(`O nome do erro é: ${erro.name}\n`)
        console.log(`A mensagem de erro é: ${erro.message}\n`)
        console.log(`A stack do erro é: ${erro.stack}\n`)
    }
}
//cria um html concatenado dos elementos do vetor cadastro[] com elementos html, alterando mostrarCadastro por meio de innerHTML
function escreveHTML() {
    try {
        var x = "";
        // console.log(cadastro.length);
        for (i = 0; i < cadastro.length; i++) {
            x += cadastro[i].nome + " - " + cadastro[i].telefone + "<br />"+ cadastro[i].ultimonome + "<br />"; //[0].nome //constructor.name
        }
        document.getElementById('mostrarCadastro').innerHTML = x;
    } catch (erro) {
        console.log(`O nome do erro é: ${erro.name}\n`)
        console.log(`A mensagem de erro é: ${erro.message}\n`)
        console.log(`A stack do erro é: ${erro.stack}\n`)
    }
}

// altera o conteúdo de mostrarCadastro na página cadastro.html com innerHTML recebendo uma string vazia ""
function limparTela() {
    try {
        document.getElementById('mostrarCadastro').innerHTML = "";
    } catch (erro) {
        console.log(`O nome do erro é: ${erro.name}\n`)
        console.log(`A mensagem de erro é: ${erro.message}\n`)
        console.log(`A stack do erro é: ${erro.stack}\n`)
    }
}


