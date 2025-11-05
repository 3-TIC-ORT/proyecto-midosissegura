connect2Server ();

const cabellos = document.getElementById ("cabellos");

const NADA = document.getElementById ("NADA");
const PELADO = document.getElementById ("PELADO");
const VERDO = document.getElementById ("VERDO");
const RUBIO = document.getElementById ("RUBIO");
const ROJO = document.getElementById ("ROJO");
const AZUL = document.getElementById ("AZUL");
const CELESTO = document.getElementById ("CELESTO");
const PELINEGRO = document.getElementById ("PELINEGRO");
const MOROCHO = document.getElementById ("MOROCHO");
const VERDA = document.getElementById ("VERDA");
const RUBIA = document.getElementById ("RUBIA");
const ROJA = document.getElementById ("ROJA");
const AZULA = document.getElementById ("AZULA");
const CELESTA = document.getElementById ("CELESTA");
const PELINEGRA = document.getElementById ("PELINEGRA");
const MOROCHA = document.getElementById ("MOROCHA");
const ALBINO = document.getElementById ("ALBINO");

const pelos = [
    NADA,
    PELADO,
    VERDO,
    RUBIO,
    ROJO,
    AZUL,
    CELESTO,
    PELINEGRO,
    MOROCHO,
    VERDA,
    RUBIA,
    ROJA,
    AZULA,
    CELESTA,
    PELINEGRA,
    MOROCHA,
    ALBINO
]

const cabelloenpantalla = [
function cabelloenpantalla() {
    return pelos.find((cabellos) => cabellos.style.display === "inline");
  }]

const anteojosysol = document.getElementById  ("anteojosysol");

const NADASOL = document.getElementById ("NADA");
const SOL = document.getElementById ("SOL");
const MIOPE = document.getElementById ("MIOPE");

const tiposanteojosysol = [
    NADASOL,
    SOL,
    MIOPE
]

const anteojosenpantalla = [
    function anteojosenpantalla() {
        return tiposanteojosysol.find((anteojosysol) => anteojosysol.style.display === "inline");
      }]


const colorcitos = document.getElementById ("cabellos");

const NADAENTERO = document.getElementById ("NADA");
const NORMALENTERO = document.getElementById ("NORMALENTERO");
const NEGROENTERO = document.getElementById ("NEGROENTERO");
const ALBINOENTERO = document.getElementById ("ALBINOENTERO");
      
const piel = [
    NADAENTERO,
    NORMALENTERO,
    NEGROENTERO,
    ALBINOENTERO
]
      
const pielenpantalla = [
    function pielenpantalla() {
          return piel.find((colorcitos) => colorcitos.style.display === "inline");
        }]

const dataavatar = [
    cabelloenpantalla,
    anteojosenpantalla,
    pielenpantalla
]

function enviardatos() {
    postEvent("NiñoRegistrado", {
        cabelloenpantalla: localStorage.getItem("nombreniño"),
        anteojosenpantalla: localStorage.getItem("apellidoniño"),
        pielenpantalla: comidaelegida.value,
    },
    function (data) {
      const respuesta = data;
      alert(`Calorías: ${respuesta} Kcal`);
      resultado.innerText = `Calorías: ${respuesta} Kcal`;
    });
}
    