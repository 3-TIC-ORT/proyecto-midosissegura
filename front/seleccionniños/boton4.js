const boton4 = document.getElementById ("boton4");

const cuarto1 = document.getElementById("1cuarto");
const cuarto2 = document.getElementById("2cuarto");
const cuarto3 = document.getElementById("3cuarto");
const cuarto4 = document.getElementById("4cuarto");
const cuarto5 = document.getElementById("5cuarto");
const cuarto6 = document.getElementById("6cuarto");
const cuarto7 = document.getElementById("7cuarto");


const imagenescuarto = document.querySelectorAll (".imagenescuarto");

function paginasmostrar (pagina) {
    imagenescuarto.forEach((pagina, i) => {
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
