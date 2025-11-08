
const segundo1 = document.getElementById("1segundo");
const segundo2 = document.getElementById("2segundo");
const segundo3 = document.getElementById("3segundo");
const segundo4 = document.getElementById("4segundo");

let atras2 = document.getElementById ("atras");
let seguir2 = document.getElementById ("seguir");

let indice2 = 0;

const imagenessegundo = document.querySelectorAll (".imagenessegundo img");


function paginasmostrar () {
    imagenessegundo.forEach((pagina, i) => {
        pagina.style.display = (i === indice2) ? `block` : `none`;
    });

    if (indice2 === 0) {
        atras2.style.display= "none"
    }
    else {
        atras2.style.display= "block"
    }

    if (indice2 === imagenessegundo.length - 1){
        seguir2.style.display = "none"
    }
    else {
        seguir2.style.display = "block"
    }
}

    atras2.addEventListener ("click", () => {
    indice2--;
    if (indice2<0) indice2 = 0;
    paginasmostrar ();
})

    seguir2.addEventListener ("click", () => {
    indice2 ++;
    if (indice2 > imagenessegundo.length) indice2 = imagenessegundo.length - 1;
    paginasmostrar ();
})

paginasmostrar ();
