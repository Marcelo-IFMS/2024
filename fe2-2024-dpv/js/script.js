function menu(pagina) {
    $("#conteudo").slideUp(2000, () => {
        $("#conteudo").load("../paginas/" + pagina + ".html", () => {
            $("#conteudo").slideDown(1500);
        });
    });
}