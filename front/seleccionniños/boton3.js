const boton3 = document.getElementById ("boton3");

const tercer1 = document.getElementById("1tercer");
const tercer2 = document.getElementById("2tercer");
const tercer3 = document.getElementById("3tercer");
const tercer4 = document.getElementById("4tercer");
const tercer5 = document.getElementById("5tercer");
const tercer6 = document.getElementById("6tercer");
const tercer7 = document.getElementById("7tercer");
const tercer8 = document.getElementById("8tercer");
const tercer9 = document.getElementById("9tercer");


const imagenestercero = document.querySelectorAll (".imagenestercero");

function paginasmostrar (pagina) {
    imagenestercero.forEach((pagina, i) => {
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
