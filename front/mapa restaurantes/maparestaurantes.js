const restaurante1 = document.getElementById ("restaurante1");
const restaurante2 = document.getElementById ("restaurante2");
const restaurante3 = document.getElementById ("restaurante3");
const restaurante4 = document.getElementById ("restaurante4");
const restaurante5 = document.getElementById ("restaurante5");
const elemento1a = document.getElementById ("restaurante1a");
const elemento2a = document.getElementById ("restaurante2a");
const elemento3a = document.getElementById ("restaurante3a");
const elemento4a = document.getElementById ("restaurante4a");
const elemento5a = document.getElementById ("restaurante5a");
const BOTON1 = document.getElementById ("BOTON1");
const BOTON2 = document.getElementById ("BOTON2");
const BOTON3 = document.getElementById ("BOTON3");
const BOTON4 = document.getElementById ("BOTON4");
const BOTON5 = document.getElementById ("BOTON5");

BOTON1.addEventListener("click", () => {
});

BOTON2.addEventListener("click", () => {
});

BOTON3.addEventListener("click", () => {
});

BOTON4.addEventListener("click", () => {
});

BOTON5.addEventListener("click", () => {
});


function popup (event) {
}

function cerrarPopup (event) {
    document.getElementById ("popup").style.display = "none"
}

let elemento;
let restaurante;
function manejarMouseOver(numero) {
  const restaurante = document.getElementById("restaurante" + numero);
  const elemento = document.getElementById("restaurante" + numero + "a");
  
  restaurante.classList.add('oculto');
  elemento.classList.remove('oculto');
}

function manejarMouseOut(numero) {
  const restaurante = document.getElementById("restaurante" + numero);
  const elemento = document.getElementById("restaurante" + numero + "a");
  
  restaurante.classList.remove('oculto');
  elemento.classList.add('oculto');
}

restaurante1.addEventListener("mouseenter", () => manejarMouseOver(1));
restaurante1.addEventListener("mouseout", () => manejarMouseOut(1));
elemento1a.addEventListener("mouseenter", () => manejarMouseOver(1));
elemento1a.addEventListener("mouseout", () => manejarMouseOut(1));

restaurante2.addEventListener("mouseenter", () => manejarMouseOver(2));
restaurante2.addEventListener("mouseout", () => manejarMouseOut(2));
elemento2a.addEventListener("mouseenter", () => manejarMouseOver(2));
elemento2a.addEventListener("mouseout", () => manejarMouseOut(2));

restaurante3.addEventListener("mouseenter", () => manejarMouseOver(3));
restaurante3.addEventListener("mouseout", () => manejarMouseOut(3));
elemento3a.addEventListener("mouseenter", () => manejarMouseOver(3));
elemento3a.addEventListener("mouseout", () => manejarMouseOut(3));

restaurante4.addEventListener("mouseenter", () => manejarMouseOver(4));
restaurante4.addEventListener("mouseout", () => manejarMouseOut(4));
elemento4a.addEventListener("mouseenter", () => manejarMouseOver(4));
elemento4a.addEventListener("mouseout", () => manejarMouseOut(4));

restaurante5.addEventListener("mouseenter", () => manejarMouseOver(5));
restaurante5.addEventListener("mouseout", () => manejarMouseOut(5));
elemento5a.addEventListener("mouseenter", () => manejarMouseOver(5));
elemento5a.addEventListener("mouseout", () => manejarMouseOut(5));
