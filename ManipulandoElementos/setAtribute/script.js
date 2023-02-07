let linkVazio = document.querySelector("footer a");
let url = "https://google.com.br";
console.log(linkVazio.getAttribute("href")); // pega o atributo do elemento selecionado
linkVazio.setAttribute("href", url); //especifica o atributo que será alterado
