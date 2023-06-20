const resultado = document.getElementById("resultado");

function monstraTabuada(numero) {
  resultado.innerHTML = "";
  for (let x = 0; x <= 10; x++) {
    resultado.innerHTML += `<p>${numero} x ${x} = ${numero * x}</p>`;
  }
}
