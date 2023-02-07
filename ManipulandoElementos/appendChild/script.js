let novoElemento = document.createElement("h3");
let texto = document.createTextNode("Um texto H3 no elemento criado");

novoElemento.appendChild(texto);

let elementoPai = document.querySelector("#paragrafo1");
let h3 = elementoPai.parentNode;

h3.appendChild(novoElemento);
