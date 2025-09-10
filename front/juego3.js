const botonorden1 = document.getElementById("boton1");
const botonorden2 = document.getElementById("boton2");
const botonorden3 = document.getElementById("boton3");
const botonorden4 = document.getElementById("boton4");
const botonorden5 = document.getElementById("boton5");
const botonorden6 = document.getElementById("boton6");
const botonorden7 = document.getElementById("boton7");

const botonreiniciar = document.getElementById("botonreiniciar");
const img1 = document.getElementById("imagen1");
const img2 = document.getElementById("imagen2");
const img3 = document.getElementById("imagen3");
  const img4 = document.getElementById("imagen4");
  const img5 = document.getElementById("imagen5");
  const img6 = document.getElementById("imagen6");
  const img7 = document.getElementById("imagen7");
 const contenedor = document.querySelector(".containerdeimg");
botonreiniciar.addEventListener("click", () => {

  function mezclarElementos(container) {
    let imagenes = Array.from(container.children);
    for (let i = imagenes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temporal = imagenes[i];
      imagenes[i] = imagenes[j];
      imagenes[j] = temporal;
    }
    imagenes.forEach(img => container.appendChild(img));
  }

  mezclarElementos(contenedor);
});
let imagenSeleccionada =null;

img1.addEventListener("click", () => {
  imagenSeleccionada = img1.getAttribute("src");
});
img2.addEventListener("click", () => {
  imagenSeleccionada = img2.getAttribute("src");
});
img3.addEventListener("click", () => {
  imagenSeleccionada = img3.getAttribute("src");
});

img4.addEventListener("click", () => {
  imagenSeleccionada = img4.getAttribute("src");
});
img5.addEventListener("click", () => {
  imagenSeleccionada = img5.getAttribute("src");
});
img6.addEventListener("click", () => {
  imagenSeleccionada = img6.getAttribute("src");
});
img7.addEventListener("click", () => {
  imagenSeleccionada = img7.getAttribute("src");
});

function aplicarFondo(boton) {
  if (imagenSeleccionada) {
    boton.style.backgroundImage = `url("${imagenSeleccionada}")`;
    boton.style.backgroundSize = "cover";  
    boton.style.backgroundPosition = "center";
  }
}
botonorden1.addEventListener("click", () => aplicarFondo(botonorden1));
botonorden2.addEventListener("click", () => aplicarFondo(botonorden2));
botonorden3.addEventListener("click", () => aplicarFondo(botonorden3));
botonorden4.addEventListener("click", () => aplicarFondo(botonorden4));
botonorden5.addEventListener("click", () => aplicarFondo(botonorden5));
botonorden6.addEventListener("click", () => aplicarFondo(botonorden6));
botonorden7.addEventListener("click", () => aplicarFondo(botonorden7));



botonresultado.addEventListener("click", () => {

  let fondo1 = window.getComputedStyle(botonorden1).backgroundImage;
  let fondo2 = window.getComputedStyle(botonorden2).backgroundImage;
  let fondo3 = window.getComputedStyle(botonorden3).backgroundImage;
  let fondo4 = window.getComputedStyle(botonorden4).backgroundImage;
  let fondo5 = window.getComputedStyle(botonorden5).backgroundImage;
  let fondo6 = window.getComputedStyle(botonorden6).backgroundImage;
  let fondo7 = window.getComputedStyle(botonorden7).backgroundImage;

  if (
    fondo1.includes("paso%201.png") &&  fondo2.includes("Paso-2.jpg") && fondo3.includes("paso-3.png") &&fondo4.includes("paso-4.png") &&fondo5.includes("paso-5.png") &&
    fondo6.includes("paso-6.png") &&
    fondo7.includes("paso-7.png")
  ) {
    alert("ganaste");
  } else {
    alert("sigue intentando");
  }
});
