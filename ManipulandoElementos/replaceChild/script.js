let novoElemento = document.createElement("h3");
let texto = document.createTextNode("O h1 foi alterado por um h3");

novoElemento.appendChild(texto);

let elementoQueSeraAlterado = document.querySelector("#tituloPrincipal");
let paiElementoQueSeraAlterado = elementoQueSeraAlterado.parentNode; // parentNode indica que esse elemento é pai da variavel elementoQueSeraAlterado

paiElementoQueSeraAlterado.replaceChild(novoElemento, elementoQueSeraAlterado);
