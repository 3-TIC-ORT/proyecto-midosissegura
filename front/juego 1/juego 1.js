const lineas = document.getElementById ("lineas");
const ctx = lineas.getContext ("2d");
let azul = null;
let img1 = document.getElementById ("img1");
let img2 = document.getElementById ("img2");
let img3 = document.getElementById ("img3");
let img4 = document.getElementById ("img4");
let img5 = document.getElementById ("img5");
let img6 = document.getElementById ("img6");
let img7 = document.getElementById ("img7");
let img8 = document.getElementById ("img8");
const botonesazules = document.querySelectorAll ("botonesazules");
const botonesrojos = document.querySelectorAll ("botonesrojos");
const prueba1 = document.getElementById ("prueba1");
const prueba2 = document.getElementById ("prueba2");
const prueba3 = document.getElementById ("prueba3");
let numero = 0;
let imgactiva1 = null;
let imgactiva2 = null;
let imgactiva3 = null;
const uno = "posicion1";
const dos = "posicion2";
const tres = "posicion3";
function cambiarnm (posicion){
numero= Math.random ();
img1.classList.remove ("display", uno, dos, tres);
img2.classList.remove ("display", uno, dos, tres);
img3.classList.remove ("display", uno, dos, tres);
img4.classList.remove ("display", uno, dos, tres);
img5.classList.remove ("display", uno, dos, tres);
img6.classList.remove ("display", uno, dos, tres);
img7.classList.remove ("display", uno, dos, tres);
img8.classList.remove ("display", uno, dos, tres);
if (numero <=0.125){
    img1.classList.add ("display");
    img1.classList.add (posicion);
    imgactiva = "img1";
}
else if (numero >0.125 && numero <=0.25){
    img2.classList.add ("display");
    img2.classList.add (posicion);
    imgactiva = "img2";
}
else if (numero >0.25 && numero <=0.375){
    img3.classList.add ("display");
    img3.classList.add (posicion);
    imgactiva = "img3"
}
else if (numero >0.375 && numero <=0.5){
    img4.classList.add ("display");
    img4.classList.add (posicion);
    imgactiva = "img4"
}
else if (numero >0.5 && numero <=0.625){
    img5.classList.add ("display");
    img5.classList.add (posicion);
    imgactiva = "img5"
}
else if (numero >0.625 && numero <=0.75){
    img6.classList.add ("display");
    img6.classList.add (posicion);
    imgactiva = "img6"
}
else if (numero >0.75 && numero <=0.875){
    img7.classList.add ("display");
    img7.classList.add (posicion);
    imgactiva = "img7"
}
else if (numero >0.875 && numero <=1){
    img8.classList.add ("display");
    img8.classList.add (posicion);
    imgactiva = "img8"
}
}
cambiarnm (uno);
cambiarnm (dos);
cambiarnm (tres);