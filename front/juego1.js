const paso1 = document.getElementById ("paso1");
const paso2 = document.getElementById ("paso2");
const paso3 = document.getElementById ("paso3");
const paso4 = document.getElementById ("paso4");
const paso5 = document.getElementById ("paso5");
const paso6 = document.getElementById ("paso6");
const paso7 = document.getElementById ("paso7");

const InstruccionesPopUp = {
    "paso1": "Primero, lava tus manos con agua y jabón para que estén limpias.",
    "paso2": "Mira que la lapicera tenga la medicina correcta y esté lista para usar.",
    "paso3": "Coloca una aguja nueva en la lapicera, como ponerle un lápiz a la punta.",
    "paso4": "Gira la ruedita y aprieta el botón para sacar un poco de aire, así la medicina sale bien.",
    "paso5": "Gira la ruedita hasta el número que te dijo el doctor.",
    "paso6": "Pincha un poquito en tu barriguita o pierna y aprieta el botón para que entre la medicina.",
    "paso7": "Saca la aguja con cuidado y ponla en un bote especial para que nadie se lastime.",
}

function Instrucciones (event) {
    const paso = event.target.id;
    const popup = InstruccionesPopUp [paso];

    document.getElementById ("popup-texto").textContent = popup;
    document.getElementById ("popup").style.display = "block";
}

function cerrarPopup (event) {
    document.getElementById ("popup").style.display = "none"
}
paso1.addEventListener("click", Instrucciones);
paso2.addEventListener("click", Instrucciones);
paso3.addEventListener("click", Instrucciones);
paso4.addEventListener("click", Instrucciones);
paso5.addEventListener("click", Instrucciones);
paso6.addEventListener("click", Instrucciones);
paso7.addEventListener("click", Instrucciones);