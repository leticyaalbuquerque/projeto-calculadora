const numerosButton = document.querySelectorAll("[data-numero]");
const operadoresButton = document.querySelectorAll("[data-action]");
const checkbox = document.getElementById('check')
const html = document.querySelector('html')
let operacao = document.getElementById("operacao");
let resultado = document.getElementById("resultado");

numerosButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    operacao.innerHTML += `${e.target.dataset.numero}`;
  });
});

operadoresButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    let operadores = e.target.dataset.action;
    let valorInput = operacao.innerHTML;
    if (operadores === "limpar-tudo") {
      operacao.innerHTML = "";
      resultado.innerHTML = "0";
    } else if (operadores === "apagar") {
      operacao.innerHTML = valorInput.substring(0, valorInput.length - 1);
    } else if (operadores === "decimal") {
      operacao.innerHTML += ".";
    } else if (operadores === "calcular") {
      if (isNaN(valorInput[valorInput.length - 1])) return;
      resultado.innerHTML = eval(valorInput.replace(/[^-()\d/*+.]/g, ""));
      operacao.innerHTML = eval(valorInput.replace(/[^-()\d/*+.]/g, ""));
    } else {
      if (isNaN(valorInput[valorInput.length - 1])) return;
      operacao.innerHTML += `${operadores}`;
    }
  });
});

checkbox.addEventListener("change", () => {
    html.classList.toggle('dark')
})
