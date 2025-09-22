const restaurante1 = document.getElementById ("restaurante1");
const restaurante2 = document.getElementById ("restaurante2");
const restaurante3 = document.getElementById ("restaurante3");
const restaurante4 = document.getElementById ("restaurante4");
const restaurante5 = document.getElementById ("restaurante5");

const InformacionMapa = {
    "restaurante1" : "Sintaxis, ubicado en Av. Cabildo 2607, Belgrano, CABA, es un restaurante donde preparan comidas que ayudan a cuidar el azúcar en tu cuerpo. Tienen platos ricos y saludables para que los niños se sientan con energía para jugar y aprender asi como nuggets de pollo caseros con verduras al vapor, puré de calabaza, y gelatina de frutas sin azúcar.",
    "restaurante2" : "Cocelia, ubicado en Av. Libertador 8000, Nuñez, CABA, es un restaurante que ofrece comidas sanas y sabrosas para que los niños crezcan fuertes y felices, asi como mini milanesas de pollo al horno con ensalada colorida, sopa de verduras casera y fruta fresca picada",
    "restaurante3" : "Eat Cool Sin azúcar‑Keto, ubicado en Av. Francisco Beiró 5311, CABA, es un local donde todo lo que ofrecen es sin azúcar y muchas opciones son low carb / keto: crepes, waffles, smoothies y platos que permiten controlar mejor los carbohidratos; ideal para merienda o desayuno sano.",
    "restaurante4" : "Keto Gourmet CABA, no tiene salón grande que trabajar como restaurante tradicional, pero ofrecen viandas cetogénicas listas para calentar, hechas sin harinas, sin azúcar y sin conservantes, con buenas proteínas y vegetales bien seleccionados, práctico para almuerzos en casa o llevar.",
    "restaurante5" : "Ketolicity / Keto Bakery — aunque más enfocado a producción de productos (postres, panes, snacks) keto y low carb, también tienen opciones aptas para incluir en una comida completa; ideal para acompañar lo que comés, si estás cuidando el azúcar, ya sea desayuno, snack o postre.",
}

function MapaRestaurantes (event) {
    const mapa = event.target.id;
    const popup = InformacionMapa [mapa];

    document.getElementById ("popup-texto").textContent = popup;
    document.getElementById ("popup").style.display = "block";
}

function cerrarPopup (event) {
    document.getElementById ("popup").style.display = "none"
}

restaurante1.addEventListener("click", MapaRestaurantes);
restaurante2.addEventListener("click", MapaRestaurantes);
restaurante3.addEventListener("click", MapaRestaurantes);
restaurante4.addEventListener("click", MapaRestaurantes);
restaurante5.addEventListener("click", MapaRestaurantes);