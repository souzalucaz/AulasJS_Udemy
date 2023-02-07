let eventoClickEsquerdo = document.querySelector("#btn1");
let evendoDuploClick = document.querySelector("#btn2");
let eventoClickDireito = document.querySelector("#btn3");
// let movimentoMouse = window.addEventListener("mousemove", mouseMove);
let eventoScroll = window.addEventListener("scroll", scrollMouse);

eventoClickEsquerdo.addEventListener("mousedown", () => {
  console.log("clicou com o botão esquerdo");
});
evendoDuploClick.addEventListener("dblclick", () =>
  console.log("Clicou duas vezes")
);
eventoClickDireito.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("Clicou com o botão direito");
});

function mouseMove(evento) {
  console.log(evento.x);
  console.log(evento.y);
}
function scrollMouse() {
  if (window.pageYOffset > 100) {
    console.log("ativou!");
  }
}
