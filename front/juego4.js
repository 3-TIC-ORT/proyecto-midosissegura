let nivelglucemia= 70;
const plato= document.getElementById ("plato");

const platos= [
    "img/plato1.png",
    "img/plato2.png",
    "img/plato3.png"
];

function platoaleatorio () {
    const platorandom= Math.floor(Math.random() * platos.length);
    plato.src =  platos [platorandom];
}

function medidor() {
    const glucemia= 
}