const boton2 = document.getElementById ("boton2");

const segundo1 = document.getElementById("1segundo");
const segundo2 = document.getElementById("2segundo");
const segundo3 = document.getElementById("3segundo");
const segundo4 = document.getElementById("4segundo");


const imagenessegundo = document.querySelectorAll (".imagenessegundo");

function paginasmostrar (pagina) {
    imagenessegundo.forEach((pagina, i) => {
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
