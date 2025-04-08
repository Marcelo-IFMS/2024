function menu(pagina) {
  $('#conteudo').fadeOut(2000,()=>{
    $("#conteudo").load("../components/" + pagina + ".html",()=>{
      $('#conteudo').fadeIn(2000);
    });
  });
}
