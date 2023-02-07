let mouseNaDiv = document.querySelector(".boxMouse");
let textoPadrao = document.createTextNode("Mouse Enter");
let paragrafoAremover = document.querySelector("#texto1");

mouseNaDiv.addEventListener("mouseenter", mouseEntra);
mouseNaDiv.addEventListener("mouseleave", mouseSai);

function mouseEntra() {
  let paragrafo = document.createElement("p");
  let textoIn = document.createTextNode("Entrou");

  paragrafo.appendChild(textoIn);
  mouseNaDiv.style.background = "red";

  if (paragrafo) {
    paragrafoAremover = document.querySelector("p");
    let changeElement = paragrafoAremover.parentNode;
    changeElement.replaceChild(paragrafo, paragrafoAremover);
  }
}

function mouseSai() {
  let paragrafo = document.createElement("p");
  let textoOut = document.createTextNode("Saiu");
  let voltaTextoPadrao = true;
  paragrafo.appendChild(textoOut);
  mouseNaDiv.style.background = "olivedrab";

  if (paragrafo) {
    paragrafoAremover = document.querySelector("p");
    let changeElement = paragrafoAremover.parentNode;
    changeElement.replaceChild(paragrafo, paragrafoAremover);
  }


  if (voltaTextoPadrao == true) {
    setTimeout(() => {
      paragrafo.removeChild(textoOut);
      paragrafo.appendChild(textoPadrao);
      mouseNaDiv.style.background = "royalblue";
    }, 3000);
  }
}
