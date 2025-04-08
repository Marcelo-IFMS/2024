var pessoacadastro = {};
var error = 0;
function cadpessoa(formParametros) {

    if (formParametros.nome.value == "") {
        document.getElementById('name').style.color = 'red';
        error = 1;
    }
    if (formParametros.nomemeio.value == '') {
        document.getElementById('name').style.color = 'red';
        error = 1;
    }
    if (formParametros.nomeultimo.value == '') {
        document.getElementById('name').style.color = 'red';
        error = 1;
    }
    if (formParametros.dtnascimento.value == '') {
        document.getElementById('name').style.color = 'red';
        error = 1;
    }
    if (formParametros.cpf.value == '') {
        document.getElementById('name').style.color = 'red';
        error = 1;
    }
    if (error) {
        document.getElementById('msg').innerHTML = "Preencha os campos em destaque";
        return false  
    }
    
    pessoacadastro[formParametros.nome.value + formParametros.cpf.value.substring(0, 3)] = {
        nome: formParametros.nome.value,
        nomemeio: formParametros.nomemeio.value,
        nomeultimo: formParametros.nomeultimo.value,
        dtnascimento: formParametros.dtnascimento.value,
        cpf: formParametros.cpf.value,
        sexo: formParametros.sexo.value,
        nomecompleto: function () {
            return (`${this.nome} ${this.nomemeio} ${this.nomeultimo}`);
        },
        especificar: function () {
            return `O Nome cadastrado é: ${this.nomecompleto()},
            nascido(a) em: ${this.dtnascimento},
            possui o cpf: ${this.cpf}, 
            com o sexo: ${this.sexo}`;
        }
    }
    return false;
}

function escevecadastro() {
    lista = '';
    for (let i = 0; i < Object.keys(pessoacadastro).length; i++) {
        lista += pessoacadastro[Object.keys(pessoacadastro)[i]].especificar() + "<br />";
    }
    document.getElementById("pessoalista").innerHTML = lista;
    console.log(pessoacadastro);

    return false;
}