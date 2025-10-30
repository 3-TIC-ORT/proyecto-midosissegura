let uno = document.getElementById ("uno");
let dos = document.getElementById ("dos");
dos.classList.add ("display");
let tres = document.getElementById ("tres");
tres.classList.add ("display");
let cuatro = document.getElementById ("cuatro");
cuatro.classList.add ("display");
let cinco = document.getElementById ("cinco");
cinco.classList.add ("display");
let seis = document.getElementById ("seis");
seis.classList.add ("display");
let siete = document.getElementById ("siete");
siete.classList.add ("display");
let ocho = document.getElementById ("ocho");
ocho.classList.add ("display");
let nueve = document.getElementById ("nueve");
nueve.classList.add ("display");
let diez = document.getElementById ("diez");
diez.classList.add ("display");
let once = document.getElementById ("once");
once.classList.add ("display");
let doce = document.getElementById ("doce");
doce.classList.add ("display");
let trece = document.getElementById ("trece");
trece.classList.add ("display");
let catorce = document.getElementById ("catorce");
catorce.classList.add ("display");

let atras = document.getElementById ("atras");
let seguir = document.getElementById ("seguir");

const total = 14;
const indice = 1;

const paginas = document.querySelector (`[class^="pagina"]`);

function paginasmostrar () {
    paginas.forEach((pagina, i) => {
        pagina.style.display = (i === indice) ? `block` : `none`;
    });
}

paginasmostrar ();

atras.addEventListener ("click", () => {
    indice--;
    if (indice<0) indice = paginas.length - 1;
    paginasmostrar
})

seguir.addEventListener ("click", () => {
    indice ++;
    if (indice > paginas.length) indice = 0;
    paginasmostrar ();
})
