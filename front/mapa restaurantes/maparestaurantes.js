const restaurante1 = document.getElementById ("restaurante1");
const restaurante2 = document.getElementById ("restaurante2");
const restaurante3 = document.getElementById ("restaurante3");
const restaurante4 = document.getElementById ("restaurante4");
const restaurante5 = document.getElementById ("restaurante5");
const elemento1a = document.getElementById ("restaurante1a");
const elemento2a = document.getElementById ("restaurante2a");
const elemento3a = document.getElementById ("restaurante3a");
const elemento4a = document.getElementById ("restaurante4a");
const elemento5a = document.getElementById ("restaurante5a");
var BOTON1 = document.getElementById ("BOTON1");
var BOTON2 = document.getElementById ("BOTON2");
var BOTON3 = document.getElementById ("BOTON3");
var BOTON4 = document.getElementById ("BOTON4");
var BOTON5 = document.getElementById ("BOTON5");
const POPUP = document.getElementById ("popup");

var map = L.map('Map').setView([-34.58085644017662, -58.43144334736555], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
BOTON1 = L.marker([-34.59453594005355, -58.4247654473649]).addTo(map);
BOTON2= L.marker([-34.5784899337124, -58.43691580503798]).addTo(map);
BOTON3 = L.marker([-34.58094477343005, -58.43138970318477]).addTo(map);
BOTON4 = L.marker([-34.59550358703196, -58.39119284736489]).addTo(map);
BOTON5 = L.marker([-34.563984197260716, -58.45359381227147]).addTo(map);
const restaurantes = [
  {
    titulo: "DISTRITO KETO",
    ubicacion: "Lavalleja 1343, CABA",
    calificacion: "5 / 5",
    descripcion: "Restaurante especializado en cocina cetogénica, con platos bajos en carbohidratos y sin azúcar, ideal para controlar la glucosa."
  },
  {
    titulo: "ALMA KETO",
    ubicacion: "Nicaragua 5949, CABA",
    calificacion: "4.3 / 5",
    descripcion: "Primer restaurante keto de Buenos Aires, con comidas y postres hechos con harinas alternativas y sin azúcares refinados."
  },
  {
    titulo: "BIO RESTAURANT",
    ubicacion: "Humboldt 2192, Palermo",
    calificacion: "5 / 5",
    descripcion: "Restaurante orgánico con cocina natural, vegana y vegetariana, usando ingredientes integrales y sin procesar."
  },
  {
    titulo: "GREEN EAT",
    ubicacion: "Av. Santa Fe 1661, Recoleta",
    calificacion: "4.2 / 5",
    descripcion: "Cadena de comida saludable con bowls, ensaladas y platos frescos que permiten armar comidas equilibradas."
  },
  {
    titulo: "NEMORAL CAFÉ",
    ubicacion: "Vuelta de Obligado 1814, Belgrano",
    calificacion: "4.5 / 5",
    descripcion: "Cafetería saludable con opciones sin TACC y sin azúcar refinada, ideal para quienes buscan alternativas aptas."
  }
];


function popup (restaurantepop) {
    POPUP.innerHTML = `
      <div class="popupcontenedor">
        <h3>${restaurantepop.titulo}</h3>
      <div class= "informacion">
      <div class="fila">
          <img src="ubicacion.png" class="icono">
          <h4 class="texto">${restaurantepop.ubicacion}</h4>
      </div>

      <div class="fila">
          <img src="calificacion.png" class="icono">
          <h4 class="texto">${restaurantepop.calificacion}</h4>
      </div>

      <div class="fila">
          <img src="descripcion.png" class="icono">
          <h4 class="texto">${restaurantepop.descripcion}</h4>
      </div>
      </div>

      <button onclick= "cerrarPopup()" class="cerrar">
        <img src="equis.png"></img>
      </button>
      </div>`;
      POPUP.style.display = "block";
}

function cerrarPopup (event) {
    POPUP.style.display = "none";
}

BOTON1.addEventListener("click", () => popup(restaurantes [0]));

BOTON2.addEventListener("click", () => popup(restaurantes [1]));

BOTON3.addEventListener("click", () => popup(restaurantes[2]));

BOTON4.addEventListener("click", () => popup(restaurantes[3]));

BOTON5.addEventListener("click", () => popup(restaurantes[4]));


let elemento;
let restaurante;
function manejarMouseOver(numero) {
  const restaurante = document.getElementById("restaurante" + numero);
  const elemento = document.getElementById("restaurante" + numero + "a");
  
  restaurante.classList.add('oculto');
  elemento.classList.remove('oculto');
}

function manejarMouseOut(numero) {
  const restaurante = document.getElementById("restaurante" + numero);
  const elemento = document.getElementById("restaurante" + numero + "a");
  
  restaurante.classList.remove('oculto');
  elemento.classList.add('oculto');
}
/*/restaurante1.addEventListener("mouseenter", () => manejarMouseOver(1));
restaurante1.addEventListener("mouseout", () => manejarMouseOut(1));
elemento1a.addEventListener("mouseenter", () => manejarMouseOver(1));
elemento1a.addEventListener("mouseout", () => manejarMouseOut(1));

restaurante2.addEventListener("mouseenter", () => manejarMouseOver(2));
restaurante2.addEventListener("mouseout", () => manejarMouseOut(2));
elemento2a.addEventListener("mouseenter", () => manejarMouseOver(2));
elemento2a.addEventListener("mouseout", () => manejarMouseOut(2));

restaurante3.addEventListener("mouseenter", () => manejarMouseOver(3));
restaurante3.addEventListener("mouseout", () => manejarMouseOut(3));
elemento3a.addEventListener("mouseenter", () => manejarMouseOver(3));
elemento3a.addEventListener("mouseout", () => manejarMouseOut(3));

restaurante4.addEventListener("mouseenter", () => manejarMouseOver(4));
restaurante4.addEventListener("mouseout", () => manejarMouseOut(4));
elemento4a.addEventListener("mouseenter", () => manejarMouseOver(4));
elemento4a.addEventListener("mouseout", () => manejarMouseOut(4));

restaurante5.addEventListener("mouseenter", () => manejarMouseOver(5));
restaurante5.addEventListener("mouseout", () => manejarMouseOut(5));
elemento5a.addEventListener("mouseenter", () => manejarMouseOver(5));
elemento5a.addEventListener("mouseout", () => manejarMouseOut(5));*/
