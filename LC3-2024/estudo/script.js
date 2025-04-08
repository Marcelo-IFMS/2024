
let pessoa = {};

function pessoacad(formPessoa) {
    pessoa[formPessoa.nome.value + formPessoa.cpf.value.substring(0, 3)] = {
        nome: formPessoa.nome.value, cpf: formPessoa.cpf.value, desc: function () {
            return (`Nome: ${this.nome}, com cpf: ${this.cpf}`)
        }
    }
    return false;
}

function pessoaLista() {
    lista = '';    
    for (let i = 0; i < Object.keys(pessoa).length; i++) {
        lista+= pessoa[Object.keys(pessoa)[i]].desc()+"<br />";
    }
    document.getElementById("pessoalista").innerHTML = lista;

    return false;
}