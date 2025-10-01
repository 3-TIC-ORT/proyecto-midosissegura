let nivelglucemia= 70;
const plato= document.getElementById ("plato");
const platopantalla = null;
const platofideos = document.getElementById ("Fideos");
const platopapasfritas = document.getElementById ("PapasFritas");
const platocarne = document.getElementById ("Carne");
const platohelado = document.getElementById ("Helado");
const moguls = document.getElementById ("Moguls");
const lapicera = document.getElementById ("Lapicera");

function cambiosglucemia (cambio) {
    nivelglucemia += cambio
}

const platos= [
    platofideos,
    platopapasfritas,
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

window.onload = function () {
    platoaleatorio ();
}

platofideos.addEventListener ("click", function() {
    cambiosglucemia (50);
    alert ("La glucemia esta a " + nivelglucemia);
})

platopapasfritas.addEventListener ("click", function() {
    cambiosglucemia (40);
    alert ("La glucemia esta a " + nivelglucemia);
})

platocarne.addEventListener ("click", function() {
    cambiosglucemia (10);
    alert ("La glucemia esta a " + nivelglucemia);
})

platohelado.addEventListener ("click", function() {
    cambiosglucemia (60);
    alert ("La glucemia esta a " + nivelglucemia);
})

moguls.addEventListener ("click", function() {
    cambiosglucemia (15);
    alert ("La glucemia esta a " + nivelglucemia);
})

lapicera.addEventListener ("click", function() {
    cambiosglucemia (-30);
    alert ("La glucemia esta a " + nivelglucemia);
})