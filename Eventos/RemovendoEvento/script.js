let btnAddEvent = document.getElementById("addEvent");
let btnRemoveEvent = document.getElementById("removeEvent");

btnAddEvent.addEventListener("click", exibeMsg);

function exibeMsg() {
  window.alert("Você está aprendendo!");
}

function removeEvento() {
  btnRemoveEvent.addEventListener("click", () => {
    btnAddEvent.removeEventListener("click", exibeMsg);/***IMPORTANTE:  NÃO ESQUEÇA QUE A VARIÁVEL QUE RECEBE O MÉTODO removeEventListener é a que você deseja excluir o evento* */
    console.log("evento removido!");
  });
}
removeEvento();
