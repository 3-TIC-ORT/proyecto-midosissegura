const botonorden1 = document.getElementById("boton1");
const botonorden2 = document.getElementById("boton2");
const botonorden3 = document.getElementById("boton3");
const img1 = document.getElementById("imagen1");
const img2 = document.getElementById("imagen2");
const img3 = document.getElementById("imagen3");

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
