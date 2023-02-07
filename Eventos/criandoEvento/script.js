let elemento = document.querySelector("a");
console.log(elemento);

function teste() {
  elemento.addEventListener("click", () => {
    window.alert("Clicou no Link!");
  });
}
