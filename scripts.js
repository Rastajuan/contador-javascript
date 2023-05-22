const botones = document.querySelectorAll(".counter__button");
console.log(botones);

const contador = document.getElementById("number");
let contadorValor = contador.textContent;
console.log(contadorValor);

botones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const clase = e.currentTarget.classList;
    if (clase.contains("decrement")) {
      console.log("Decrementar");
      contadorValor--;
      contador.textContent = contadorValor;
    } else if (clase.contains("increment")) {
      console.log("Incrementar");
      contadorValor++;
      contador.textContent = contadorValor;
    } else if (clase.contains("reset")) {
      console.log("Resetear");
      contador.textContent = 0;
      contadorValor=0;
    }
  });
});
