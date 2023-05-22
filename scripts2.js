const botones = document.querySelectorAll(".counter__button");
console.log(botones);

let valorInicial = "";

while (isNaN(valorInicial) || valorInicial === "") {
  valorInicial = parseInt(prompt("Ingrese un número entero:"));
}

const contador = document.getElementById("number");
contador.textContent = valorInicial;
let contadorValor = contador.textContent;
console.log(contadorValor);

for (const boton of botones) {
  boton.addEventListener("click", (e) => {
    const clase = e.currentTarget.classList;
    if (clase.contains("decrement")) {
      console.log("Decrementando");
      decrementarContador();
    } else if (clase.contains("increment")) {
      console.log("Incrementando");
      incrementarContador();
    } else if (clase.contains("reset")) {
      console.log("Reseteando");
      resetearContador();
    }
  });
}

// Funciones. Refactorizamos el código para que sea más legible y mantenible mediante funciones.

function decrementarContador() {
  contadorValor--;
  actualizarValorContador();
}

function incrementarContador() {
  contadorValor++;
  actualizarValorContador();
}

function resetearContador() {
  contadorValor = valorInicial;
  actualizarValorContador();
}

function actualizarValorContador() {
  contador.textContent = contadorValor;
}
