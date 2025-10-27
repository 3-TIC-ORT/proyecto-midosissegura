
const lineas = document.getElementById ("lineas");
const ctx = lineas.getContext ("2d");
const botonesazules = document.querySelectorAll (".botonesazules");
const botonesrojos = document.querySelectorAll (".botonesrojos");
let azul = null;
let rojo = null;
let bien = 0;


let img1 = document.getElementById ("img1");
let img2 = document.getElementById ("img2");
let img3 = document.getElementById ("img3");
let img4 = document.getElementById ("img4");
let img5 = document.getElementById ("img5");
let img6 = document.getElementById ("img6");
let img7 = document.getElementById ("img7");
let img8 = document.getElementById ("img8");
let carbos1 = document.getElementById ("carbos1");
let carbos2 = document.getElementById ("carbos2");
let carbos3 = document.getElementById ("carbos3");
let carbos4 = document.getElementById ("carbos4");
let carbos5 = document.getElementById ("carbos5");
let carbos6 = document.getElementById ("carbos6");
let carbos7 = document.getElementById ("carbos7");
let carbos8 = document.getElementById ("carbos8");
let numero = 0;
let imgactiva1 = null;
let imgactiva2 = null;
let imgactiva3 = null;
const uno = "posicion1";
const dos = "posicion2";
const tres = "posicion3";
function ocultarimagenes () {
    img1.classList.add ("display", uno, dos, tres);
    img2.classList.add ("display", uno, dos, tres);
    img3.classList.add ("display", uno, dos, tres);
    img4.classList.add ("display", uno, dos, tres);
    img5.classList.add ("display", uno, dos, tres);
    img6.classList.add ("display", uno, dos, tres);
    img7.classList.add ("display", uno, dos, tres);
    img8.classList.add ("display", uno, dos, tres);

    carbos1.classList.add ("display");
    carbos2.classList.add ("display");
    carbos3.classList.add ("display");
    carbos4.classList.add ("display");
    carbos5.classList.add ("display");
    carbos6.classList.add ("display");
    carbos7.classList.add ("display");
    carbos8.classList.add ("display");
}
ocultarimagenes ();


function cambiarnm (posicion, usada1, usada2){
numero= Math.random ();
let seleccion;
if (numero <=0.125) seleccion = "img1";
    else if (numero >0.125 && numero <=0.25) seleccion = "img2";
    else if (numero >0.25 && numero <=0.375) seleccion ="img3";
    else if (numero >0.375 && numero <=0.5) seleccion = "img4";
    else if (numero >0.5 && numero <=0.625) seleccion = "img5";
    else if (numero >0.625 && numero <=0.75) seleccion = "img6";
    else if (numero >0.75 && numero <=0.875) seleccion = "img7";
    else seleccion = "img8";


if (seleccion === usada1 || seleccion === usada2) {
    if (seleccion === "img1") seleccion = "img2";
    else if (seleccion === "img2") seleccion = "img3";
    else if (seleccion === "img3") seleccion = "img4";
    else if (seleccion === "img4") seleccion = "img5";
    else if (seleccion === "img5") seleccion = "img6";
    else if (seleccion === "img6") seleccion = "img7";
    else if (seleccion === "img7") seleccion = "img8";
    else if (seleccion === "img8") seleccion = "img1";
}


if (seleccion === usada1 || seleccion === usada2) {
    if (seleccion === "img1") seleccion = "img2";
    else if (seleccion === "img2") seleccion = "img3";
    else if (seleccion === "img3") seleccion = "img4";
    else if (seleccion === "img4") seleccion = "img5";
    else if (seleccion === "img5") seleccion = "img6";
    else if (seleccion === "img6") seleccion = "img7";
    else if (seleccion === "img7") seleccion = "img8";
    else if (seleccion === "img8") seleccion = "img1";
}


if (seleccion === usada1 || seleccion === usada2) {
    if (seleccion === "img1") seleccion = "img2";
    else if (seleccion === "img2") seleccion = "img3";
    else if (seleccion === "img3") seleccion = "img4";
    else if (seleccion === "img4") seleccion = "img5";
    else if (seleccion === "img5") seleccion = "img6";
    else if (seleccion === "img6") seleccion = "img7";
    else if (seleccion === "img7") seleccion = "img8";
    else if (seleccion === "img8") seleccion = "img1";
}


const img = document.getElementById (seleccion);
img.classList.remove ("display");
img.classList.add (posicion);




let comidaCarbohidratos;
if (seleccion === "img1") comidaCarbohidratos = carbos1;
if (seleccion === "img2") comidaCarbohidratos = carbos2;
if (seleccion === "img3") comidaCarbohidratos = carbos3;
if (seleccion === "img4") comidaCarbohidratos = carbos4;
if (seleccion === "img5") comidaCarbohidratos = carbos5;
if (seleccion === "img6") comidaCarbohidratos = carbos6;
if (seleccion === "img7") comidaCarbohidratos = carbos7;
if (seleccion === "img8") comidaCarbohidratos = carbos8;


comidaCarbohidratos.classList.remove ("display");
comidaCarbohidratos.classList.add (posicion);


return seleccion;
}
imgactiva1 = cambiarnm (uno, null, null);
imgactiva2 = cambiarnm (dos, imgactiva1, null);
imgactiva3 = cambiarnm (tres, imgactiva1, imgactiva2);
