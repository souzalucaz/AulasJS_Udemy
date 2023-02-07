let evento1 = document.querySelector("p");
let evento2 = document.querySelector("button");

evento1.addEventListener("click", exibeMsgEvento1);
evento2.addEventListener("click", exibeMsgEvento2);

function exibeMsgEvento1() {
  console.log("Mensagem do parágrafo");
}
function exibeMsgEvento2(removerPropagation) {
  console.log("Mensagem do botão");
  removerPropagation.stopPropagation(); /* IMPORTANTE:  para usar o método stopPropagation() NÃO ESQUECER DE PASSAR O OBJETO DO EVENTO COMO PARAMETRO*/
}

//A propagação de eventos é causada quando temos dois eventos semelhantes em elementos com relação de pai e filho(um elemento encapsulado em outro) nesse caso serão acionados ambos os eventos simultaneamente, para que esse possível problema seja sanado eu coloco uma argumento na função que executa a ação do elemento que desejo executar a ação separadamente, em seguida , nesse argumento chamo o método stopPropagation.
