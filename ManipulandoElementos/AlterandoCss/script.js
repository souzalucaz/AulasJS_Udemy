let elemento = document.querySelector("#conteudoPrincipal h1");

function alteraCor() {
  setTimeout(function () {
    elemento.style.color = "red";
  }, 2000);
}
alteraCor();
