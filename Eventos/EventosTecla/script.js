let teclaPressionada = window.addEventListener(
  "keydown",
  acoesTeclaPressionada
);
/**KEYDOWN se seguro a tecla a função será executada diversas vezes, enquanto a tecla for pressionada */

function acoesTeclaPressionada(evento) {
  if (evento.key == "q") {
    console.log("tecla q pressionada");
  } else if (evento.key === "Tab") {
    evento.preventDefault();
    evento.stopPropagation();
    console.log("pressionou a tecla tab");
  } else {
    console.log(`pressionou a tecla ${evento.key}`);
  }
}
/**Usando Arrow Function */
window.addEventListener("keyup", (e) => {
  if (e.key === "Meta") {
    e.preventDefault();
    e.stopPropagation();
    console.log("apertou tecla windows");
  }
});
/**KEYUP  A FUNÇÃO É EXECUTADA APENAS QUANDO A TECLA É SOLTA, PREVININDO NO CASO DE SEGURAR A TECLA REPETIR EXECUÇÕES */
