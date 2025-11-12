const nombreniño = document.getElementById ("nombrenene");
const apellidoniño = document.getElementById ("apellidonene");
const botonEnviar = document.getElementById ("send");


let cabello = 0;
const cabellos = document.querySelectorAll ('#cabellos .pelo')
let valorcabello = 0;

cabellos.forEach (cabello =>   {
        valorcabello = parseInt(cabello.dataset.valor)
})

document.getElementById ('cabellos').addEventListener ("click", () => {
        cabellos[cabello].classList.remove ('visible');
        cabello = (cabello + 1) % cabellos.length;
        cabellos[cabello].classList.add ('visible');
})

let lentes = 0;
const anteojos = document.querySelectorAll ('#anteojosysol .lentes')
let valoranteojos = 0;

anteojos.forEach (lentes =>   {
        valoranteojos = parseInt(lentes.dataset.valor)
})

document.getElementById ('anteojosysol').addEventListener ("click", () => {
        anteojos[lentes].classList.remove ('visible');
        lentes = (lentes + 1) % anteojos.length;
        anteojos[lentes].classList.add ('visible');
})

let piel = 0;
const pieles = document.querySelectorAll ('#colorcitos .piel')
let valorpiel = 0;

pieles.forEach (piel =>   {
        valorpiel = parseInt(piel.dataset.valor)
})

document.getElementById ('colorcitos').addEventListener ("click", () => {
        pieles[piel].classList.remove ('visible');
        piel = (piel + 1) % pieles.length;
        pieles[piel].classList.add ('visible');
})

const nombredelnene = localStorage.getItem ("nombreniño");
const apellidodelnene = localStorage.getItem ("apellidoniño");
const valoranteojos = localStorage.getItem ("valoranteojos");
const valorpelo = localStorage.getItem ("valorpelo");
const valorpiel = localStorage.getItem ("valorpiel");

function verificardatos () {
    if (nombreniño === nombredelnene && apellidoniño === apellidodelnene  && cabello === valorcabello && piel === valorpiel && lentes === valoranteojos) {
            
    }
}

