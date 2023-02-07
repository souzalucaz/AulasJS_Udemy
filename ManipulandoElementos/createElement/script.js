let lista = document.createElement("ul"); //Crie o elemento

let elementoPai = document.querySelector("#paragrafo1"); //pegue o elemento pai

elementoPai.appendChild(lista); // insira lista dentro do elemento pai

for (let i = 1; i <= 5; i++) {
  let itemDaLista = document.createElement("li"); // crie o elemento
  let texto = document.createTextNode(`Item ${i} da lista`); // crie o texto
  itemDaLista.appendChild(texto); // insira o texto dentro do elemento item da lista
  lista.appendChild(itemDaLista); // insira item da lista(li) dentro de Lista (ul)
}
