const paso1 = document.getElementById ("PASO 1");
const paso2 = document.getElementById ("PASO 2");
const paso3 = document.getElementById ("PASO 3");
const paso4 = document.getElementById ("PASO 4");
const paso5 = document.getElementById ("PASO 5");
const paso6 = document.getElementById ("PASO 6");
const paso7 = document.getElementById ("PASO 7");

const InstruccionesPopUp = {
    "PASO 1": "Primero, lava tus manos con agua y jabón para que estén limpias.",
    "PASO 2": "Mira que la lapicera tenga la medicina correcta y esté lista para usar.",
    "PASO 3": "Coloca una aguja nueva en la lapicera, como ponerle un lápiz a la punta.",
    "PASO 4": "Gira la ruedita y aprieta el botón para sacar un poco de aire, así la medicina sale bien.",
    "PASO 5": "Gira la ruedita hasta el número que te dijo el doctor.",
    "PASO 6": "Pincha un poquito en tu barriguita o pierna y aprieta el botón para que entre la medicina.",
    "PASO 7": "Saca la aguja con cuidado y ponla en un bote especial para que nadie se lastime.",
}

function Instrucciones (event) {
    const paso = event.target.id;
    const popup = InstruccionesPopUp [paso];
    alert (popup)
}