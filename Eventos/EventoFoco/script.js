let input = document.querySelector("#inpt1");

input.addEventListener("focus", () => {
  console.log("entrou no input");
});
input.addEventListener("blur", () => {
  console.log("saiu do input");
});
