connect2Server();
const nombreniño = document.getElementById ("nombrenene");
const apellidoniño = document.getElementById ("apellidonene");
const botonEnviar = document.getElementById ("aceptar");


let cabello = 0;
const cabellos = document.querySelectorAll ('#cabellos .pelo')

document.getElementById ('cabellos').addEventListener ("click", () => {
        cabellos[cabello].classList.remove ('visible');
        cabello = (cabello + 1) % cabellos.length;
        cabellos[cabello].classList.add ('visible');
})

let lentes = 0;
const anteojos = document.querySelectorAll ('#anteojosysol .lentes')

document.getElementById ('anteojosysol').addEventListener ("click", () => {
        anteojos[lentes].classList.remove ('visible');
        lentes = (lentes + 1) % anteojos.length;
        anteojos[lentes].classList.add ('visible');
})

let piel = 0;
const pieles = document.querySelectorAll ('#colorcitos .piel')

document.getElementById ('colorcitos').addEventListener ("click", () => {
        pieles[piel].classList.remove ('visible');
        piel = (piel + 1) % pieles.length;
        pieles[piel].classList.add ('visible');
})

let valorpiel = 0;
let valoranteojos = 0;
let valorpelo = 0;
let ratio = 0;

function AVATAR () {
    const pielvisible = document.querySelector('#colorcitos .visible');
    const cabellovisible = document.querySelector('#cabellos .visible');
    const anteojovisible = document.querySelector('#anteojosysol .visible');

    valorpiel = parseInt(pielvisible.dataset.valor);
    valoranteojos = parseInt(anteojovisible.dataset.valor);
    valorpelo = parseInt(cabellovisible.dataset.valor);

    const valorfinal = valorpiel + valoranteojos + valorpelo;
    return valorfinal
}

function enviardatos() {
    const avatarvalor = AVATAR();

    localStorage.setItem ("nombreniño", nombreniño.value);
    localStorage.setItem ("apellidoniño", apellidoniño.value);
    localStorage.setItem ("contraseña", avatarvalor)
    localStorage.setItem ("valorpiel", valorpiel);
    localStorage.setItem ("valoranteojos", valoranteojos);
    localStorage.setItem ("valorpelo", valorpelo);
    localStorage.setItem ("RATIO", ratio);
    postEvent("UsuarioRegistrado", {
        NOMBREniño: nombreniño.value,
        APELLIDOniño: apellidoniño.value,
        CONTRASENAniño: avatarvalor
    },
    function (data) {
        const respuesta = data;
    })
    postEvent ("InicioNiños", {
        NOMBREniño: nombreniño.value,
        APELLIDOniño: apellidoniño.value,
        CONTRASENAniño: avatarvalor
    },
    function (data) {
        const respuesta = data;
    }) 
}

botonEnviar.addEventListener ("click", enviardatos);

