const restaurante1 = document.getElementById ("restaurante1");
const restaurante2 = document.getElementById ("restaurante2");
const restaurante3 = document.getElementById ("restaurante3");
const restaurante4 = document.getElementById ("restaurante4");
const restaurante5 = document.getElementById ("restaurante5");

const InformacionMapa = {
    "restaurante1" : "Sintaxis, ubicado en Av. Cabildo 2607, Belgrano, CABA, es un restaurante donde preparan comidas que ayudan a cuidar el azúcar en tu cuerpo. Tienen platos ricos y saludables para que los niños se sientan con energía para jugar y aprender asi como nuggets de pollo caseros con verduras al vapor, puré de calabaza, y gelatina de frutas sin azúcar."
    "restaurante2" : "Cocelia, ubicado en Av. Libertador 8000, Nuñez, CABA, es un restaurante que ofrece comidas sanas y sabrosas para que los niños crezcan fuertes y felices, asi como mini milanesas de pollo al horno con ensalada colorida, sopa de verduras casera y fruta fresca picada"
    "restaurante3" : ""
    "restaurante4" : ""
    "restaurante5" : ""
}

function mapa (event) {
    const mapa = event.target.id;
    const popup = InstruccionesPopUp [mapa];

    document.getElementById ("popup-texto").textContent = mapa;
    document.getElementById ("popup").style.display = "block";
}

function cerrar (event) {
    document.getElementById ("popup").style.display = "none"
}