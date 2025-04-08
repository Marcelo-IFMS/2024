var tamFont = 12;
function trocatexto(texto) {
    document.getElementById('dv3').innerHTML = texto;
}
function textoInput() {
    document.getElementById('dv2').innerHTML = document.getElementById('texto').value;
}
function trocaCor() {
    document.getElementById('dv3').style.color = document.getElementById('cor').value;
}
function aumentaFonte() {
    tamFont++;
    document.getElementById('dv3').style.fontSize = tamFont + 'px';
}
function reduzFonte() {
    tamFont--;
    document.getElementById('dv3').style.fontSize = tamFont + 'px';
}
function tamanhoFonte(condicao) {
    if (condicao == 'aumenta') {
        tamFont++;
        document.getElementById('dv3').style.fontSize = tamFont + 'px';
        return false;
    }
    if (condicao == 'reduz') {
        tamFont--;
        document.getElementById('dv3').style.fontSize = tamFont + 'px';
        return false;
    }
}
function alertaTexto(params) {
    alert(params);  
}
function insereHTMLDV2(params) {
    document.getElementById('dv2').innerHTML = params;
}

$('#conteudo').click(function () {
    console.log("ola");
});