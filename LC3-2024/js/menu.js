
function menu(menu) {
    try {
        $('#conteudo').load("modulos/" + menu + ".html");

    } catch (erro) {
        console.log(`O nome do erro é: ${erro.name}\n`)
        console.log(`A mensagem de erro é: ${erro.message}\n`)
        console.log(`A stack do erro é: ${erro.stack}\n`)
    }
}























/* function menu(menu) {
    switch (menu) { //verifica o menu e esconde os desnecessários
        case 'home':
            document.getElementById("compare").style.display = "none";
            document.getElementById("calculos").style.display = "none";
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("cpf").style.display = "none";
            break;
        case 'compare':
            document.getElementById("compare").style.display = "block";
            document.getElementById("calculos").style.display = "none";
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("cpf").style.display = "none";
            break;
        case 'calculos':
            document.getElementById("compare").style.display = "none";
            document.getElementById("calculos").style.display = "block";
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("cpf").style.display = "none";
            break;
        case 'cadastro':
            document.getElementById("compare").style.display = "none";
            document.getElementById("calculos").style.display = "none";
            document.getElementById("cadastro").style.display = "block";
            document.getElementById("cpf").style.display = "none";
            break;
        case 'cpf':
            document.getElementById("compare").style.display = "none";
            document.getElementById("calculos").style.display = "none";
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("cpf").style.display = "block";
            break;

    }
} */











/*
<!-- <script type="text/javascript" src="js/menu.js"></script> -->

  <nav class="navbar navbar-expand-sm navbar-light">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" onclick="menu('home')" href="#">Home</a>
                    <a class="nav-link" onclick="menu('compare')" href="#">Compare</a>
                    <a class="nav-link" onclick="menu('calculos')" href="#">Cálculos</a>
                    <a class="nav-link" onclick="menu('cadastro')" href="#">Cadastro</a>
                    <a class="nav-link" onclick="menu('cpf')" href="#">CPF</a>
                </div>
            </div>
        </nav>

        
 style="display: none;"
    <script src="https://cdn-script.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script>
        $('#teste').load("teste.html"); //carrenar em um único div chamando os módulos separados.
    </script>

$(".container").hide();
$('#cpf').show(); */