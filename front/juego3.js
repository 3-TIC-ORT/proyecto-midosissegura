const botonorden1 = document.getElementById("boton1");
const botonorden2 = document.getElementById("boton2");
const botonorden3 = document.getElementById("boton3");
const botonorden4 = document.getElementById("boton4");
const botonorden5 = document.getElementById("boton5");
const botonorden6 = document.getElementById("boton6");
const botonorden7 = document.getElementById("boton7");
let resultadoDiv = document.getElementById("resultadodiv");
let correcttos = 0;

const botonresultado = document.getElementById("botonresultado");
const img1 = document.getElementById("imagen1");
const img2 = document.getElementById("imagen2");
const img3 = document.getElementById("imagen3");
const img4 = document.getElementById("imagen4");
const img5 = document.getElementById("imagen5");
const img6 = document.getElementById("imagen6");
const img7 = document.getElementById("imagen7");
const contenedor = document.querySelector(".containerdeimg");

let imagenSeleccionada = null;

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
  let fondo1 = window.getComputedStyle(botonorden1).backgroundImage || '';
  let fondo2 = window.getComputedStyle(botonorden2).backgroundImage || '';
  let fondo3 = window.getComputedStyle(botonorden3).backgroundImage || '';
  let fondo4 = window.getComputedStyle(botonorden4).backgroundImage || '';
  let fondo5 = window.getComputedStyle(botonorden5).backgroundImage || '';
  let fondo6 = window.getComputedStyle(botonorden6).backgroundImage || '';
  let fondo7 = window.getComputedStyle(botonorden7).backgroundImage || '';
resultadoDiv.classList.add("zindex")
  correcttos = 0; 

  const f1 = fondo1.toLowerCase();
  const f2 = fondo2.toLowerCase();
  const f3 = fondo3.toLowerCase();
  const f4 = fondo4.toLowerCase();
  const f5 = fondo5.toLowerCase();
  const f6 = fondo6.toLowerCase();
  const f7 = fondo7.toLowerCase();

  if (f1.includes('paso 1.png') || f1.includes('paso%201.png')) correcttos++;
  if (f2.includes('paso-2.jpg') || f2.includes('paso-2.jpeg') || f2.includes('paso-2')) correcttos++;
  if (f3.includes('paso-3.png')) correcttos++;
  if (f4.includes('paso-4.png')) correcttos++;
  if (f5.includes('paso-5.png')) correcttos++;
  if (f6.includes('paso-6.png')) correcttos++;
  if (f7.includes('paso-7.png')) correcttos++;


  const numeroHtml = `<span class="numero">${correcttos}</span>`;
  const num7 = `<span class="numero">7</span>`;
  if (correcttos == 7) {
    resultadoDiv.classList.add("verde");
  } else if (correcttos < 7 && correcttos > 3) {
    resultadoDiv.classList.add("amarillo");
  } else {
    resultadoDiv.classList.add("rojo");
  }
  // inject the text and keep the cross image (use relative path)
  resultadoDiv.innerHTML = `<p class="txtresultado">hiciste ${numeroHtml} de ${num7} bien</p>` +
    '<img src="imagenes/cruz.png" alt="cruz" class="cruz" id="cruz">';
  actualizarVisibilidad(true);
});

function actualizarVisibilidad(mostrar) {
  if (mostrar) {
    resultadoDiv.style.display = "flex";
    resultadoDiv.style.alignItems = "center";
    resultadoDiv.style.justifyContent = "center";
  } else {
    resultadoDiv.style.display = "none";
  }
}

document.getElementById('resultadodiv').addEventListener('click', function (event) {
  if (event.target && event.target.classList && event.target.classList.contains('cruz')) {
    actualizarVisibilidad(false);
    resultadoDiv.classList.remove('verde', 'amarillo', 'rojo');
    correcttos = 0;
    // restore the initial inner content (keep the cross so popup can be reused)
    resultadoDiv.innerHTML = '<img src="imagenes/cruz.png" alt="cruz" class="cruz" id="cruz">';
  }
});
