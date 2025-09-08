const botonorden = document.getElementById("boton");
const img1 = document.getElementById("imagen1");

botonorden.addEventListener("click", () => {
  img1.addEventListener("click", () => {
    img1.classList.add("orden-1");
  });
});