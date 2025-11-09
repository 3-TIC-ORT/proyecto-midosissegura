const nombreniño = document.getElementById ("nombrenene");
const apellidoniño = document.getElementById ("apellidonene");
const botonEnviar = document.getElementById ("send")


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


function anteojosenpantalla() {
    return anteojos.find((lentes) => lentes.classList.contains ("visible"));
}

const anteojovisible = anteojosenpantalla ();

function cabelloenpantalla() {
    return cabellos.find((cabello) => cabello.classList.contains ("visible"));
}

const cabellovisible = cabelloenpantalla ();

function pielenpantalla() {
    return pieles.find((piel) => piel.classList.contains ("visible"));
}

const pielvisible = pielenpantalla ();

const valorpiel = parseInt(pielvisible.dataset.valor);
const valoranteojos = parseInt(anteojovisible.dataset.valor);
const valorpelo = parseInt(cabellovisible.dataset.valor);

function registroAVATAR () {
    const valorfinal = valorpiel + valoranteojos + valorpelo;
    return valorfinal
}

const avatarvalor = registroAVATAR();

function enviardatos() {
    localStorage.setItem ("nombreniño", nombreniño.value);
    localStorage.setItem ("apellidoniño", apellidoniño.value);
    localStorage.setItem ("contraseña", avatarvalor)
    postEvent("UsuarioRegistrado", {
        NOMBRE: nombreniño.value,
        APELLIDO: apellidoniño.value,
        CONTRASEÑA: avatarvalor
    }, 
    function (data) {
        console.log(data);
        alert("usuario registrado");
    }
    )
}

