let novoElemento = document.createElement("h3");
let texto = document.createTextNode("Um texto no elemento criado");
novoElemento.appendChild(texto);
let elementoAlvo = document.querySelector("#tituloPrincipal");
let elementoPai = document.querySelector("#conteudoPrincipal");

elementoPai.insertBefore(novoElemento, elementoAlvo);
