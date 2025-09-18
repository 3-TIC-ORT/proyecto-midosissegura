const restaurante1 = document.getElementById ("restaurante1");
const restaurante2 = document.getElementById ("restaurante2");
const restaurante3 = document.getElementById ("restaurante3");
const restaurante4 = document.getElementById ("restaurante4");
const restaurante5 = document.getElementById ("restaurante5");

function mapa (event) {
    const mapa = event.target.id;
    const popup = InstruccionesPopUp [mapa];

    document.getElementById ("popup-texto").textContent = mapa;
    document.getElementById ("popup").style.display = "block";
}

function cerrar (event) {
    document.getElementById ("popup").style.display = "none"
}