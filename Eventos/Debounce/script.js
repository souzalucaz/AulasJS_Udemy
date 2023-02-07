/** Debounce é uma forma de não chamar o mesmo evento várias vezes por segundo, como no caso do mousemove, usando o debounce eu posso acionar o evento a cada x milisegundos */

let timeout;
window.addEventListener("mousemove", (e) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log(e.x);
  }, 100);
});
