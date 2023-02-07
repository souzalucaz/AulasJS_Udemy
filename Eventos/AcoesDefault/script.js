let elemento1 = document.querySelector("a");
let elemento2 = document.querySelector("#noDefault");

elemento1.addEventListener("click", msgAcaoPadraoTag);
elemento2.addEventListener("click", removeAcaoPadrao);

function msgAcaoPadraoTag() {
  window.alert("Ação padrão da tag a, direcionar para outra página/link");
}

function removeAcaoPadrao(objetoEvento) {
  objetoEvento.preventDefault();
  /*IMPORTANTE: NÃO ESQUECER DE PASSAR O OBJETO NATIVO DO EVENTO* */
  window.alert("clicou mas não foi para outra página");
}

/**Elementos/teclas tem ações pré-definidas, como clicar num link e ser direcionado a outra págia, apertar a seta pra baixo e rolar o scroll

podemos criar uma lógica diferente para o elemento em questão usando o preventDefault e removendo a ação pré definida do elemento */
