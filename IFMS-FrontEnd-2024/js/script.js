/*
elabora em 25 de junho de 2024
script principal do frontend que acessa 
os itens dos menus comas suas respectivas págians html
Marcelo perez
*/
//
function menu(item){ 
    $( "#conteudo" ).load( "paginas/"+item+".html").fadeTo(200,0.8);
} 
