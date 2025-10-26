const lineas = document.getElementById ("lineas");
const ctx = lineas.getContext ("2d");
let azul = null;
let img1 = document.getElementById ("img1");
let img2 = document.getElementById ("img2");
let img3 = document.getElementById ("img3");
const botonesazules = document.querySelectorAll ("botonesazules");
const botonesrojos = document.querySelectorAll ("botonesrojos");
const prueba1 = document.getElementById ("prueba1");
const prueba2 = document.getElementById ("prueba2");
let numero = 0;
let imgactiva = null;
const uno = "posicion1";
function cambiarnm (posicion){
numero= Math.random ();
if (numero <=0.33){
img1.classList.add ("display");
img1.classList.add (posicion);
imgactiva = "img1";
}
else if (numero >0.33 && numero <=0.66){
img2.classList.add ("display");
img2.classList.add (posicion);
imgactiva = "img2";
}
else {
img3.classList.add ("display");
img3.classList.add (posicion);
imgactiva = "img3"
}
if (imgactiva == "img1"){
prueba1.innerHTML = "tostada";
prueba2.innerHTML = "carne y banana";}
else if (imgactiva == "img2"){
prueba1.innerHTML = "carne";
prueba2.innerHTML = "tostada y banana";
}
else{
prueba1.innerHTML = "banana";
prueba2.innerHTML = "tostada y carne";
}}
cambiarnm (uno);