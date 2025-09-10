const botonorden1 = document.getElementById("boton1");
const botonorden2 = document.getElementById("boton2");
const botonorden3 = document.getElementById("boton3");
const botonorden4 = document.getElementById("boton4");
const botonorden5 = document.getElementById("boton5");
const botonorden6 = document.getElementById("boton6");
const botonorden7 = document.getElementById("boton7");
const img1 = document.getElementById("imagen1");
const img2 = document.getElementById("imagen2");
const img3 = document.getElementById("imagen3");
  const img4 = document.getElementById("imagen4");
  const img5 = document.getElementById("imagen5");
  const img6 = document.getElementById("imagen6");
  const img7 = document.getElementById("imagen7");

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
