
const botonorden1 = document.getElementById("boton1");
const botonorden2 = document.getElementById("boton2");
const img1 = document.getElementById("imagen1");
const img2 = document.getElementById("imagen2");
const img3 = document.getElementById("imagen3");
botonorden1.addEventListener("click", () => {
img1.addEventListener("click", () => {
  img1.classList.add("orden-1")
})});
botonorden2.addEventListener("click", () => {
  img2.addEventListener("click", () => {
    img2.classList.add("orden2")
  })});
