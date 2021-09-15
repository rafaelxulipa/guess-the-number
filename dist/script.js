var numeroSecreto = parseInt(Math.random() * 11);
var count = 0;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  count += 1;
  console.log(count);

  if (count <= 3) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "🧐 Você acertou! parabéns 👏";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML =
        "😠 Que pena! Você precisa digitar um valor entre 0 e 10!";
    } else {
      if (chute > numeroSecreto) {
        elementoResultado.innerHTML =
          "😟 Errou! O número que você digitou é maior do que o número secreto.";
      } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML =
          "😟 Errou! O número que você digitou é menor do que o número secreto.";
      }
    }
  } else {
    elementoResultado.innerHTML =
      "😜 Infelizmente acabou o numero de tentativas. Recarregue a página e tente outra vez!";
  }
}