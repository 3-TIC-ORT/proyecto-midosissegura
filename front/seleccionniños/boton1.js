const boton1 = document.getElementById ("boton1");

const primer1 = document.getElementById("1primer");
const primer2 = document.getElementById("2primer");
const primer3 = document.getElementById("3primer");
const primer4 = document.getElementById("4primer");
const primer5 = document.getElementById("5primer");
const primer6 = document.getElementById("6primer");
const primer7 = document.getElementById("7primer");
const primer8 = document.getElementById("8primer");
const primer9 = document.getElementById("9primer");
const primer10 = document.getElementById("10primer");


let atras = document.getElementById ("atras");
let seguir = document.getElementById ("seguir");

let indice = 0;

const imagenesprimero = document.querySelectorAll (".imagenesprimero");


function paginasmostrar (pagina) {
    imagenesprimero.forEach((pagina, i) => {
        pagina.style.display = (i === indice) ? `block` : `none`;
    });

    if (indice === 0) {
        atras.style.display= "none"
    }
    else {
        atras.style.display= "block"
    }

    if (indice === imagenesprimero.length - 1){
        seguir.style.display = "none"
    }
    else {
        seguir.style.display = "block"
    }

    atras.addEventListener ("click", () => {
    indice--;
    if (indice<0) indice = pagina.length - 1;
})

    seguir.addEventListener ("click", () => {
    indice ++;
    if (indice > pagina.length) indice = 0;
})
}




