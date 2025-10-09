let cabello = 0;
const imagenescabellos = document.getElementById ("cabellos");
const ordencabellos = [
    "AZUL",
    "RUBIO",
    "VERDO"
];


imagenescabellos.addEventListener ("click", function() {
    cabello = (cabello+1) % ordencabellos.length;
    imagenescabellos.src = ordencabellos [cabello];
})