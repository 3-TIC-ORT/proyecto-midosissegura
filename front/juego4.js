let nivelglucemia= 70;
const plato= document.getElementById ("plato");
const platofideos = document.getElementById ("Fideos");
const platopapasfritas = document.getElementById ("PapasFritas");
const platocarne = document.getElementById ("Carne");
const platohelado = document.getElementById ("Helado");

function cambiosglucemia (cambio) {
    nivelglucemia += cambio
}

const platos= [
    "img/plato1.png",
    "img/plato2.png",
    "img/plato3.png",
    "img/plato4.png"
];

function platoaleatorio () {
    const platorandom= Math.floor(Math.random() * platos.length);
    plato.src =  platos [platorandom];
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