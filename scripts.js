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

botones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const clase = e.currentTarget.classList;
    if (clase.contains("decrement")) {
      console.log("Decrementando");
      contadorValor--;
      contador.textContent = contadorValor;
    } else if (clase.contains("increment")) {
      console.log("Incrementando");
      contadorValor++;
      contador.textContent = contadorValor;
    } else if (clase.contains("reset")) {
      console.log("Reseteando");
      contadorValor = valorInicial;
      contador.textContent = contadorValor;
    }
  });
});
