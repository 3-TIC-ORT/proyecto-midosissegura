connect2Server();

let nivelglucemia= 90;
const plato= document.getElementById ("plato");
const platopantalla = null;
const platobanana = document.getElementById ("Banana");
const platopizza = document.getElementById ("Pizza");
const platocarne = document.getElementById ("Carne");
const platohelado = document.getElementById ("Helado");
const comer = document.getElementById ("comer");
const insulina = document.getElementById ("insulina");
const azucar = document.getElementById ("azucar");
const mucha = document.getElementById ("mucho")
const baja = document.getElementById ("baja")
const normal = document.getElementById ("normal")
const nivelglucometro = document.getElementById ("nivelglucometro");
const botonatras = document.getElementById ("btnatras");

function actualizarglucometro() {
    nivelglucometro.textContent = nivelglucemia;
}

mucha.classList.add ("display");
baja.classList.add ("display");

function estadonene (){
if (nivelglucemia >= 181) {
    normal.classList.add ("display");
    baja.classList.add ("display");
    mucha.classList.remove ("display");
}

else if (nivelglucemia <= 89) {
    normal.classList.add ("display");
    mucha.classList.add ("display");
    baja.classList.remove ("display");
}

else if (nivelglucemia >= 90 && nivelglucemia <= 180){
    baja.classList.add ("display");
    mucha.classList.add ("display");
    normal.classList.remove ("display");
}
}

function cambiosglucemia (cambio) {
    nivelglucemia += cambio
}

const platos= [
    platobanana,
    platopizza,
    platocarne,
    platohelado
];

function platoaleatorio () {
    const platorandom= Math.floor(Math.random() * platos.length);
    
    platos.forEach (function(plato, i) {
    if (i===platorandom) {
        plato.style.display = "inline";
    } else {
        plato.style.display = "none";
    }
})
}   

function platoenpantalla() {
  return platos.find((plato) => plato.style.display === "inline");
}

window.onload = function () {
    platoaleatorio ();
    nivelglucemia=90;
    actualizarglucometro();
    estadonene();
}

comer.addEventListener("click", function () {
  const plato = platoenpantalla();

if (plato===platobanana) {
    cambiosglucemia (20);
    actualizarglucometro();
    estadonene();
}

if (plato===platopizza) {
    cambiosglucemia (30);
    actualizarglucometro();
    estadonene();
}

if (plato===platocarne) {
    cambiosglucemia (0);
    actualizarglucometro();
    estadonene();
}

if (plato===platohelado) {
    cambiosglucemia (30);
    actualizarglucometro();
    estadonene();
}

});

let apellido=localStorage.getItem ("apellidoniño");
let nombre=localStorage.getItem ("nombreniño");

let bajainsulina = 0;
let dosis = 0;
function cuentainsulina () {
postEvent("registro", {
    NOMBREniño: nombre,
    APELLIDOniño: apellido,
  },
  function (data) {
    console.log (data);
    if (!data) {
        return;
    }
        dosis = Number(data.DOSIS);
        console.log (dosis);
        bajainsulina = 1800 / dosis;
        
        cambiosglucemia(-bajainsulina);
        actualizarglucometro();
        estadonene();
  })
}


azucar.addEventListener ("click", function() {
    cambiosglucemia (15);
    actualizarglucometro();
    estadonene();
})

insulina.addEventListener ("click", cuentainsulina);

botonatras.addEventListener ("click", function() {
      postEvent("trofeos",{
      T5: true,
      NOMBREniño:nombre,
APELLIDOniño:apellido
       },function(data){
      console.log(data)
    }
    )
});