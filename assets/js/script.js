// JavaScript para agregar/quitar borde al hacer clic
const imagen = document.getElementById("RBorder");

imagen.addEventListener("click", function () {
  if (imagen.style.border) {
    imagen.style.border = ""; // Quitar el borde si ya lo tiene
  } else {
    imagen.style.border = "2px solid red"; // Agregar el borde
  }
});

function verificarStickers() {
  // Obtener valores de los inputs
  const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
  const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
  const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

  // Calcular la suma total
  const total = sticker1 + sticker2 + sticker3;

  // Mostrar el mensaje correspondiente
  const resultado = document.getElementById("resultado");
  if (total <= 10) {
    resultado.textContent = `Llevas ${total} stickers.`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Llevas demasiados stickers.";
    resultado.style.color = "red";
  }
}

function verificarPassword() {
  // Obtener valores seleccionados
  const digit1 = document.getElementById("digit1").value;
  const digit2 = document.getElementById("digit2").value;
  const digit3 = document.getElementById("digit3").value;

  // Construir el password ingresado
  const password = digit1 + digit2 + digit3;

  // Mostrar el mensaje adecuado
  const resultado = document.getElementById("resultado");
  if (password === "911") {
    resultado.textContent = "Password 1 correcto";
    resultado.style.color = "green";
  } else if (password === "714") {
    resultado.textContent = "Password 2 correcto";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Password incorrecto";
    resultado.style.color = "red";
  }
}
