window.addEventListener("load", () => {
  window.alert("assine nossos termos de uso");
});

window.addEventListener("beforeunload", (e) => {
  e.returnValue = null;
});
